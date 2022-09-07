package com.reactnativedonatesendmessageintent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = DonateSendMessageIntentModule.NAME)
public class DonateSendMessageIntentModule extends ReactContextBaseJavaModule {
    public static final String NAME = "DonateSendMessageIntent";

    public DonateSendMessageIntentModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }


    // Example method
    // See https://reactnative.dev/docs/native-modules-android
    @ReactMethod
    public void donateIntent(String conversationIdentifier, String speakableGroupName, String base64image, Promise promise) {
        promise.resolve(null);
    }
}
