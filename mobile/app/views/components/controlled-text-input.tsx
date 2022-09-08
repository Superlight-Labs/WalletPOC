import React from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import { StyleSheet, Text, TextInput } from "react-native";

type Props = {
  control: Control<any>;
  name: string;
  error: FieldError | undefined;
};

const ControlledTextInput = ({ control, name, error }: Props) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput placeholder={name} style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
      />

      {error && <Text>This is required.</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#f7f7f7",
    padding: 12,
    marginTop: 14,
    borderRadius: 10,
    fontSize: 14,
  },
});

export default ControlledTextInput;
