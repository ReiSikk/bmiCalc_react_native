import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';

export default function App() {

const [weight, setWeight] = useState("")
const [height, setHeight] = useState("")
const [BMI, setBMI] = useState(0)

//handle weight input
  const onChangeWeight = (text: string) => {
    setWeight(text)
    console.log("in state",text);
  }
  //handle height input
  const onChangeHeight = (text: string) => {
    //cm into m
    text = (parseFloat(text)/100).toString()
    setHeight(text)
    console.log("in state",text);
  }

  const calculateBMI = () => {
    const weightFloat = parseFloat(weight);
    const heightFloat = parseFloat(height);
    console.log(weightFloat, heightFloat)
    const BMI = weightFloat / (heightFloat*heightFloat)
    setBMI(parseFloat(BMI.toFixed(2)))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Body Mass Index calculator</Text>
      <StatusBar style="auto" />
      <Text>Weight</Text>
      <TextInput
      onChangeText={onChangeWeight}
      placeholder="Enter your weight in kg"
      style={styles.input}
      keyboardType='number-pad'
      ></TextInput>
      <Text>Height</Text>
      <TextInput
      keyboardType='number-pad'
      onChangeText={onChangeHeight}
      placeholder="Enter your height in cm"
      style={styles.input}
      ></TextInput>
           <TouchableOpacity onPress={calculateBMI}>
        <Text  style={styles.button}>Calculate</Text>
      </TouchableOpacity>
      <Text style={styles.result}>Your BMI is: {BMI}</Text>
    </View>
        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  input: {
    borderWidth: 1.33,
    borderRadius: 4,
    borderColor: '#1A1A1A',
    padding: 8,
    margin: 10,
    width: "66%",
  }, 
  button: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: 15,
    borderRadius: 8,
  }, 
  result: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  }
});
