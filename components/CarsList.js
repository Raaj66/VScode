import React from 'react';
import { Text, View, FlatList,StyleSheet,Dimensions} from 'react-native';
import CarItem from './CarItem';
import Cars from './Cars'


const CarsList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList 
            data={Cars}
            renderItem={({item}) => <CarItem car={item} />}
            snapToAlignment={'start'}
            showsVerticalScrollIndicator={false}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        width : "100%",
    }
});

export default CarsList;