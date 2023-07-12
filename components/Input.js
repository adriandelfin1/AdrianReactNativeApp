import { StyleSheet, Text, View, TextInput } from "react-native";
import colors from "../constants/colors";
import { useState } from "react";

const Input = (props) => {
  const [value, setValue] = useState(props.initialValue);

  const onChangedText = (text) => {
    setValue(text);
    props.onInputChanged(props.id, text);
  };

  const labelColor = props.labelColor || colors.nearlyWhite;
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.label, color: labelColor }}>{props.label}</Text>
      <View style={styles.inputContainer}>
        {props.icon && (
          <props.iconPack
            name={props.icon}
            size={props.iconSize || 15}
            style={styles.icon}
          />
        )}
        <TextInput
          {...props}
          onChangeText={onChangedText}
          style={styles.input}
          value={value}
        />
      </View>
      {props.errorText && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{props.errorText[0]}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    marginVertical: 8,
    fontFamily: "bold",
    letterSpacing: 0.3,
    color: colors.nearlyWhite,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: colors.grey,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
    color: "white",
  },
  input: {
    color: colors.nearlyWhite,
    flex: 1,
    fontFamily: "regular",
    letterSpacing: 0.3,
    paddingTop: 0,
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: "red",
    fontSize: 13,
    fontFamily: "regular",
    letterSpacing: 0.3,
  },
});

export default Input;
