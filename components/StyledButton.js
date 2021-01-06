import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const StyledButton = (props) => {
    const type = props.type;
    const content = props.content;
    const onPress = props.onPress;


    const backgroundColor= type === 'primary' ? 'black' : 'white';
    const textColor = type === 'primary' ? 'white' : 'black';


    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor : backgroundColor}]}
                onPress={() => onPress()}
            >
                <Text style={[styles.Text, {color : textColor}]}>{content} </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        width : "100%",
        padding : 10,
    },
    button : {
        backgroundColor : 'yellow',
        height : 40,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 20,
    },
    Text : {
        fontSize : 12,
        fontWeight : '500',
        textTransform : 'uppercase',
    }
})

export default StyledButton;