import React, { useState, useEffect } from "react";
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

const App: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/user/1");
        setPatients([response.data[0]]);
      } catch (error) {
        console.error("There was an error making the GET request!", error);
      }
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        {patients.map((patientData, patientIndex) => (
          <View key={patientIndex} style={styles.profileContainer}>
            <Avatar
              rounded
              size="xlarge"
              source={require('../../assets/images/tom_ongwere.jpg')}
              containerStyle={styles.avatar}
            />
            <Text style={styles.userName}>{patientData.patient.name}</Text>
            <Text style={styles.header}>Health Dashboard</Text>
            <View style={styles.cardContainer}>
              <Card containerStyle={styles.card}>
                <View style={styles.cardHeader}>
                  <Icon name="heart" size={24} color="#517fa4" />
                  <Card.Title style={styles.cardTitle}>Heart Rate</Card.Title>
                </View>
                <Text style={styles.vitalValue}>
                  {patientData.vitalSigns.heartRate} <Text>bpm</Text>
                </Text>
              </Card>

              <Card containerStyle={styles.card}>
                <View style={styles.cardHeader}>
                  <Icon name="heartbeat" size={24} color="#517fa4" />
                  <Card.Title style={styles.cardTitle}>
                    Blood Pressure
                  </Card.Title>
                </View>
                <Text style={styles.vitalValue}>
                  {patientData.vitalSigns.bloodPressure.systolic}/
                  {patientData.vitalSigns.bloodPressure.diastolic} <Text>mmHg</Text>
                </Text>
              </Card>

              <Card containerStyle={styles.card}>
                <View style={styles.cardHeader}>
                  <Icon name="thermometer" size={24} color="#517fa4" />
                  <Card.Title style={styles.cardTitle}>
                    Body Temperature
                  </Card.Title>
                </View>
                <Text style={styles.vitalValue}>
                  {patientData.vitalSigns.temperature} <Text>°F</Text>
                </Text>
              </Card>

              <Card containerStyle={styles.card}>
                <View style={styles.cardHeader}>
                  <Icon name="lungs" size={24} color="#517fa4" />
                  <Card.Title style={styles.cardTitle}>
                    Respiratory Rate
                  </Card.Title>
                </View>
                <Text style={styles.vitalValue}>
                  {patientData.vitalSigns.respiratoryRate} <Text>breaths/min</Text>
                </Text>
              </Card>

              <Card containerStyle={styles.card}>
                <View style={styles.cardHeader}>
                  <Icon name="lungs" size={24} color="#517fa4" />
                  <Card.Title style={styles.cardTitle}>
                    Oxygen Saturation
                  </Card.Title>
                </View>
                <Text style={styles.vitalValue}>
                  {patientData.vitalSigns.oxygenSaturation} <Text>%</Text>
                </Text>
              </Card>
            </View>
          </View>
        ))}
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
    // width: "100%",
    alignSelf:'stretch',
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