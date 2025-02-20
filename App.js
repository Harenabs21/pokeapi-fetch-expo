import React, { useState } from 'react';
import { SafeAreaView, Button, Text, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [taps, setTaps] = useState(0);
  const [text, setText] = useState('')
  return (
    <SafeAreaView>
      <Button
        title="Add one"
        variant="primary"
        onPress={() => setTaps(taps + 1)}
      />
      <Button
        title="Add ten"
        testID="add_ten"
        onPress={() => setTaps(taps + 10)}
      />
      <Text>Number of taps: {taps}</Text>
      <TextInput
        testID="text_input"
        placeholder="Change me!"
        onChangeText={setText}
      />
      <Text>You typed: {text}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});