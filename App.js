import {createStackNavigator} from 'react-navigation';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

const App = createStackNavigator({
    Login: { screen: LoginPage },
    Home: { screen: HomePage }
});

export default App;