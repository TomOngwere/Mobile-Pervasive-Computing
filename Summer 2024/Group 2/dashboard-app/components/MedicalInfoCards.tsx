// components/MedicalInfoCards.js

import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { LineChart } from "react-native-chart-kit";

const data = [
  {
    id: "1",
    type: "graph",
    title: "Blood Pressure",
    content: [120, 125, 130, 135, 140, 145, 150],
  },
  {
    id: "2",
    type: "graph",
    title: "Heart Rate",
    content: [60, 65, 70, 75, 80, 85, 90],
  },
  {
    id: "3",
    type: "graph",
    title: "Cholesterol",
    content: [180, 190, 200, 210, 220, 230, 240],
  },
  {
    id: "4",
    type: "graph",
    title: "Blood Sugar",
    content: [90, 95, 100, 105, 110, 115, 120],
  },
  {
    id: "5",
    type: "graph",
    title: "Hemoglobin",
    content: [13, 13.5, 14, 14.5, 15, 15.5, 16],
  },
  {
    id: "6",
    type: "graph",
    title: "BMI",
    content: [20, 21, 22, 23, 24, 25, 26],
  },
  {
    id: "7",
    type: "graph",
    title: "Oxygen Saturation",
    content: [95, 96, 97, 98, 99, 100, 99],
  },
  {
    id: "8",
    type: "graph",
    title: "Temperature",
    content: [98.6, 98.7, 98.8, 98.9, 99, 99.1, 99.2],
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
          width={160} // from react-native
          height={220}
          yAxisLabel=""
          yAxisSuffix=""
          chartConfig={{
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 0, // Minimalist, no decimal places
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
              fontSize: 0, // Hide axis labels
            },
            fillShadowGradient: "#000", // Line color
            fillShadowGradientOpacity: 1, // Solid line color
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
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
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
