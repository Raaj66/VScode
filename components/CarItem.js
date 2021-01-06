import React from 'react';
import { Text, View,ImageBackground ,StyleSheet,Dimensions} from 'react-native';
import StyledButton from './StyledButton';

const CarItem = (props) => {

  const {name, tagline, image } = props.car;

  return (
    <View style={styles.carContainer}>
        <ImageBackground source={image}
        style={styles.image}
        />
          <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}</Text>
        </View>
          

      <View style={styles.buttonContainer}>
      
      <StyledButton 
          type="primary"
          content={"custom order"} 
          onPress={()=>{
            console.warn("custom order pressed")
          } 
          }
          />
            <StyledButton 
          type="secondary"
          content={"Existing Inventory"} 
          onPress={()=>{
            console.warn("Existing Inventory pressed")
          } 
          }
          />
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
    carContainer : {
        width : '100%',
        height : Dimensions.get('window').height,
      },
      titles: {
        marginTop: '30%',
        width : '100%',
        alignItems : 'center',
      },
      title: {
       fontSize : 40,
       fontWeight : '600',
      },
      subtitle: {
        fontSize : 16,
        color : '#5c5e62',
      },
      image: {
    width : '100%',
    height : '100%',
    resizeMode : 'cover',
    position : 'absolute',
      },
      buttonContainer : {
        position : 'absolute',
        bottom : 50,
        width : '100%',
      }
});

export default CarItem;