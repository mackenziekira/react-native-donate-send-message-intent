import * as React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { donateIntent } from 'react-native-donate-send-message-intent';

export default function App() {
  const [conversationIdentifier, setConversationIdentifier] =
    React.useState<string>('');
  const [speakableGroupName, setSpeakableGroupName] =
    React.useState<string>('');
  const [base64Image, setBase64Image] = React.useState<string>('');

  return (
    <View style={styles.container}>
      <TextInput
        onChange={(e) => setConversationIdentifier(e.nativeEvent.text)}
      >
        conversationIdentifier: {conversationIdentifier}
      </TextInput>
      <TextInput onChange={(e) => setSpeakableGroupName(e.nativeEvent.text)}>
        speakableGroupName: {speakableGroupName}
      </TextInput>
      <TextInput onChange={(e) => setBase64Image(e.nativeEvent.text)}>
        base64Image: {base64Image}
      </TextInput>
      <Button
        title="Donate"
        onPress={() => {
          donateIntent(conversationIdentifier, speakableGroupName, base64Image);
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
