import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  searchBar: {
    flex: 1,
    height: 20
  },
  row: {
    flex: 1,
    flexDirection: 'row',
<<<<<<< HEAD
    backgroundColor: Colors.fire,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center'
  },
  thumbnailsContent: {
    backgroundColor: Colors.background,
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  imageStyle: {
    width: 120, 
    height: 90,
    borderRadius: 6,
    alignSelf: 'stretch'
  },
  detailContent: {
    flex: 1,
    flexDirection: 'column',
=======
    justifyContent: 'flex-start'
  },
  imageRow: {
    flex: 1,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center',
    height: 80
  },
  textRow: {
    flex: 4,
>>>>>>> origin/master
    backgroundColor: Colors.fire,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center'
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    textAlign: 'center',
    color: Colors.snow,
    fontSize: 8.5
  },
  listContent: {
    marginTop: Metrics.baseMargin
  }
})
