import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import Dashboard from './src/pages/Dashboard';

const App = createStackNavigator({ 
  
  Login : {screen: Login},
  Signup: {screen: Signup},
  Dashboard: {screen: Dashboard}

});

export default createAppContainer(App) 