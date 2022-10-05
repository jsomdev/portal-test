import React from 'react';

import ReactMarkdown from 'react-markdown';

import { Dialog } from '@fluentui/react';
import { useGlobalData } from '@providers/global-data/globalDataContext';

import { ProductSpecificationDialogProps } from './productSpecificationDialog.types';

//TODO ward default language from env?
const appDefaultLanguage = 'en';

// eslint-disable-next-line max-len
export const ProductSpecificationDialog: React.FC<
  ProductSpecificationDialogProps
> = ({ attributeTypeCode, dialogProps }) => {
  const { getAttributeType } = useGlobalData();

  if (!attributeTypeCode) {
    return null;
  }
  return (
    <Dialog
      dialogContentProps={{
        showCloseButton: true
      }}
      title={getAttributeType(attributeTypeCode)?.name?.[appDefaultLanguage]}
      {...dialogProps}
    >
      <ReactMarkdown>
        {getAttributeType(attributeTypeCode)?.description?.[
          appDefaultLanguage
        ] || ''}
      </ReactMarkdown>
    </Dialog>
  );
};
