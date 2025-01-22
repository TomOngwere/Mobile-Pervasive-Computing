// components/MedicalInfoCards.js

import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { LineChart } from "react-native-chart-kit";

const data = [
  {
    id: "1",
    type: "graph",
    title: "Blood Pressure",
    content: [120, 122, 118, 124, 126, 130, 128], // More realistic fluctuations
  },
  {
    id: "2",
    type: "graph",
    title: "Heart Rate",
    content: [72, 75, 78, 70, 73, 76, 79], // Realistic variability
  },
  {
    id: "3",
    type: "graph",
    title: "Cholesterol",
    content: [190, 195, 185, 200, 210, 205, 198], // Non-linear changes
  },
  {
    id: "4",
    type: "graph",
    title: "Blood Sugar",
    content: [110, 105, 120, 115, 130, 125, 118], // Varied levels
  },
  {
    id: "5",
    type: "graph",
    title: "Hemoglobin",
    content: [14.0, 13.8, 14.2, 13.9, 14.1, 13.7, 14.0], // Small fluctuations
  },
  {
    id: "6",
    type: "graph",
    title: "BMI",
    content: [22.0, 22.5, 23.0, 22.8, 23.2, 22.9, 23.1], // Slight variations
  },
  {
    id: "7",
    type: "graph",
    title: "Oxygen Saturation",
    content: [98, 97, 99, 98, 96, 99, 98], // Minor fluctuations
  },
  {
    id: "8",
    type: "graph",
    title: "Temperature",
    content: [98.6, 98.8, 98.7, 98.5, 99.0, 98.9, 98.7], // Small changes
  },
];

const MedicalInfoCards = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        <LineChart
          data={{
            labels: [],
            datasets: [{ data: item.content }],
          }}
          width={170} // from react-native
          height={240}
          yAxisLabel=""
          yAxisSuffix=""
          chartConfig={{
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 1, // Minimalist, 1 decimal place
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: { borderRadius: 16 },
            propsForDots: {
              r: "3",
              strokeWidth: "1",
              stroke: "#ffa726",
            },
            propsForBackgroundLines: {
              strokeDasharray: "", // Solid background lines
              strokeWidth: 0,
              stroke: "#ffffff", // Hide grid lines
            },
            propsForLabels: {
              fontSize: 10, // Hide axis labels
            },
          }}
          bezier // Smooth curve for the line graph
          style={{ marginVertical: 8, borderRadius: 16 }}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
    marginBottom:10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 5, // Reduced padding
    margin: 5,
    width: "45%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default MedicalInfoCards;
