import * as React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { donateIntent } from 'react-native-donate-send-message-intent';

export default function App() {
  const [conversationIdentifier, setConversationIdentifier] =
    React.useState<string>('');
  const [speakableGroupName, setSpeakableGroupName] =
    React.useState<string>('');
  const [base64Image, setBase64Image] = React.useState<string>('');

  return (
    <View style={styles.container}>
      <Text>conversationIdentifier</Text>
      <TextInput
        onChange={(e) => setConversationIdentifier(e.nativeEvent.text)}
        value={conversationIdentifier}
        style={{
          width: 100,
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 5,
        }}
      />
      <Text>speakableGroupName</Text>
      <TextInput
        onChange={(e) => setSpeakableGroupName(e.nativeEvent.text)}
        value={speakableGroupName}
        style={{
          width: 100,
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 5,
        }}
      />
      <Text>base64Image</Text>
      <TextInput
        onChange={(e) => setBase64Image(e.nativeEvent.text)}
        value={base64Image}
        style={{
          width: 100,
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 5,
        }}
      />
      <Button
        title="Donate"
        onPress={() => {
          donateIntent(conversationIdentifier, speakableGroupName, base64Image);
          setConversationIdentifier('');
          setSpeakableGroupName('');
          setBase64Image('');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
