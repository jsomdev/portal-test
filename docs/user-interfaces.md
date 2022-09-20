---
 description: Documentation about user interfaces and layout with fluent ui
 author: Jan Somers
 contributor(s): 
 changelog: (Date | By | Comment)
  22/10/2021 | Jan Somers | Initial version
  07/11/2021 | Jan Somers | Version 1
  15/11/2021 | Jan Somers | Full rewrite to simpler version
  17/11/2021 | Jan Somers | Definite version [1]
---

# User Interfaces, Layout and design

## Pages

Next.js is built around the concept of pages. These are React Components that are associated with a route based on their file name.
The type of content displayed on these pages can be categorized in the application:

- Components: Reusable UI-oriented components that are created for application wide usage. (e.g. Button, Badge, ...)
- Widgets: (Reusable) Functionality-oriented component(s) that serve a specific purpose in the application.
  - Visual: Widgets that will be visible to the user (e.g. SiteHeader, SiteLogo, ...)
  - Behavioral / Technical: Widgets that help solve more technical challenges (e.g. MediaQuery, Metadata Head)
- Third Party Components: Reusable components that come from a component library.
  - The components from **[Fluent UI React](https://developer.microsoft.com/en-us/fluentui#/get-started/web)** are the _go to_ controls to use inside the application. Their **components, utilities and theming** will be a common thread inside the project.
  - Examples of other component libraries used in the application: [React-Markdown](https://github.com/remarkjs/react-markdown) , [Recharts](https://recharts.org/en-US/)

## Main Principles

There are some main principles -_guidelines_- that should be considered when creating new components and widgets.

1. **Responsive Design (Mobile First): **The application should look exceptional on both small and large screens. Code should default to small screen sizes with logic for larger screen sizes.
1. **User Friendly**: Consider the behavior of the user. All scenario's should be covered in a user friendly manner (happy path versus unhappy path).
1. **Fluent UI Layout System**: [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) inspired _Stacks_ and _StackItems_ controls from FluentUI should be used.
1. **CCS in JS**: Strongly typed interfaces should be used for styling our components. FluentUI comes with a built-in api that does this really well.

   1. Use FluentUI Api whenever possible.
   1. Use Typed Interfaces if applicable.
   1. Use Styled JSX (scoped) otherwise.

1. **Search Engine Optimization**: Follow the SEO guidelines closely (e.g. [Google SEO Guidelines](https://developers.google.com/search/docs/advanced/guidelines/webmaster-guidelines))
1. **I18n**: Text, dates, numbers,... should be i18n compliant.
1. **Rendering approach**: Determine the best rendering approach for pages and their components. [Comparison and explanation](https://medium.com/nerd-for-tech/compare-and-contrast-csr-ssr-and-ssg-in-nextjs-58e3caf2e15e).
1. **Document and Test**: To improve the understanding and stability of the code, documentation and tests should be written.

## New Components

To create a new component, make a `{componentName}.tsx`file. Typically a component plus occasionally a helper file will do for simple components and widgets. Technical widgets, which will not be documented in this chapter, usually require different files and implementations.

<u>The file name:</u>

- must be _camelCase_
- must have `.tsx` file extension (Typescript)
- must be unambiguous
- must be declarative
- must share its name with the root component inside the file

<u>The component file includes:</u>

- Root component props interface declaration: `ComponentNameProps`
- Root component styles interface declaration: `ComponentNameStyles`
- Root component implementation: `ComponentName`
  - Use _strongly typed_ Function components when possible. More information: [React Class Component vs Functional Component](https://www.telerik.com/blogs/react-class-component-vs-functional-component-how-choose-whats-difference?kw=&cpn=12467376394&&utm_source=google&utm_medium=cpc&utm_campaign=kendo-ui-react-trial-search-bms-EMEA&ad_group=DSA+Ad+Group&utm_term=DYNAMIC+SEARCH+ADS&ad_copy=&ad_type=&ad_size=&ad_placement=&gclid=Cj0KCQiAys2MBhDOARIsAFf1D1eXka0XiyNVk2anxLxaXZz6ptg74eujYIbLb5HLJ-qEfRMxoCVIZbYaAuyhEALw_wcB&gclsrc=aw.ds)
- Sub component(s) implementation
  - Inherent to the root component
  - Sub component props and styles interface declaration
  - Not exported / used outside of the component file.

Example of a (partial) component file that includes everything mentioned above.

`siteHeader.tsx`

```tsx
// ... imports

export interface ISiteHeaderProps {
  onOpenSideNavigation?: (type: SiteNavigationType) => void;
}

/**
 * Header component for the Spray.com links.
 * Based on the screen size a different version will be displayed.
 * Important note: the aim is to keep this header aligned with the spray.com header.
 */
export const SiteHeader: React.FC<SiteHeaderProps> = ({
  items,
  onOpenSideNavigation
}) => {
  const isLarge = useLarge();

  if (isLarge) {
    return <DesktopSiteHeader items={items || []} />;
  }

  return (
    <MobileSiteHeader
      items={items}
      onOpenSideNavigation={onOpenSideNavigation}
    />
  );
};

// ### Mobile Site Header

interface MobileSiteHeaderStyles {
  root: IStackStyles;
  logoContainer: IStackStyles;
}

const MobileSiteHeader: React.FC<SiteHeaderProps> = ({
  onOpenSideNavigation
}) => {
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();

  const messages = defineMessages({
    searchPlaceholder: {
      id: messageIds.navigation.searchBar.placeholder,
      description: 'Page search bar placeholder',
      defaultMessage: 'Search by part number...'
    }
  });

  const styles: MobileSiteHeaderStyles = {
    root: {
      root: {
        height: rem(80),
        position: 'relative'
      }
    },
    logoContainer: {
      root: {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)'
      }
    }
  };
  return (
    <Stack>
      <Stack
        horizontal
        verticalAlign="center"
        tokens={{
          padding: `0 ${rem(spacing.s1)}`
        }}
        horizontalAlign="space-between"
        styles={styles.root}
      >
        <Stack
          horizontal
          grow
          verticalFill
          tokens={{ childrenGap: rem(spacing.s1) }}
          verticalAlign="center"
        >
          <SiteHeaderButton
            onClick={() => {
              onOpenSideNavigation?.('site');
            }}
            iconProps={{
              iconName: 'GlobalNavButton'
            }}
          />
        </Stack>
        <Stack styles={styles.logoContainer}>
          <SiteLogo />
        </Stack>
        <Stack
          horizontal
          verticalAlign="center"
          tokens={{ childrenGap: rem(spacing.s2) }}
        >
          <SiteHeaderButton
            iconProps={{
              iconName: 'ShoppingCart'
            }}
          />

          <SiteHeaderButton
            onClick={() => {
              onOpenSideNavigation?.('user');
            }}
            iconProps={{
              iconName: 'Contact'
            }}
          />
        </Stack>
      </Stack>
      <Stack
        tokens={{
          padding: `0 ${rem(12)}`
        }}
      >
        <TextField
          iconProps={{ iconName: 'Search' }}
          placeholder={formatMessage(messages.searchPlaceholder)}
        />
      </Stack>
    </Stack>
  );
};

// other code ...
```

The **conventions** for positioning variables and functions inside a component are arguable. But for the time being the following can be assumed:

- Stateful references / initialisations must be placed at the top of the component scope
  - useContext, useHookX, useState, useMemo,...
- Stateless variables can be placed inside or outside the component scope (e.g. in a .helper file to reduce clutter)
- Functions (stateless and stateful) are placed underneath the variables. Stateless functions can also be placed outside the component scope (in a helper file to reduce clutter)
  - Shorthand expressions are treated as functions: `const doX = () => {// do sth}`
  - Callbacks are also treated as functions: `const doX = useCallback( () => {// do sth}, [])`
- Effects (`useEffect`) are placed as low in the component as possible.
- Styles initialization as close to the html as possible

```tsx
// appHeader.tsx
/**
 * Header component that is displayed at the top of each page.
 */
export const AppHeader: React.FC<IAppHeaderProps> = ({ showMainHeader }) => {
  // STATEFUL HOOK INITIALISATION
  const { semanticColors } = useTheme();
  // STATEFUL VARIABLE DECLARATION + INITIALISATION
  const [sideNavigationType, setSideNavigationType] =
    useState<null | SiteNavigationType>(null);

  // STATELESS FUNCTION IMPLEMENTATION
  function onSitePanelDismiss(): void {
    setSideNavigationType(null);
  }

  // EFFECTS WOULD GO HERE
  // useEffect(() => {// do sth}, [])

  // STYLES VARIABLE DECLARATION + INITIALISATION
  const styles: IAppHeaderStyles = {
    root: {
      borderBottom: `1px solid ${semanticColors.variantBorder}`,
      position: 'fixed',
      backgroundColor: semanticColors.bodyBackground,
      top: 0,
      left: 0,
      right: 0
    }
  };
  // MARKUP
  return (
    <header style={styles.root}>
      <SiteHeader onOpenSideNavigation={setSideNavigationType} />
      {showMainHeader && <MainHeader />}
      <SitePanel
        type={sideNavigationType}
        panelProps={{
          isOpen: !!sideNavigationType,
          onDismiss: onSitePanelDismiss
        }}
      />
    </header>
  );
};
```

## Responsive Design

- Mobile first: the default styling of a component should be the mobile css. Add overwrites for the larger screens. (using `...mediaQueryFrom()`)
- The provided breakpoints:
  - mobile: from 0px width to 1024px. This covers mobile devices, but also smaller tablet and tablets in portrait view. (eg. iPad Air in portrait is 820px wide)
  - tablet: from 1024px to 1280px. This covers larger screens, from tablets (in landscape) to smaller laptops.
  - desktop: from 1280px to \*. This covers everything with a lot of screen real estate.
- In most cases, we'd try to stick to a small and a large layout ("mobile" vs. "tablet and above"), only added specific cases for desktop when relevant.
- Use `<Mobile>`and `<TabletAndDesktop>` if different components are needed for small and larger screens.
- For more specific breakpoint usage, use the `<Media>` component.
- `ResponsiveStack` is provided for switching stack direction based on screen-size.

```tsx
import { NextPage } from 'next';

import { ResponsiveStack } from '@components/stacks/responsiveStack';
import { IStackStyles, Stack, StackItem, mergeStyles } from '@fluentui/react';
import {
  Mobile,
  TabletAndDesktop,
  mediaQueryFrom,
  useTabletAndDesktop
} from '@widgets/media-queries';

const styles = {
  basicExample: {
    backgroundColor: 'red',
    padding: 20,
    ...mediaQueryFrom('tablet', {
      backgroundColor: 'blue',
      padding: 40
    })
  }
};
const stackStyles: IStackStyles = {
  root: {
    padding: 5,
    ...mediaQueryFrom('tablet', {
      padding: 40
    })
  }
};
const Responsive: NextPage = () => {
  const isTabletOrDesktop = useTabletAndDesktop(); //try not to use the hooks, as they only work client-side and not when
  return (
    <div>
      {isTabletOrDesktop && <div>Tablet or desktop</div>}
      <div className={mergeStyles(styles.basicExample)}>Basic Responsive</div>
      <Stack styles={stackStyles}>
        <Mobile>
          {(className, renderChildren) => (
            <StackItem className={className}>
              {renderChildren && 'Stack Item: Mobile only'}
            </StackItem>
          )}
        </Mobile>
        <TabletAndDesktop>
          {(className, renderChildren) => (
            <StackItem className={className}>
              {renderChildren && 'Stack Item: Tablet/Desktop only'}
            </StackItem>
          )}
        </TabletAndDesktop>
        <StackItem>Stack Item 2</StackItem>
        <StackItem>Stack Item 3</StackItem>
      </Stack>
      <div>
        <Mobile>
          {(className, renderChildren) => (
            <div className={className}>
              {renderChildren && 'Only shown on mobile'}
            </div>
          )}
        </Mobile>
        <TabletAndDesktop>Only shown on tablet/desktop</TabletAndDesktop>
      </div>
      <ResponsiveStack>
        <span>One</span>
        <span>Two</span>
        <span>Three</span>
      </ResponsiveStack>
    </div>
  );
};
export default Responsive;
```

## Testing

Please checkout the _Example test suite in the testing documentation_
