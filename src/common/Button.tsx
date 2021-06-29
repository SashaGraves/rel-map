import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

interface ButtonProps {
  onPressHandler: () => void;
  backgroundColor?: string;
  textColor?: string;
  label: string;
}

export const Button = (props: ButtonProps) => {
  const { onPressHandler, backgroundColor, textColor, label } = props;
  
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColor || '#999999'}]} onPress={onPressHandler}>
      <Text style={[styles.buttonText, {color: textColor || '#333333'}]}>{label}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  buttonText: {
  color: '#000000',
  textAlign: 'center',
  fontFamily: 'sans-serif',
  fontWeight: '600',
  fontVariant: ['small-caps'],
  textTransform: 'lowercase',
  fontSize: 16,
},
  button: {
    backgroundColor: '#333333',
    borderRadius: 5,
    padding: 10,
  },
});
