import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../constants/colors";
import { AntDesign } from "@expo/vector-icons";

const ReplyTo = (props) => {
  const { text, user, onCancel } = props;
  const name = `${user.firstName} ${user.lastName}`;

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.name}>
          {name}
        </Text>
        <Text style={{ color: "white" }} numberOfLines={1}>
          {text}
        </Text>
      </View>
      <TouchableOpacity onPress={onCancel}>
        <AntDesign name="closecircle" size={24} color={colors.nearlyWhite} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightDark,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    borderLeftColor: colors.primary,
    borderLeftWidth: 4,
  },
  textContainer: {
    flex: 1,
    marginRight: 5,
  },
  name: {
    color: colors.grey,
    fontFamily: "medium",
    letterSpacing: 0.3,
  },
});

export default ReplyTo;
