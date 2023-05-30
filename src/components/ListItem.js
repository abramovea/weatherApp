import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import moment from "moment/moment";
import { weatherType } from "../utilities/weatherType";
const ListItem = (props) => {
  const { dt_text, min, max, condition } = props;
  const { item, temp, date, dateTextWrapper } = styles;

  return (
    <View style={item}>
      <Feather name={weatherType[condition]?.icon} size={50} color={"white"} />
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_text).format("dddd")}</Text>
        <Text style={date}>{moment(dt_text).format("h:mm:ss")}</Text>
      </View>

      <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "indianred",
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  dateTextWrapper: {
    flexDirection: "column",
  },
});

export default ListItem;
