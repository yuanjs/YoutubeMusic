import React from 'react'
import { View, Text, ListView, Alert, Image } from 'react-native'
import { connect } from 'react-redux'
import Reactotron from 'reactotron-react-native'
import API from '../Services/Api'
import SearchBar from '../Components/SearchBar'

// For empty lists
// import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/VideoSearchListViewStyle'

class VideoSearchListView extends React.Component {
  state: {
    dataSource: Object
  }

  constructor(props) {
    super(props)
    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = []

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    this.ds = new ListView.DataSource({ rowHasChanged })

    // Datasource is always in state
    this.state = {
      dataSource: this.ds.cloneWithRows(dataObjects)
    }

    this.getData()
  }

  getData = async () => {
    console.log("Begin to get data")
    const api = API.create()
    const searchResults = await api.getYoutubeSearchResult()
    Reactotron.log(searchResults.data.items)
    if (searchResults.ok) {
      this.setState({
        dataSource: this.ds.cloneWithRows(searchResults.data.items)
      })
    } else {
      Alert.alert(
        'Error',
        'Can not get search result, Maybe network problem'
      )
    }
  }

  /* ***********************************************************
  * STEP 3
  * `renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  renderRow(rowData) {
    return (
      <View style={styles.row}>
        <View style={styles.thumbnailsContent}>
          <Image style={styles.imageStyle} source={{uri: rowData.snippet.thumbnails.default.url}}/>
        </View>
        <View style={styles.detailContent}>
          <Text style={styles.boldLabel}>{rowData.snippet.title}</Text>
          <Text style={styles.label}>{rowData.snippet.description}</Text>
        </View>
      </View>
    )
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState(prevState => ({
          dataSource: prevState.dataSource.cloneWithRows(newProps.someData)
        }))
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData() {
    return this.state.dataSource.getRowCount() === 0
  }

  // Render a footer.
  renderFooter = () => {
    return (
      <Text> - Footer - </Text>
    )
  }

  onSearch = () => {
    console.log("Search")
  }

  onCancel = () => {
    console.log("Cancel")
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderFooter={this.renderFooter}
          enableEmptySections
          pageSize={15}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoSearchListView)
