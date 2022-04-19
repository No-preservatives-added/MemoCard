import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from "react-native";
import { Button, Title, Card, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { loadAll, loadAllrandom } from "./store";

export const BrowsingScreen = () => {
  const navigation = useNavigation();
  const [memos, setMemos] = useState([
    {
      backText: "backText",
      createdAt: 1648475717620,
      frontText: "frontText",
    },
  ]);
  const [page, setPage] = useState(0);
  const [isReverse, setIsReverse] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      const newMemos = await loadAllrandom();
      setMemos(newMemos);
    };
    const unsubscribe = navigation.addListener("focus", initialize);
    return unsubscribe;
  }, [navigation]);

  const getDisplayText = (page, isBack) => {
    //console.log(memos);
    const memo = memos[page];
    const displayText = isBack
      ? isReverse
        ? memo.backText
        : ""
      : memo.frontText;
    return displayText;
  };

  // カードの裏面を表示するプログラム？
  //const onPressReverse = () => setIsReverse(!isReverse);
  const onPressReverse = () => setIsReverse(true);

  const onPressPrev = () => {
    // 前のカードに移動
    if (page - 1 < 0) {
      //console.log("under!");
      Alert.alert("最初のカードです");
    } else {
      setPage(page - 1);
      setIsReverse(false); //裏を表示しない
    }
  };

  const onPressNext = () => {
    // 後のカードに移動
    if (page + 1 >= memos.length) {
      //console.log("over!");
      Alert.alert("最後のカードです");
    } else {
      setPage(page + 1);
      setIsReverse(false); //裏を表示しない
    }
  };

  const onPressEdit = () => {
    //編集処理
    let EditFlag = 1;
    let createdAt = memos[page].createdAt;
    navigation.navigate("Compose", { EditFlag, createdAt });
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
            <Title>{getDisplayText(page, 0)}</Title>
          </Card.Content>
        </Card>
        <Title
          style={{
            marginTop: 32,
          }}
        >
          裏面
        </Title>
        <Card>
          <Card.Content>
            <Title>{getDisplayText(page, 1)}</Title>
          </Card.Content>
        </Card>
      </ScrollView>

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

  prev: {
    position: "absolute",
    left: 16,
    bottom: 16,
  },
  next: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },
  edit: {
    position: "absolute",
    right: 16,
    top: 16,
  },
});
