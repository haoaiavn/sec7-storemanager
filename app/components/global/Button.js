import { Pressable, StyleSheet, Text } from 'react-native';

import React from 'react';

const Button = ({
  style,
  styleTitle = { color: 'white' },
  title,
  onPress,
  disabled = false,
}) => {
  return (
    <Pressable
      style={[styles.button, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={(styles.title, styleTitle)}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    marginVertical: 12,
    marginHorizontal: 24,
    borderRadius: 20,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 12,
  },
});

export default Button;
