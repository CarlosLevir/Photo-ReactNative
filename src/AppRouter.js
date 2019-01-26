import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './containers/HomeScreen';
import colors from './utils/Styles';

const AppRouter = createStackNavigator({
  Main: {
    screen: HomeScreen,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: colors.blue
      },
      headerTintColor: '#FFF'
    }),
  }
});

export default createAppContainer(AppRouter);
