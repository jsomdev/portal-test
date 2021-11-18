type I18NMessages = {
  title: string;
  description: string;
};
type IUserInterfacesMessages = {
  title: string;
  description: string;
};
type ITestingMessages = {
  title: string;
  description: string;
};
type IProjectSetupMessages = {
  title: string;
  description: string;
};

type ISiteNavigationMessages = {
  title: string;
  expandLabel: string;
  collapseLabel: string;
};
type IMainNavigationMessages = {
  title: string;
  expandLabel: string;
  collapseLabel: string;
};
type IUserNavigationMessages = {
  title: string;
  expandLabel: string;
  collapseLabel: string;
};

/**
 * Tree structure that represents all messages used throughout the application.
 * The messagesIds object can be used to reference their ids used when formatting messages using react-intl.
 */
export type Messages = {
  navigation: {
    site: ISiteNavigationMessages;
    main: IMainNavigationMessages;
    user: IUserNavigationMessages;
  };
  pages: {
    docs: {
      i18n: I18NMessages;
      userInterfaces: IUserInterfacesMessages;
      testing: ITestingMessages;
      projectSetup: IProjectSetupMessages;
    };
  };
};
