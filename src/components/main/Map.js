import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Animated,
    Image,
    Dimensions, TextInput, TouchableHighlight
} from "react-native";
import { MapView } from 'expo';

import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux';
import { getStores, saveStoreDetail, createSizeCountAndFinalOrderArray } from './../actions';
import {Button, CardSection, Confirm, FullModal, Input, ModalContainer} from "./common";
import {ActionButton} from "./common2";
import {colors} from "../utils/colors";
import Icon from "react-native-vector-icons/FontAwesome";


const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.3;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


class SelectStoreScreen extends Component {
    
    state = {
        markers: [],
        region: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        },
        selectedIndex: null
    };
    constructor(props){
        super(props);
        this.handleScrollEnd = this.handleScrollEnd.bind(this);
        this.addStore = this.addStore.bind(this);
        this._renderCheck = this._renderCheck.bind(this);
        this._saveFinalOrderList = this._saveFinalOrderList.bind(this);

    }
    _saveFinalOrderList(){
        this.props.createSizeCountAndFinalOrderArray([...this.props.selectedPhotos]);
    }
    addStore(index){
        this.setState({selectedIndex: index});
        this.props.saveStoreDetail(this.props.stores[index])
    }


    handleScrollEnd(event: Object){
        event.persist();
    }

    _renderCheck(index){
        if(this.state.selectedIndex === index) {
            return <Icon name="check-square" size={20} color={colors.textColor}/>
        }
    }

    componentWillMount() {
        this.index = 0;
        this.animation = new Animated.Value(0);
        this.props.getStores();

    }
    componentDidMount() {


        navigator.geolocation.getCurrentPosition((position) =>{
            if(position){
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }
                })
            }

            const mapRef = this.map;/*['mapView'];*/

            mapRef && mapRef.animateToRegion({
                ...position.coords,
                longitudeDelta: LATITUDE_DELTA,
                latitudeDelta: LONGITUDE_DELTA,
            })
        });


        // We should detect when scrolling has stopped then animate
        // We should just debounce the event listener here
        this.animation.addListener(({ value }) => {
            let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
            if (index >= this.state.markers.length) {
                index = this.state.markers.length - 1;
            }
            if (index <= 0) {
                index = 0;
            }

            clearTimeout(this.regionTimeout);
            this.regionTimeout = setTimeout(() => {
                if (this.index !== index) {
                    this.index = index;
                    const { coordinate } = this.state.markers[index];
                    this.map.animateToRegion(
                        {
                            ...coordinate,
                            latitudeDelta: this.state.region.latitudeDelta,
                            longitudeDelta: this.state.region.longitudeDelta,
                        },
                        350
                    );
                }
            }, 10);
        });

    };

    render() {
        const interpolations = ( this.props.stores|| this.props.stores.length ) ? this.props.stores.map((marker, index) => {
            const inputRange = [
                (index - 1) * CARD_WIDTH,
                index * CARD_WIDTH,
                ((index + 1) * CARD_WIDTH),
            ];
            const scale = this.animation.interpolate({
                inputRange,
                outputRange: [1, 2.5, 1],
                extrapolate: "clamp",
            });
            const opacity = this.animation.interpolate({
                inputRange,
                outputRange: [0.70, 1, 0.70],
                extrapolate: "clamp",
            });
            return { scale, opacity };
        }): null;

        if( this.props.stores || this.props.stores.length)   {

        return (

            <View style={styles.container}>

                <MapView
                    ref={map => this.map = map}
                    initialRegion={this.state.region}
                    //style={styles.container}
                    showsUserLocation={true}
                    style={{height: "60%", width: "100%", marginBottom: 5}}
                >
                    {/*<MapView.Marker key={'default'} coordinate={this.state.region} />*/}



                    {this.props.stores.map((marker, index) => {
                        const {coordinate} = marker;
                        coordinate.latitudeDelta = LATITUDE_DELTA;
                        coordinate.longitudeDelta = LONGITUDE_DELTA;
                        console.log(coordinate);
                        console.log(this.state.region);
                        const scaleStyle = {
                            transform: [
                                {
                                    scale: interpolations[index].scale,
                                }
                            ],
                        };
                        const opacityStyle = {
                            opacity: interpolations[index].opacity,
                        };

                        return (
                            <MapView.Marker key={'default'} coordinate={coordinate} />

                        );
                    })}
                </MapView>
                <Animated.ScrollView
                    horizontal
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={CARD_WIDTH}
                    onScroll={
                        Animated.event(
                            [
                                {
                                    nativeEvent: {
                                        contentOffset: {
                                            x: this.animation,
                                        },
                                    },
                                },
                            ],
                            { useNativeDriver: true }
                        )
                    }
                    onScrollEndDrag={this.handleScrollEnd}
                    style={styles.scrollView}
                    contentContainerStyle={styles.endPadding}
                >
                    {this.props.stores.map((marker, index) => {
                        const opacity = (this.state.selectedIndex === index) ? {opacity: .2}: null;
                        return (
                            <TouchableHighlight
                                key={index}
                                underLayColor='transparent'
                                onPress={() => this.addStore(index)}
                            >
                                <View style={styles.card} >

                                    <Image
                                        source={{uri:marker.image_url}}
                                        resizeMode="cover"
                                        style={[styles.cardImage, opacity]}
                                    />
                                    <View style={styles.renderCheckStyle}>
                                        {this._renderCheck(index)}
                                    </View>
                                    <View style={styles.textContent}>
                                        <Text numberOfLines={1} style={styles.cardtitle}>{marker.name}</Text>
                                        <Text numberOfLines={1} style={styles.cardDescription}>
                                            {marker.city}
                                        </Text>
                                    </View>

                                </View>
                            </TouchableHighlight>

                        )
                    })}
                </Animated.ScrollView>
                <ActionButton onPress={this._saveFinalOrderList} value={'Continue'}/>
            </View>
        )}else{
                        return (
                        <View>
                            <Text>Nothing to show</Text>
                            <CardSection style={styles.continueButtonStyle}>
                                <Button onPress={()=> {Actions.orderReview();}}>Continue</Button>
                            </CardSection>
                        </View>)
        };

    }

}
const styles = {
    container: {
        flex: 1,
    },
    scrollView: {
        position: "absolute",
        bottom: 60,
        left: 0,
        right: 0,
        paddingVertical: 10,
        backgroundColor: colors.textColor,
        borderColor: colors.inputBorderColor,
        borderTopWidth: 3,
        borderBottomWidth: 3
    },
    continueButtonStyle:{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
        backgroundColor: "#fff"
    },

    endPadding: {
        paddingRight: width - CARD_WIDTH,
    },
    card: {
        padding: 10,
        elevation: 2,
        backgroundColor: "#FFF",
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
        borderColor: "rgba(0,0,0,.5)",
        borderWidth: 1,
        borderRadius: 5

    },
    cardImage: {
        flex: 3,
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },
    textContent: {
        flex: 1,
    },
    cardtitle: {
        fontSize: 12,
        marginTop: 5,
        fontWeight: "bold",
    },
    cardDescription: {
        fontSize: 12,
        color: "#444",
    },
    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
    },
    marker: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "rgba(57,116,100,0.9)",
    },
    ring: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: "rgba(57,116,100,0.3)",
        position: "absolute",
        borderWidth: 1,
        borderColor:"rgba(57,116,100,0.5)"
    },
    renderCheckStyle: {top: -10,right:-10, height:20,alignItems: "flex-end"},
};

const mapStateToProps = ({auth, photos}) =>{
    return {
        user: auth.user,
        stores : photos.stores,
        selectedPhotos: photos.selectedPhotos
    }
};

export default connect(mapStateToProps, {getStores, saveStoreDetail, createSizeCountAndFinalOrderArray})(SelectStoreScreen);



{/*<MapView.Marker key={index} coordinate={*/}
{/*{*/}
{/*latitude: coordinate.latitude,*/}
{/*longitude: coordinate.longitude,*/}
{/*latitudeDelta: LATITUDE_DELTA,*/}
{/*longitudeDelta: LONGITUDE_DELTA*/}
{/*}*/}
{/*} >*/}
{/*<Animated.View style={[styles.markerWrap, opacityStyle]}>*/}
{/*<Animated.View style={[styles.ring, scaleStyle]} />*/}
{/*<View style={styles.marker} />*/}
{/*</Animated.View>*/}
{/*</MapView.Marker>*/}