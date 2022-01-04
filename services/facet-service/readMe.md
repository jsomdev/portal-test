# Facets

A Facet is a collection of 1 or more filters that help narrow down search results by providing useful information to the user (e.g: Predicted results, limiting options, ...)

```typescript
// Facet
export type Facet<
  TFacetKey,
  TFacetOptionKey,
  TFacetOption extends FacetOption<TFacetOptionKey>
> = {
  key: TFacetKey;
  options: TFacetOption[];
  predictedResults: FacetResult[];
  configuration: FacetViewConfiguration;
  [extraFacetAttributes: string]: any;
};

//FacetOption
export type FacetOption<TOptionKey> = {
  key: TOptionKey;
  configuration: FacetOptionViewConfiguration;
  isActive: boolean;
};
```

## Main ideas about a facet

- A facet is identified by a unique key.
- A facet has a collection of 0 or more options.
- A facet has a collection of 0 or more predicted results for its available options. This predicted result predicts the count of items.
- A facet has some configuration that gives information about how the facet ought to be displayed.

### Building a facet

The goal is to build a facet using one or more api-calls. The results of the call(s) are used to set-up an initial facet-state. A factory that implements a provider interface for each sort

### Extending a Facet

A product facet extends a facet and adds following attributes:

- attributeTypeId: An identifier unique to a product facet.
  While extending a facet, we keep the option to add additional, not type-safe, configuration.

## Managing Facet State

As soon as the initial facets with options and configurations are loaded, we can initialise the state that will be read and updated by the view components through a hook with reducer.

There needs to be a debate about whether we want a parent component to manage the state of each of its children (events are emitted from children to parent after which the parent dispatches an action) or that facet itself should be the one to dispatch actions to the state.

The main concern here is that, if the child is the 'Smart' component, there will be a call per facet when the new predicted results need to be retrieved. Whereas, if the parent would be the 'Smart' component, this could be a batch request.

Important to know, a list of Facets [ FacetA, FacetB, FacetC] will be map to:

```Typescript
state: {
    [FacetA.key] : FacetA,
    [FacetB.key] : FacetB,
    [FacetC.key] : FacetC
}
```

### The most important actions

```Typescript
 | {
      type: "updateFacet";
      facet: Facet<FacetOption<any>>;
    }
  | {
      type: "updateFilterQuery";
      query: string;
    }
  | {
      type: "clearFacetOptions";
      facetKey: FacetKey;
    }
  |
```

- UpdateFacet: this action will be dispatched when a facet has been updated (e.g: option from active to inActive, or new predicted results)
- UpdateFilterQuery: this action will be dispatched as an result of changing any faction. The query passed as payload is the odata part of the filter that will be used to fetch the items (eg: in the overview)
- ClearFacetOptions: Reset the facet to have no options active , thus being non influential to the results

## Displaying components based on state
