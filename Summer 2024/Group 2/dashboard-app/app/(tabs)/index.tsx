import React, { useState } from "react";
import axios from "axios";
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Card, Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

interface Vital {
  name: string;
  value: string;
  icon: string;
}
const App: React.FC = () => {
  const [data, setData] = useState("");
  const [temperature,setTemperature] = useState("");
  axios
    .get("http://localhost:3000/user/1")
    .then((response) => {
      // setData(response.data);
      // let temperture = JSON.parse(response.data);
    })
    .catch((error) => {
      console.error("There was an error making the GET request!", error);
    });

  const vitals: Vital[] = [
    { name: "Heart Rate", value: JSON.stringify(data) + " bpm", icon: "heart" },
    { name: "Blood Pressure", value: "120/80 mmHg", icon: "heartbeat" },
    { name: "Body Temperature", value: "98.6 °F", icon: "thermometer" },
    {
      name: "Respiratory Rate",
      value: "16 breaths/min",
      icon: "lungs",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.profileContainer}>
          <Avatar
            rounded
            size="xlarge"
            source={{
              uri: "http://www.mubis.es/media/users/3388/130947/john-wick-se-estrenara-aqui-directamente-en-tv-original.jpg",
            }}
            containerStyle={styles.avatar}
          />
          <Text style={styles.userName}>John Wick</Text>
        </View>
        <Text style={styles.header}>Health Dashboard</Text>
        <View style={styles.cardContainer}>
          {vitals.map((vital, index) => (
            <Card key={index} containerStyle={styles.card}>
              <View style={styles.cardHeader}>
                <Icon name={vital.icon} size={24} color="#517fa4" />
                <Card.Title style={styles.cardTitle}>{vital.name}</Card.Title>
              </View>
              <Text style={styles.vitalValue}>{vital.value}</Text>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  profileContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  avatar: {
    marginBottom: 10,
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
    fontWeight: "bold",
  },
  cardContainer: {
    alignItems: "center",
  },
  card: {
    width: "90%",
    borderRadius: 10,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    marginLeft: 10,
  },
  vitalValue: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
  },
});

AppRegistry.registerComponent("HealthTrackingApp", () => App);

export default App;
