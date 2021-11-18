import { Messages } from './';

/**
 * Messages Object used for referencing the ids of the messages when formatting.
 */
export const messageIds: Messages = {
  navigation: {
    main: {
      title: 'navigation.main.title',
      collapseLabel: 'navigation.main.collapseLabel',
      expandLabel: 'navigation.main.expandLabel',
    },
    site: {
      title: 'navigation.site.title',
      collapseLabel: 'navigation.site.collapseLabel',
      expandLabel: 'navigation.site.expandLabel',
    },
    user: {
      title: 'navigation.user.title',
      collapseLabel: 'navigation.user.collapseLabel',
      expandLabel: 'navigation.user.expandLabel',
    },
  },
  pages: {
    docs: {
      i18n: {
        title: 'pages.docs.i18n.title',
        description: 'pages.docs.i18n.description',
      }, userInterfaces: {
        title: 'pages.docs.userInterfaces.title',
        description: 'pages.docs.userInterfaces.description',
      },
      testing: {
        title: 'pages.docs.testing.title',
        description: 'pages.docs.testing.description',
      },
      projectSetup: {
        title: 'pages.docs.projectSetup.title',
        description: 'pages.docs.projectSetup.description',
      },
    },
  },
};
