import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native"
import React from "react"
import Colors from "../../Utils/Colors"

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/logo.png")}
        style={styles.logoImage}
      />
      <Image
        source={require("../../../assets/images/login.jpg")}
        style={styles.bgImage}
      />
      <View style={{ padding: 20 }}>
        <Text style={styles.heading}>
          Seu app para encontrar estações de Carregamento
        </Text>
        <Text style={styles.subHeading}>
          Encontre uma estação de carregamento Ev perto de você, planeje uma
          viagem e muito mais com apenas um clique
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Clicou")}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "outfit",
              fontSize: 17
            }}
          >
            Login com o Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80
  },
  logoImage: {
    width: 200,
    height: 90,
    objectFit: "contain"
  },
  bgImage: {
    width: "105%",
    height: 280,
    marginTop: 20,
    objectFit: "cover",
    borderRadius: 20
  },
  heading: {
    fontSize: 25,
    fontFamily: "outfit-bold",
    textAlign: "center",
    marginTop: 20
  },
  subHeading: {
    fontSize: 17,
    fontFamily: "outfit",
    textAlign: "center",
    marginTop: 15,
    color: Colors.GRAY
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    display: "flex",
    borderRadius: 99,
    marginTop: 70
  }
})
