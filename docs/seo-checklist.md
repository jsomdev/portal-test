---
description: SEO Details  
author: Ward Werbrouck  
contributor(s):   
changelog: (Date | By | Comment)  
22/09/2022 | Ward Werbrouck | Initial version
---

# Page SEO

To let search engines know about alternative versions of the page, a `<link>` must be included for each version (including the default) with `rel="alternate"` and `hreflang="${locale}"` defined properly.

In the first iteration of the application we'll add the correct `<link rel=alternate>`s to each page, later we'll also generate sitemaps with alternate language url's added.

If we need to support an additional locale, make sure to add it to the Locale type.

### SEO Checklist

When developing new routes in the application, always check if these things are implemented and working

- Use the `Page`-component
- Add a SEO friendly title
    - If the route is dynamic and serves multiple pages (eg. `[...categorySlug]`) make sure each page has a unique title that is based on the data that is shown on the page.  
      For example: each category page should have a title with the name of the category in it, not the same title 'Category' on each page.
- Add an SEO friendly description
    - Same as with the title, if it's a dynamic route, make the description unique for each url.
- pass the `localePaths` props an object with translations for each locale of the page. This will be used to generate a canonical link `<link rel="canonical" href="">` and alternate language links `<link rel="alternate" hrefLang="...">`.
    - There are 2 helper functions to help generate this object
        - `getLocalePaths`: in case the path is the same for all locales, this will mostly be for pages where we don't have translated slugs.
          for example: /account, /nl-BE/account, /fr-FR/account
        - `getLocalePathsFromMultilingual`: in case the slug is based on data that is a `MultilingualString`. The function will automaticly use fallbacks to English in case the `MultilingualString` doesn't contain translations for all locales.
- use Hreflang Tag Checker to check if the `<link rel="alternate">`tags are setup correctly with each page having a back-ref (https://chrome.google.com/webstore/detail/hreflang-tag-checker/hjgdcecfiohgajnhilmjhebdganpaomk)


### Examples

```typescript
const MyAccount: NextPage<AppLayoutProps> = ({ siteMenuItems, mainMenuItems }) => {
    const { formatMessage } = useIntl();
    const messages = defineMessages({
        headTitle: {
            id: messageIds.pages.myAccount.headTitle,
            description: 'My Account Title',
            defaultMessage: 'My Account'
        },
        headDescription: {
            id: messageIds.pages.myAccount.headDescription,
            description: 'My account description',
            defaultMessage: 'Experts in Spray Technology | Spraying Systems Co.'
        }
    });
    return (
        <Page
            title={formatMessage(messages.headTitle)}
    description={formatMessage(messages.headDescription)}
    localePaths={getLocalePaths('my-account')}
>
    <GlobalDataProvider
        siteMenuItems={siteMenuItems}
    mainMenuItems={mainMenuItems}
        >
        <AppLayout>...Page components here...</AppLayout>
    </GlobalDataProvider>
    </Page>
);
};
```

```typescript
const Category: NextPage<CategoryProps> = ({ category }) => {
  const { locale } = useIntl();
  const categoryFormatter: CategoryFormatter = new CategoryFormatter(
    category,
    locale
  );
  return (
    <Page
      title={categoryFormatter.formatName()}
      description={categoryFormatter.formatDescription()}
      localePaths={getLocalePathsFromMultilingual('categories', category.slug)}
    >
      ...category components here...
    </Page>
  );
};
```
