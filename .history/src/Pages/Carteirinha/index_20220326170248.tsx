import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Carteirinha = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>

      <View style={styles.profile_text_image}>
        <Text style={styles.profile_text}>AS</Text>
        {/* <Image style={styles.profile_image} source={require('./teste.jpg')} /> */}

        <View style={styles.profile_container_icon}>
          <FontAwesome5 name="plus" size={10} color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F8F8',
    justifyContent: "center"
  },

  profile_text_image: {
    width: 80,
    position: "relative",
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  profile_text: {
    fontSize: 20,
    fontWeight: "700"
  },
  profile_image: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  profile_container_icon: {
    position: "absolute",
    right: 3,
    bottom: -5,
    backgroundColor: "#1FBFC6",
    width: 19,
    height: 19,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center"
  },

});

export { Carteirinha }