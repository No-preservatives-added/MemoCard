import React, { useState } from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Title } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

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

  const onPressEdit = () => {
    navigation.navigate("Compose");
    // 表示されてるカードを抽出してComposeScreenで表示するプログラム
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Title
        style={{
          marginTop: 32,
        }}
      ></Title>
      <Button mode="contained" onPress={onPressReverse}>
        裏面を表示
      </Button>
      <Title
        style={{
          marginTop: 32,
        }}
      >
        表面
      </Title>
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

      <Ionicons
        style={{
          position: "absolute",
          right: 0,
          bottom: 600,
        }}
        size={40}
        name="md-pencil"
        onPress={onPressEdit}
      />

      {/*<Button
        mode="outlined"
        style={{
          position: "absolute",
          right: 0,
          bottom: 600,
        }}
        onPress={onPressEdit}
      >
        編集する
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
