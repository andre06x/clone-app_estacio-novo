import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Carteirinha = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>

      <View style={{ alignItems: "center" }}>
        <View style={styles.profile_text_image}>
          <Text style={styles.profile_text}>AS</Text>
          {/* <Image style={styles.profile_image} source={require('./teste.jpg')} /> */}

          <View style={styles.profile_container_icon}>
            <FontAwesome5 name="plus" size={10} color="white" />
          </View>
        </View>
      </View>


      <Text style={styles.nome}>Andre Victor da Costa Silva</Text>

      <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 32}}>

        <View>
          <Text style={{fontWeight: "500", marginVertical: 5, fontSize: 12, color: "#B2B2B2"}}>CPF</Text>
          <Text>168.555.807-00</Text>
        </View>

        <View>
          <Text>Nascimento</Text>
          <Text>26/06/2000</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 40,
    backgroundColor: '#F8F8F8',

  },

  profile_text_image: {
    width: 80,
    position: "relative",
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.4,
    borderColor: "#B2B2B2"
  },
  profile_text: {
    fontSize: 30,
    fontWeight: "600",

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

  nome: {
    fontWeight: "600",
    fontSize: 22,
    textAlign: "center",
    marginTop: 30
  }
});

export { Carteirinha }