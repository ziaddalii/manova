// project import
import samplePage from './sample-page';

// types
import { NavItemType } from 'types/menu';
import applications from './applications';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [samplePage, applications]
};

export default menuItems;
