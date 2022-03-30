import React, { useState, useEffect } from "react";
import { StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import { Button, Title, Card, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { loadAll } from "./store";

export const BrowsingScreen = () => {
  const navigation = useNavigation();
  const [memos, setMemos] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const initialize = async () => {
      const newMemos = await loadAll();
      setMemos(newMemos);
    };
    const unsubscribe = navigation.addListener("focus", initialize);
    return unsubscribe;
  }, [navigation]);

  const getDisplayText = (page) => {
    const memo = memos[page];
    const displayText = () => {
      return `${memo.frontText}`;
    };
    //console.log(displayText());
    return displayText();
  };

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
      <ScrollView>
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
        <Card>
          <Card.Content>
            <Title>{getDisplayText(page)}</Title>
          </Card.Content>
        </Card>
      </ScrollView>

      <Ionicons
        style={{
          position: "absolute",
          right: 300,
          bottom: 16,
        }}
        size={40}
        name="md-caret-back"
        onPress={onPressForth}
      />
      <Ionicons
        style={{
          position: "absolute",
          right: 16,
          bottom: 16,
        }}
        size={40}
        name="md-caret-forward"
        onPress={onPressBack}
      />
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
