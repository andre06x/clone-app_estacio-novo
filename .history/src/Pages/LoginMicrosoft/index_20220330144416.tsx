import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Inter_700Bold, Inter_500Medium, Inter_600SemiBold, useFonts } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Ionicons } from '@expo/vector-icons'; 

const LoginMicrosoft = ({ navigation }: { navigation: any }) => {

  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  else return (
    <SafeAreaView style={styles.container}>

      <Image source={require('./microsoft_logo.png')} />
      <Text style={styles.titulo}>Entrar</Text>

      <TextInput style={styles.input} placeholder="Email, telefone ou Skype" />

      <TouchableOpacity>
        <Text style={styles.nao_consegue}>Não consegue acessar sua conta?</Text>
      </TouchableOpacity>

      <View style={styles.container_button}>
        <TouchableOpacity style={styles.botao_avancar}>
          <Text style={styles.text_avancar}>Avançar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.botao_opcoes}>
        <Ionicons name="key-outline" size={24} color="black" />
        <Text>Opções de entrada</Text>
      </TouchableOpacity> 


      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30
  },
  logo: {
    width: 220,
    height: 60,
    marginBottom: 20
  },
  titulo: {
    fontSize: 28,
    fontFamily: "Inter_700Bold",
    marginVertical: 20,
    color: "#1B1B1B"
  },

  input: {
    width: "100%",
    height: 36,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingVertical: 6,
    paddingHorizontal: 2,
    marginBottom: 15,
  },

  nao_consegue: {
    color: "#0067b8"
  },

  container_button: {
    alignItems: "flex-end",
    marginVertical: 50, 
  },

  botao_avancar: {
    width: 108,
    height: 32,
    backgroundColor: "#0067b8",
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center"
  },

  text_avancar: {
    color: "#fff"
  },

  botao_opcoes: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center"
  },

  email: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    color: "#999",

  },
  botao_entrar: {
    marginVertical: 34,
    width: 300,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#24BCCA",
    justifyContent: "center",
    alignItems: "center"
  },
  botao_ajuda: {
    position: "absolute",
    bottom: 30,
    width: 300,
    height: 40,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#24BCCA",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",

  },



});

export { LoginMicrosoft }