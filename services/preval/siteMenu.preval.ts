import preval from 'next-plugin-preval';

import { MenuItem } from '@services/portal-api';
import { fetchSiteMenuItems } from '@services/portal-api/menuItems';

async function getSiteMenuItems(): Promise<MenuItem[]> {
  const siteMenuItems = await fetchSiteMenuItems();

  return siteMenuItems.value;
}

export default preval(getSiteMenuItems());
