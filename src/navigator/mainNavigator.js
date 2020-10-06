import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps129492Navigator from '../features/Maps129492/navigator';
import Add-Item129491Navigator from '../features/Add-Item129491/navigator';
import Maps129487Navigator from '../features/Maps129487/navigator';
import UserProfile129483Navigator from '../features/UserProfile129483/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps129492: { screen: Maps129492Navigator },
Add-Item129491: { screen: Add-Item129491Navigator },
Maps129487: { screen: Maps129487Navigator },
UserProfile129483: { screen: UserProfile129483Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
