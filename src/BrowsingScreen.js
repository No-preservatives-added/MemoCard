import React, { useState } from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Title } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export const BrowsingScreen = () => {
  const navigation = useNavigation();
  const [memos, setMemos] = useState("");

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

      <Ionicons
        style={styles.forth}
        size={40}
        name="md-caret-back"
        onPress={onPressForth}
      />
      <Ionicons
        style={styles.back}
        size={40}
        name="md-caret-forward"
        onPress={onPressBack}
      />
      <Ionicons
        style={styles.edit}
        size={40}
        name="md-pencil"
        onPress={onPressEdit}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  forth: {
    position: "absolute",
    right: 300,
    bottom: 16,
  },
  back: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },
  edit: {
    position: "absolute",
    right: 0,
    bottom: 600,
  },
});
