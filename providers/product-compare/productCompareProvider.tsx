import React, { FC, useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router';
import { getDesignsForDetailedCompare } from '../../../services/portal-api/designs';
import { Product } from '../../../services/portal-api/models/Product';
import { QUERYKEYS } from '../../../services/react-query/constants';
import { useNavigate } from '../../../utilities/useNavigate';
import { ProductCompareContext } from './productCompareContext';

export const ProductCompareProvider: FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productDetailsIds, setProductDetailsIds] = useState<string[]>([]);
  const [showIdenticalValues, setShowIdenticalValues] = useState(false);
  const [baseProductId, setBaseProductId] = useState<string | undefined>(
    undefined
  );
  const [showPrivateValues, setShowPrivateValues] = useState(false);
  const { toPath } = useNavigate();
  const history = useHistory();
  const addProduct = (product: Product) => {
    if (!products.find((x) => x.id === product.id)) {
      setProducts(products.concat(product));
    }
  };

  const setBaseProduct = (id: string | undefined) => {
    setBaseProductId(id);
  };

  const toggleIdenticalValues = () => {
    setShowIdenticalValues((currentValue) => !currentValue);
  };
  const togglePrivateValues = () => {
    setShowPrivateValues((currentValue) => !currentValue);
  };

  const removeProduct = (product: Product) => {
    setProducts(products.filter((x) => x.id !== product.id));
  };

  const clearProducts = () => {
    setProducts([]);
  };

  const loadDetails = useCallback((ids: string[]) => {
    setProductDetailsIds(ids);
  }, []);

  const {
    status: productsDetailsStatus,
    error: productsDetailsError,
    isFetching: isFetchingDetails,
  } = useQuery(
    [QUERYKEYS.compareProducts, productDetailsIds],
    () => getDesignsForDetailedCompare(productDetailsIds),
    {
      enabled: !!productDetailsIds.length,
      onSuccess: (data) => {
        setProducts(data.value);
      },
      keepPreviousData: true,
    }
  );

  const goToProductComparePage = () => {
    toPath(
      {
        ...history.location,
        pathname: '/compare',
        search: `products=${products.map((x) => x.id).join(',')}`,
      },
      undefined,
      true
    );
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
        goToProductComparePage,
        baseProductId,
        setBaseProduct,
        showIdenticalValues,
        showPrivateValues,
        toggleIdenticalValues,
        togglePrivateValues,
      }}
    >
      {children}
    </ProductCompareContext.Provider>
  );
};
