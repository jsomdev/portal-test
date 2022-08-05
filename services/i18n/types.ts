import { Audience } from '@services/portal-api/models/AudienceFlags';

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
type ISiteSearchBarMessages = {
  placeholder: string;
};
type IUserNavigationMessages = {
  title: string;
  expandLabel: string;
  collapseLabel: string;
  signIn: string;
  myProfile: string;
};

type IStepsMessages = {
  actions: {
    proceed: string;
    previous: string;
  };
};

type ILoadingUserMessages = {
  signingIn: string;
  signingOut: string;
  redirecting: string;
};

type INextHeadMessages = {
  headTitle: string;
  headDescription: string;
};

type IHomeMessages = INextHeadMessages;
type ICategoryMessages = INextHeadMessages;
type IModelMessages = INextHeadMessages;
type ISeriesMessages = INextHeadMessages;
/**
 * Tree structure that represents all messages used throughout the application.
 * The messagesIds object can be used to reference their ids used when formatting messages using react-intl.
 */
export type Messages = {
  steps: IStepsMessages;
  navigation: {
    site: ISiteNavigationMessages;
    main: IMainNavigationMessages;
    user: IUserNavigationMessages;
  };
  searchBar: ISiteSearchBarMessages;
  loading: {
    default: string;
    user: ILoadingUserMessages;
  };
  pages: {
    home: IHomeMessages & {
      backgroundImageAlt: string;
    };
    category: ICategoryMessages;
    model: IModelMessages;
    series: ISeriesMessages;
    docs: {
      i18n: I18NMessages;
      userInterfaces: IUserInterfacesMessages;
      testing: ITestingMessages;
      projectSetup: IProjectSetupMessages;
    };
  };
};

export interface Language {
  name: string;
  code: LanguageCode;
}

export interface Country {
  name: string;
  languages: Language[];
  code: string;
}

export interface Region {
  audience: Audience;
  name: string;
  countries: Country[];
}

export type LanguageCode =
  | 'bg'
  | 'nl'
  | 'en'
  | 'et'
  | 'fi'
  | 'fr'
  | 'de'
  | 'el'
  | 'hu'
  | 'it'
  | 'lv'
  | 'lt'
  | 'pl'
  | 'sk'
  | 'sl'
  | 'es'
  | 'tr';
