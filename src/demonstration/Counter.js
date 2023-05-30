import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

const Counter = () => {
  //let count = 0;
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);
  useEffect(() => {
    console.log(count);
    return () => {
      console.log("cleanUp functions");
    };
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`count: ${count}`}</Text>
      <Button
        color="red"
        title="Increase the count"
        onPress={() => setCount(count + 1)}
      />
      <Button
        color="green"
        title="Decrease the count"
        onPress={() => setCount(count - 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    marginTop: 25,
  },
});

export default Counter;
