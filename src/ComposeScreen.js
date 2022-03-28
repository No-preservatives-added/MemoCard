import React, { useState } from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { TextInput, Button, FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Title } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { save } from "./store";

export const ComposeScreen = () => {
  const [frontText, setFrontText] = useState("");
  const [backText, setBackText] = useState("");
  const navigation = useNavigation();

  const onPressSave = async () => {
    // 書いた内容をカードに保存するプログラム
    await save(frontText, backText, Date.now());
    //保存時に戻る
    navigation.goBack();
  };

  const onPressBack = () => {
    // ひとつ前に書いた内容をカードに保存するプログラム
  };

  const onPressForth = () => {
    // ひとつ後に書いた内容をカードに保存するプログラム
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Title
        style={{
          marginTop: 64,
        }}
      >
        表面
      </Title>
      <TextInput
        style={{ marginBottom: 16 }}
        mode="outlined"
        placeholder="メモを入力してください"
        multiline
        onChangeText={(frontText) => setFrontText(frontText)}
      />
      <Title>裏面</Title>
      <TextInput
        style={{ marginBottom: 16 }}
        mode="outlined"
        placeholder="メモを入力してください"
        multiline
        onChangeText={(backText) => setBackText(backText)}
      />
      <Button mode="contained" onPress={onPressSave}>
        保存
      </Button>

      <Ionicons
        style={{
          position: "absolute",
          right: 300,
          bottom: 600,
        }}
        size={40}
        name="md-caret-back"
        onPress={onPressForth}
      />
      <Ionicons
        style={{
          position: "absolute",
          right: 16,
          bottom: 600,
        }}
        size={40}
        name="md-caret-forward"
        onPress={onPressBack}
      />

      {/*<Button
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
      </Button>*/}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
