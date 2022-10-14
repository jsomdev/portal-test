import React, { FC, useCallback, useState } from 'react';

import { useQuery } from 'react-query';
import { Url } from 'url';

import { Product } from '@services/portal-api';
import { OdataCollection } from '@services/portal-api/o-data';
import { getDesignsForDetailedCompare } from '@services/portal-api/products';
import { QUERYKEYS } from '@services/react-query/constants';
import pagePaths from '@utilities/pagePaths';

import { ProductCompareContext } from './productCompareContext';

export const ProductCompareProvider: FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productDetailsNumbers, setProductDetailsNumbers] = useState<string[]>(
    []
  );
  const [showIdenticalValues, setShowIdenticalValues] = useState(false);
  const [baseProductNumber, setBaseProductNumber] = useState<
    string | undefined
  >(undefined);
  const [showPrivateValues, setShowPrivateValues] = useState(false);

  const addProduct = (product: Product) => {
    if (!products.find(x => x.number === product.number)) {
      setProducts(products.concat(product));
    }
  };

  const setBaseProduct = (number: string | undefined) => {
    setBaseProductNumber(number);
  };

  const toggleIdenticalValues = () => {
    setShowIdenticalValues(currentValue => !currentValue);
  };
  const togglePrivateValues = () => {
    setShowPrivateValues(currentValue => !currentValue);
  };

  const removeProduct = (product: Product) => {
    setProducts(products.filter(x => x.number !== product.number));
  };

  const clearProducts = () => {
    setProducts([]);
  };

  const loadDetails = useCallback((numbers: string[]) => {
    setProductDetailsNumbers(numbers);
  }, []);

  const {
    status: productsDetailsStatus,
    error: productsDetailsError,
    isFetching: isFetchingDetails
  } = useQuery(
    [QUERYKEYS.compareProducts, productDetailsNumbers],
    () => getDesignsForDetailedCompare(productDetailsNumbers),
    {
      enabled: !!productDetailsNumbers.length,
      onSuccess: (data: OdataCollection<Product>) => {
        setProducts(data.value);
      },
      keepPreviousData: true
    }
  );

  const getUrl = (): Partial<Url> => {
    return {
      pathname: pagePaths.compare,
      query: {
        // TODO use slugs when developing the product compare page
        products: products.map(x => x.number || '')
      }
    };
  };
  return (
    <ProductCompareContext.Provider
      value={{
        products,
        isFetchingDetails,
        loadDetails,
        productsDetailsError: productsDetailsError as Error | undefined,
        productsDetailsStatus,
        addProduct,
        removeProduct,
        clearProducts,
        getUrl,
        baseProductNumber,
        setBaseProduct,
        showIdenticalValues,
        showPrivateValues,
        toggleIdenticalValues,
        togglePrivateValues
      }}
    >
      {children}
    </ProductCompareContext.Provider>
  );
};
