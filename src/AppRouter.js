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
      headerTintColor: colors.white
    }),
  },
  SubjectDetails: {
    screen: SubjectDetailsScreen,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: colors.primary.dark
      },
      headerTintColor: colors.white
    }),
  }
});

export default createAppContainer(AppRouter);
