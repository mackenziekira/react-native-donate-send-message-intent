
import Foundation
import Intents

@objc(DonateSendMessageIntent)
class DonateSendMessageIntent: NSObject {
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }

  @objc(donateIntent:speakableGroupName:base64Image:)
  func donateIntent(_ conversationIdentifier: String, speakableGroupName: String, base64Image: String) -> Void {
   let groupName = INSpeakableString(spokenPhrase: speakableGroupName)
   let sendMessageIntent = INSendMessageIntent(recipients: nil,
                                               content: nil,
                                               speakableGroupName: groupName,
                                               conversationIdentifier: conversationIdentifier,
                                               serviceName: nil,
                                               sender: nil)

   // Add the user's avatar to the intent.
    let imageData = Data(base64Encoded: base64Image, options: .ignoreUnknownCharacters)!
    let image = INImage(imageData: imageData)
   sendMessageIntent.setImage(image, forParameterNamed: \.speakableGroupName)

   // Donate the intent.
   let interaction = INInteraction(intent: sendMessageIntent, response: nil)
   interaction.donate(completion: { error in
       if error != nil {
           // Add error handling here.
       } else {
           // Do something, e.g. send the content to a contact.
       }
   })
 }
}
