type I18NMessages = {
  title: string;
  description: string;
};

/**
 * Tree structure that represents all messages used throughout the application.
 * The messagesIds object can be used to reference their ids used when formatting messages using react-intl.
 */
export type Messages = {
  pages: {
    i18n: I18NMessages;
  };
};
