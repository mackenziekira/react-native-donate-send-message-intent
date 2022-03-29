#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(DonateSendMessageIntent, NSObject)

RCT_EXTERN_METHOD(donateIntent:(NSString *)conversationIdentifier speakableGroupName:(NSString *)speakableGroupName base64Image:(NSString *)base64Image)

@end
