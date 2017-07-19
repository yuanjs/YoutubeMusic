import React from 'react'
import { Screen, ListView, Row, Image, Caption, View, Title, Divider, Video } from '@shoutem/ui'


// Styles
import styles from './Styles/SearchListScreenStyle'

export default class VideoDisplayScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Screen>
        <Title styleName="h-center">Video Player</Title>
        <Video
          source={{ uri: 'https://www.youtube.com/watch?v=1tavDv5hXpo' }}
          height={200}
          width={300}
          style={{alignSelf: 'center'}}
        />
      </Screen>
    );
  }
}
