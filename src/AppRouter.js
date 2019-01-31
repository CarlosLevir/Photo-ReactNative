import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './containers/HomeScreen';
import SubjectDetailsScreen from './containers/SubjectDetailsScreen';
import { colors } from './utils/Styles';

const AppRouter = createStackNavigator({
  Main: {
    screen: HomeScreen,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: colors.primary.dark
      },
      headerTintColor: '#FFF'
    }),
  },
  SubjectDetails: {
    screen: SubjectDetailsScreen,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: colors.primary.dark
      },
      headerTintColor: '#FFF'
    }),
  }
});

export default createAppContainer(AppRouter);
