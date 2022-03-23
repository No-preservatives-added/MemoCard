import React, { useState } from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Title } from "react-native-paper";

export const BrowsingScreen = () => {
  const [text, setText] = useState("");
  const navigation = useNavigation();

  const onPressReverse = () => {
    // カードの裏面を表示するプログラム？
  };

  const onPressBack = () => {
    // ひとつ前に書いた内容をカードを表示するプログラム
  };

  const onPressForth = () => {
    // ひとつ後に書いた内容をカードを表示するプログラム
  };

  const onPressAdd = () => {
    navigation.navigate("Compose");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Title></Title>
      <Title></Title>
      <Title></Title>
      <Button mode="contained" onPress={onPressReverse}>
        裏面を表示
      </Button>
      <Title>表面</Title>
      <Button
        mode="outlined"
        style={{
          position: "absolute",
          right: 300,
          bottom: 16,
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
          bottom: 16,
        }}
        onPress={onPressBack}
      >
        次→
      </Button>

      <Button
        mode="outlined"
        style={{
          position: "absolute",
          right: 0,
          bottom: 600,
        }}
        onPress={onPressAdd}
      >
        編集する
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
