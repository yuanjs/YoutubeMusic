import React from 'react'
import { Screen, ListView, Row, Image, Subtitle, Caption, View } from '@shoutem/ui'
import Reactotron from 'reactotron-react-native'
import API from '../Services/Api'

// Styles
import styles from './Styles/SearchListScreenStyle'

export default class SearchListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      dataSource: []
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
        dataSource: searchResults.data.items
      })
    } else {
      Alert.alert(
        'Error',
        'Can not get search result, Maybe network problem'
      )
    }
  }

  renderRow(rowData) {
    return (
      <Row>
        <Image
          styleName="medium rounded-corners"
          source={{ uri: rowData.snippet.thumbnails.default.url }}
        />
        <View styleName="vertical stretch space-between">
          <Subtitle>{rowData.snippet.title}</Subtitle>
          <Caption>{rowData.snippet.description}</Caption>
        </View>
      </Row>
    );
  }

  render() {
    return (
      <Screen>
        <ListView
          data={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </Screen>
    );
  }
}
