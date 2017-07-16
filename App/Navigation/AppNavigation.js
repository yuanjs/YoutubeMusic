import { StackNavigator } from 'react-navigation'
import UiExamplesScreen from '../Containers/UiExamplesScreen'
import VideoSearchListView from '../Containers/VideoSearchListView'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  UiExamplesScreen: { screen: UiExamplesScreen },
  VideoSearchListView: { screen: VideoSearchListView },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'UiExamplesScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
