import { Product } from '@services/portal-api/models/Product';

export type ProductView = Pick<Product, 'id'> & { lastViewedOn: Date };
