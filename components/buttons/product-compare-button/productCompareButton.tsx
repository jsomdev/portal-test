import { FC, useContext, useEffect, useState } from 'react';

import {
  Checkbox,
  DefaultButton,
  IButtonStyles,
  Link,
  Stack,
  useTheme
} from '@fluentui/react';
import { ProductCompareContext } from '@providers/product-compare/productCompareContext';

import {
  ProductCompareButtonProps,
  ProductCompareButtonStyles
} from './productCompareButton.types';

const messages = {
  button: 'Compare'
};
export const ProductCompareButton: FC<ProductCompareButtonProps> = ({
  product,
  displayAsDefaultButton
}) => {
  const { palette } = useTheme();
  const [checked, setChecked] = useState(false);
  const { addProduct, removeProduct, goToProductComparePage, products } =
    useContext(ProductCompareContext);
  const styles: ProductCompareButtonStyles = {
    checkbox: {
      label: {
        alignItems: 'center'
      },
      checkbox: {
        height: 14,
        width: 14
      },
      checkmark: {
        fontSize: 14
      }
    }
  };

  // When mounting the ProductCompareButton we need to check if the
  // button was previously checked. Also we need to keep the checked
  // items in sync when we would remove a product from the compare
  // e.g when we remove a product from the modal
  useEffect(() => {
    const index = products.findIndex(x => x.id === product.id);
    if (index === -1) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }, [product, products]);

  if (displayAsDefaultButton) {
    const defaultButtonStyles: IButtonStyles = {
      iconChecked: {
        color: palette.themePrimary
      },
      rootChecked: {
        background: palette.white
      },
      labelChecked: {
        color: palette.themePrimary
      }
    };
    return (
      <DefaultButton
        styles={defaultButtonStyles}
        checked={checked}
        iconProps={{
          iconName: 'BuildQueueNew'
        }}
        onClick={() => (checked ? removeProduct(product) : addProduct(product))}
        text={messages.button}
      />
    );
  }

  return (
    <Stack horizontal tokens={{ childrenGap: 8 }}>
      <Checkbox
        label={messages.button}
        checked={checked}
        styles={styles.checkbox}
        onChange={(ev, checked) => {
          if (!checked) {
            removeProduct(product);
          } else {
            addProduct(product);
          }
        }}
      />
      {products.length > 1 && checked && (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <Link onClick={() => goToProductComparePage()}>See comparison</Link>
      )}
    </Stack>
  );
};
