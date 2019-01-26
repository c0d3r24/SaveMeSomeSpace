import React from 'react';
import { connect } from 'react-redux';
import {View, Image, TouchableHighlight, Dimensions} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import { add_photo } from "../actions/PhotoActions";
import {colors} from "../utils/colors";

const { width, height } = Dimensions.get('window');


class PhotoItem extends React.Component{

    constructor(props){
        super(props);
        this._renderCheck = this._renderCheck.bind(this);
        this._addSelection = this._addSelection.bind(this);
    }
    _renderCheck(flag){
        if(flag) {
            return <Icon name="check-square" size={20} color={colors.inputBorderColor}/>
        }
    }
    _addSelection(image, index){
        let flag = true;
        for(let x = 0; x < this.props.selectedPhotos.length; x++){
            const {uri, filename } = this.props.selectedPhotos[x];
            if(uri===image.uri  &&  filename === image.filename) {
                flag = false;
                break;
            }
        }
    }
    render() {
        let image;
        if(this.props.isSelected){
            image = this.props.photo.item;
        }else{
            image = this.props.photo.item.node.image;
        }
        const index = this.props.photo.index;
        const flag = this.props.photo.item.flag;
        const opacity = flag ? {opacity: .3}: null;
        return (
            <TouchableHighlight
                key={image.uri}
                onPress={() => {
                    if(!this.props.isSelected){
                        this._addSelection(image,index)
                    }
                }}
                underlayColor='transparent'
            >
                <View>
                    <Image
                        key={image.uri}
                        style={[styles.image, opacity]}
                        source={{ uri: image.uri }}
                    />
                    <View style={styles.renderCheckStyle}>
                        {this._renderCheck(flag)}
                    </View>
                </View>
            </TouchableHighlight>

        );
    }
}


const styles = {
    renderCheckStyle: {marginTop: "-20%",height:20,alignItems: "flex-end"},
    scrollContainer: {
        flexDirection: 'row'
    },
    selectedScrollContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    centerLoader: {
        height: height - 100,
        width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: (width - 10) / 4, height: (width - 10) / 4
    },
    title: {
        textAlign: 'center',
        padding: 20
    },
    selectedPhotosContainer:{
        marginBottom: 5,
        padding: 2
    }

};

const mapStateToProps = ({photos})=>{
};
export default  connect(mapStateToProps, {add_photo})(SelectPhotoItem);