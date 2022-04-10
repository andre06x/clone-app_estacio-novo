import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#0F3469" />
      <ScrollView>

        <View style={styles.profile}>
          <View style={styles.profile_image}>
            <Text>AS</Text>
          </View>

          <View>

          </View>


        </View>

        <Text>AI</Text>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profile: {
    backgroundColor: "#0F3469",
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 5
  },
  profile_image:{
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: #fff
  }
});

export { Home }