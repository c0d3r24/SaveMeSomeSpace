import React, { Component } from 'react';
import {  View, FlatList, CameraRoll } from 'react-native';
import { LinearGradient } from 'expo';
import {Brand, Input} from '../common';
import {colors} from '../../util/colors';
import { Actions } from 'react-native-router-flux';
import Icon from "react-native-vector-icons/FontAwesome";
import PhotoItem from './PhotoItem';

class Home extends React.Component{
  state = {
    username: '',
    password: '',
    photos: []
  }
  constructor(props) {
    super(props);
    this._getPhotos = this._getPhotos.bind(this);
    this._renderPhoto = this._renderPhoto.bind(this);
  }

  componentWillMount() {
    this._getPhotos();
  }

  _getPhotos() {
    CameraRoll.getPhotos({
        first: 100,
        assetType: 'Photos'
    }).then(r => {this.setState({photos:[...r.edges]});})
      .catch((err) => {});
  }

  _renderPhoto(photo) {
    return <PhotoItem photo={photo} />
  }
  
 render() {
     return (
     <LinearGradient
          colors={colors.gradientColors}
          style={styles.container}>
           <FlatList contentContainerStyle={styles.scrollContainer}
                          data={this.state.photos}
                          renderItem={this._renderPhoto}
                          numColumns={4}
                          keyExtractor={photo => photo.node.image.uri}
                >
          </FlatList>
      </LinearGradient> 
      );
 }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  buttonStyle : {
    width: "80%",
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.inputBorderColor,
    marginTop: 20,
    fontSize: 18,
    backgroundColor: colors.inputTextColor
},
textStyle: {
    alignSelf: 'center',
    color: '#396358',
    fontSize: 18,
    fontWeight: '600',
}
};
export default Home;
