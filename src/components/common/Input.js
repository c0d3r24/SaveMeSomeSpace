import React from 'react';
import { TextInput } from 'react-native';
import {colors} from './../../util/colors';

const Input = ({value, onChangeText,placeholder, secureTextEntry,placeholderTextColor}) => {
    return (
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          style={styles.input}
          secureTextEntry={secureTextEntry}
        />
    )
};

const styles = {
    input: {
        width: "80%",
        height: 44,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: colors.inputBorderColor,
        marginBottom: 10,
        color: colors.inputTextColor,
        fontSize: 18,
    }
}
export { Input };