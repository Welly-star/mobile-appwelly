import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');

  const handleButtonPress = (value: string) => {
    setInput(input + value);
  };


  const handleCalculate = async () => {
    try {
        const response = await fetch('https://api.mathjs.org/v4/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ expr: input }),
          });
          const result = await response.json();
          setInput(result.result.toString());
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Kalkulator' }} />
      <Text style={styles.display}>{input}</Text>

      <View style={styles.buttonRow}>
        <Button title="1" onPress={() => handleButtonPress('1')} />
        <Button title="2" onPress={() => handleButtonPress('2')} />
        <Button title="3" onPress={() => handleButtonPress('3')} />
        <Button title="+" onPress={() => handleButtonPress('+')} />
      </View>

      <View style={styles.buttonRow}>
        <Button title="4" onPress={() => handleButtonPress('4')} />
        <Button title="5" onPress={() => handleButtonPress('5')} />
        <Button title="6" onPress={() => handleButtonPress('6')} />
        <Button title="-" onPress={() => handleButtonPress('-')} />
      </View>

      <View style={styles.buttonRow}>
        <Button title="7" onPress={() => handleButtonPress('7')} />
        <Button title="8" onPress={() => handleButtonPress('8')} />
        <Button title="9" onPress={() => handleButtonPress('9')} />
        <Button title="*" onPress={() => handleButtonPress('*')} />
      </View>

      <View style={styles.buttonRow}>
        <Button title="0" onPress={() => handleButtonPress('0')} />
        <Button title="C" onPress={handleClear} />
        <Button title="=" onPress={handleCalculate} />
        <Button title="/" onPress={() => handleButtonPress('/')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  display: {
    fontSize: 40,
    marginBottom: 20,
    padding: 10,
    textAlign: 'right',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
    marginBottom: 20,
  },
});

export default Calculator;
