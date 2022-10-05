import React from 'react';

import ReactMarkdown from 'react-markdown';

import { Dialog } from '@fluentui/react';
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { defaultLanguage } from '@services/i18n';

import { ProductSpecificationDialogProps } from './productSpecificationDialog.types';

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
      title={getAttributeType(attributeTypeCode)?.name?.[defaultLanguage]}
      {...dialogProps}
    >
      <ReactMarkdown>
        {getAttributeType(attributeTypeCode)?.description?.[defaultLanguage] ||
          ''}
      </ReactMarkdown>
    </Dialog>
  );
};
