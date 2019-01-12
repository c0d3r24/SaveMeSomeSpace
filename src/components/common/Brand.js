import React from 'react';
import { View, Text } from 'react-native';
import {colors} from './../../util/colors';
import Icon from "react-native-vector-icons/FontAwesome";

const Brand = ({brandStyleSpecific}) =>{
    return (
        <View style={[styles.brandStyle, brandStyleSpecific]}> 
            <Icon name="soundcloud" size={50} color={colors.inputBorderColor} />
            <Text style={styles.brandHeading}>
              SMSS
            </Text>
            <Text style={styles.brandTextStyle}>
              Save Me
            </Text>
            <Text style={styles.brandTextStyle}>
              Some Space
            </Text>
        </View>
    );
};

const styles = {
    brandStyle: { bottom: "8%" },
    brandTextStyle: { fontSize: 11, color: colors.inputBorderColor },
    brandHeading: {fontSize: 24, color: colors.inputBorderColor }
};
export {Brand}