import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import CurrencyListScreen from '../screens/CurrencyListScreen';
import OptionsScreen from '../screens/OptionsScreen';
import ThemesScreen from '../screens/ThemesScreen';

const HomeStack = StackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        header: () => null,
      },
    },
    OptionsScreen: {
      screen: OptionsScreen,
      navigationOptions: {
        headerTitle: 'Options',
      },
    },
    ThemesScreen: {
      screen: ThemesScreen,
      navigationOptions: {
        headerTitle: 'Themes',
      },
    },
  },
  {
    headerMode: 'screen',
  },
);

const CurrencyListStack = StackNavigator({
  CurrencyList: {
    screen: CurrencyListScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
});

export default StackNavigator(
  {
    HomeScreen: {
      screen: HomeStack,
    },
    CurrencyListScreen: {
      screen: CurrencyListStack,
    },
  },
  {
    mode: 'modal',
    cardStyle: {
      paddingTop: StatusBar.currentHeight,
    },
    headerMode: 'none',
  },
);
