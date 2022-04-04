import React, { useState, useEffect } from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";

import { TextInput, Button, Title, FAB } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import { save, loadOneCard } from "./store";

export const ComposeScreen = () => {
  const [frontText, setFrontText] = useState("");
  const [backText, setBackText] = useState("");
  const [editTime, setEditTime] = useState("");
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(async () => {
    if (route.params.EditFlag === 1) {
      const newMemos = await loadOneCard(route.params.createdAt);
      setFrontText(newMemos.frontText);
      setBackText(newMemos.backText);
      setEditTime(newMemos.createdAt);
    }
  }, [navigation]);

  const onPressSave = async () => {
    // 書いた内容をカードに保存するプログラム
    if (route.params.EditFlag === 1) {
      await save(frontText, backText, editTime);
    } else {
      await save(frontText, backText, Date.now());
    }
    //保存時に戻る
    navigation.goBack();
  };

  const onPressPrev = () => {
    // 前のカードに移動
  };

  const onPressNext = () => {
    // 次のカードに移動
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
        value={frontText}
        onChangeText={(frontText) => setFrontText(frontText)}
      />
      <Title>裏面</Title>
      <TextInput
        style={{ marginBottom: 16 }}
        mode="outlined"
        placeholder="メモを入力してください"
        multiline
        value={backText}
        onChangeText={(backText) => setBackText(backText)}
      />
      <Button mode="contained" onPress={onPressSave}>
        保存
      </Button>

      <Ionicons
        style={styles.prev}
        size={40}
        name="md-caret-back"
        onPress={onPressPrev}
      />
      <Ionicons
        style={styles.next}
        size={40}
        name="md-caret-forward"
        onPress={onPressNext}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  prev: {
    position: "absolute",
    left: 16,
    top: 16,
  },
  next: {
    position: "absolute",
    right: 16,
    top: 16,
  },
});
