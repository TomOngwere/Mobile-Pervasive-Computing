// App.js

import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import MedicalInfoCards from "../../components/MedicalInfoCards";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MedicalInfoCards />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;
