import * as yup from 'yup';

import { messageIds } from '@services/i18n';

const setYupLocalisation = () => {
  yup.setLocale({
    mixed: {
      required: ({ label }) => ({
        messageId: messageIds.validation.mixed.required,
        values: { label }
      })
    },
    string: {
      email: ({ label }) => ({
        messageId: messageIds.validation.string.email,
        values: { label }
      }),
      matches: ({ label }) => ({
        messageId: messageIds.validation.string.matches,
        values: { label }
      }),
      min: ({ label, min }) => ({
        messageId: messageIds.validation.string.min,
        values: { label, min }
      }),
      max: ({ label, max }) => ({
        messageId: messageIds.validation.string.max,
        values: { label, max }
      })
    }
  });
};

export default setYupLocalisation;
