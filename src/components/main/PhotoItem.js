import React from 'react';
import { View , Image, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

class PhotoItem extends React.Component {
   constructor(props){
       super(props);
   }
    render(){
        const image = this.props.photo.item.node.image;
        console.log(image);
        return(
            <View>
                <Image
                    key={image.uri}
                    style={[styles.image]}
                    source={{ uri: image.uri }}
                />
            </View>
        )
   } 
}

export default PhotoItem;



const styles = {
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