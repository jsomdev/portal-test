---
 description: Documentation about the page structure in the NextJS application and the corresponding user flows
 author: Jan Somers
 contributor(s): 
 changelog: (Date | By | Comment)
  29/06/2022 | Jan Somers | Recovered Version 

---

# Page Structure and User Flows

## Introduction

NextJS has a file-system based router built on the [concept of pages](https://nextjs.org/docs/basic-features/pages). Each page in the file-system is associated with one route based on its file name. A file (or folder) name can follow certain patterns to associate them with multiple routes. This concept is called [Dynamic Routing](https://nextjs.org/docs/routing/dynamic-routes).

By default, Next.js **pre-renders** every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO. And that is exactly why we're building the Portal with NextJS.

## Pre-rendering pages

There are two forms in pre-rendering in NextJS.

- **Static Generation (SSG)**: Pages are generated on the server at build time. This is the recommended approach as it is the fastest for the end user.
- **Server-side Rendering (SSR)**: Pages are generated on the server at request time. This means that every request will pre-render its content. It is not recommended to use this approach but it should be used for pages that have frequently updated data.

Important note: You cannot combine **SSG** with **SSR** on a page. You can combine either with client-side rendering however.

## Strategy

In the application we will try to achieve **Static Generation** for all of our pages and use **Client-Side** data fetching to fetch additional data. For pages that have excessive paths (e.g.: Products) we will use **_Incremental_ Static Generation**. This will generate only a subset of paths that will be statically generated at first, but each other path will be added after the first request.

## Page Structure

###
