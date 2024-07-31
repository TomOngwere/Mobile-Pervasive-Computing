import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const App = () => {
  const data = [
    "First bullet point",
    "Second bullet point",
    "Third bullet point",
    "Fourth bullet point",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>
          Possible Complications Based on the Patient’s Medical History and
          Current Condition:
        </Text>

        <View style={styles.section}>
          <Text style={styles.subheader}>1. Respiratory Issues:</Text>
          <Text style={styles.bullet}>
            - Recurrence or worsening of pneumonia
          </Text>
          <Text style={styles.bullet}>
            - Pneumonia acquired from the ventilator
          </Text>
          <Text style={styles.bullet}>
            - Acute respiratory distress syndrome (ARDS)
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subheader}>2. Cardiovascular Concerns:</Text>
          <Text style={styles.bullet}>
            - Arrhythmias caused by tachycardia (rapid heart rate)
          </Text>
          <Text style={styles.bullet}>
            - Worsening hypertension (high blood pressure)
          </Text>
          <Text style={styles.bullet}>
            - Cardiac tamponade (fluid around the heart) from pericardial
            friction rub
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subheader}>3. Infections:</Text>
          <Text style={styles.bullet}>
            - Sepsis or septic shock from ongoing infections
          </Text>
          <Text style={styles.bullet}>
            - Urinary tract infections (UTIs) or other secondary infections
          </Text>
          <Text style={styles.bullet}>
            - Endocarditis or other infections of the heart
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subheader}>4. Other Issues:</Text>
          <Text style={styles.bullet}>
            - Dehydration or imbalances in electrolytes due to fever, sweating,
            and not drinking enough fluids
          </Text>
          <Text style={styles.bullet}>
            - Malnutrition or weight loss from chronic illness and a poor
            appetite
          </Text>
          <Text style={styles.bullet}>
            - Depression or anxiety related to chronic illness and treatment
          </Text>
        </View>

        <Text style={styles.note}>
          Note: These complications could be influenced by the patient’s
          existing medical conditions, medications, and lifestyle. It’s crucial
          for healthcare providers to monitor the patient closely and address
          any issues early to prevent further problems.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  section: {
    marginBottom: 15,
  },
  subheader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bullet: {
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 5,
  },
  note: {
    fontSize: 14,
    marginTop: 10,
    color: "#555",
  },
});

export default App;
