import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Carteirinha = ({ navigation }: { navigation: any }) => {
  return (
    <>
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

        <View style={styles.view_profile}>

          <Text style={styles.nome}>Andre Victor da Costa Silva</Text>

          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 32, marginBottom: 20 }}>
            <View>
              <Text
                style={styles.label_info_text}
              >
                CPF
              </Text>
              <Text
                style={styles.value_info_text}
              >
                168.555.807-00
              </Text>
            </View>

            <View>
              <Text
                style={styles.label_info_text}
              >
                Nascimento
              </Text>
              <Text
                style={styles.value_info_text}
              >
                26/06/2000
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
            <View>
              <Text
                style={styles.label_info_text}
              >
                Matrícula
              </Text>
              <Text
                style={styles.value_info_text}
              >
                2019 0827 4417
              </Text>
            </View>

            <View>
              <Text
                style={styles.label_info_text}
              >
                Validade
              </Text>
              <Text
                style={styles.value_info_text}
              >
                7 Jul 2022
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, marginBottom: 10 }}>
            <View>
              <Text
                style={styles.label_info_text}
              >
                Graduação (Ativo)
              </Text>
              <Text
                style={styles.value_info_text}
              >
                Sistemas de informação
              </Text>
            </View>

          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, marginBottom: 10 }}>
            <View>
              <Text
                style={styles.label_info_text}
              >
                Campus
              </Text>
              <Text
                style={styles.value_info_text}
              >
                NITERÓI
              </Text>
            </View>

          </View>

          <View style={{ alignItems: "center", marginTop: 33 }}>
            <Image
              style={{ width: 125, height: 34 }}
              source={require('../Login/logo.png')}
            />
          </View>
        </View>


        <Text style={styles.label_valido}>
          Válida mediante apresentação de documento com foto.
        </Text>
      </View>

    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 0,
    backgroundColor: '#F8F8F8',

  },

  view_profile: {
    paddingHorizontal: 40,
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
    fontWeight: "700",
    fontSize: 22,
    textAlign: "center",
    marginTop: 30,
    color: "#1E1E1E"
  },

  label_info_text: {
    fontWeight: "500",
    marginVertical: 5,
    fontSize: 12,
    color: "#B2B2B2"
  },

  value_info_text: {
    fontWeight: "700",
    color: "#1E1E1E"
  },

  label_valido: {
    fontWeight: "600",
    marginVertical: 5,
    fontSize: 12.8,
    marginTop: 20,
    color: "#B2B2B2",
    textAlign: "center"
    // paddingHorizontal: 20
  }
});

export { Carteirinha }