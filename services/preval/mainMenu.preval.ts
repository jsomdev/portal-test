import preval from 'next-plugin-preval';

import { MenuItem } from '@services/portal-api';
import { fetchMainMenuItems } from '@services/portal-api/menuItems';

async function getMainMenuItems(): Promise<MenuItem[]> {
  const mainMenuItems = await fetchMainMenuItems();

  return mainMenuItems.value;
}

export default preval(getMainMenuItems());
