import React, { useState } from "react";
import { View, Text, StatusBar, StyleSheet, Switch } from "react-native";

interface DarkMode {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export function Header({darkMode, setDarkMode} : DarkMode) {

  const toggleSwitch = () => setDarkMode(!darkMode);

  return (
    <View style={[styles.header, {backgroundColor: darkMode ? '#3E3E3E' : "#273FAD" }]}>
      <View style={styles.switch}>
        <Switch
          trackColor={{ false: "#767577", true: "#222222" }}
          thumbColor={darkMode ? "#BF4AD4" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={darkMode}
        />
      </View>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: "Poppins-SemiBold" }]}>
        do
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 24,
    color: "#FFF",
    fontFamily: "Poppins-Regular",
  },
  switch: {
    position: "absolute",
    right: 10,
    top: StatusBar.currentHeight,
  },
});
