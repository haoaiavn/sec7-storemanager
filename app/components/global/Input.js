import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const Input = ({
  style,
  keyboardType,
  secureTextEntry,
  maxLength,
  placeholder,
  getText,
}) => {
  const [text, setText] = useState('');
  const handleInputText = (text) => {
    setText(text);
    getText(text);
  };

  return (
    <View style={[styles.inputView, style]}>
      <TextInput
        style={styles.inputText}
        value={text}
        onChangeText={(text) => handleInputText(text)}
        keyboardType={keyboardType}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor="#003f5c"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    width: '80%',
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    fontSize: 16,
    height: 70,
    color: '#003f5c',
  },
});

export default Input;
