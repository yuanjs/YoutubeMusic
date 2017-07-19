import { StackNavigator } from 'react-navigation'
import VideoDisplayScreen from '../Containers/VideoDisplayScreen'
import SearchListScreen from '../Containers/SearchListScreen'
import UiExamplesScreen from '../Containers/UiExamplesScreen'
import VideoSearchListView from '../Containers/VideoSearchListView'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  VideoDisplayScreen: { screen: VideoDisplayScreen },
  SearchListScreen: { screen: SearchListScreen },
  UiExamplesScreen: { screen: UiExamplesScreen },
  VideoSearchListView: { screen: VideoSearchListView },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
<<<<<<< HEAD
  initialRouteName: 'SearchListScreen',
=======
  initialRouteName: 'VideoSearchListView',
>>>>>>> origin/master
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
