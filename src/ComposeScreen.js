import React, { useState } from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { TextInput, Button, FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Title } from "react-native-paper";

export const ComposeScreen = () => {
  const [text, setText] = useState("");
  const navigation = useNavigation();

  const onPressSave = () => {
    // 書いた内容をカードに保存するプログラム
  };

  const onPressBack = () => {
    // ひとつ前に書いた内容をカードに保存するプログラム
  };

  const onPressForth = () => {
    // ひとつ後に書いた内容をカードに保存するプログラム
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Title></Title>
      <Title></Title>
      <Title>表面</Title>
      <TextInput
        style={{ marginBottom: 16 }}
        mode="outlined"
        placeholder="メモを入力してください"
        multiline
        onChangeText={(text) => setText(text)}
      />
      <Title>裏面</Title>
      <TextInput
        style={{ marginBottom: 16 }}
        mode="outlined"
        placeholder="メモを入力してください"
        multiline
        onChangeText={(text) => setText(text)}
      />
      <Button mode="contained" onPress={onPressSave}>
        保存
      </Button>
      <Button
        mode="outlined"
        style={{
          position: "absolute",
          right: 300,
          bottom: 600,
        }}
        onPress={onPressForth}
      >
        ←前
      </Button>
      <Button
        mode="outlined"
        style={{
          position: "absolute",
          right: 0,
          bottom: 600,
        }}
        onPress={onPressBack}
      >
        次→
      </Button>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
