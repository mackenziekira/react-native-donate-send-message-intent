import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-donate-send-message-intent' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const DonateSendMessageIntent = NativeModules.DonateSendMessageIntent
  ? NativeModules.DonateSendMessageIntent
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function donateIntent(
  conversationIdentifier: string,
  speakableGroupName: string,
  base64Image: string
) {
  return DonateSendMessageIntent.donateIntent(
    conversationIdentifier,
    speakableGroupName,
    base64Image
  );
}
