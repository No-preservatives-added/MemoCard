import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import { List, FAB, Button, Switch, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import format from "date-fns/format";
import { remove, loadAll, loadAllrandom, removeAll } from "./store";

//テスト用データ
/*const memos = [
  {
    frontText: "おもてめんです",
    backText: "うらめんです",
    createdAt: 1585574700000,
  },
];*/

export const ListScreen = () => {
  const navigation = useNavigation();
  const [memos, setMemos] = useState([]);
  const [isBack, setIsBack] = useState(false);
  let EditFlag = 0;

  useEffect(() => {
    const initialize = async () => {
      const newMemos = await loadAll();
      //データ破損時全削除用
      //await removeAll();
      setMemos(newMemos);
    };

    const unsubscribe = navigation.addListener("focus", initialize);

    return unsubscribe;
  }, [navigation]);

  //表裏切り替えスイッチ反転
  const onToggleSwitch = () => setIsBack(!isBack);

  //切り替えスイッチの状態によって表示するテキストを変更
  const getDisplayText = (memo) => {
    const displayText = isBack ? memo.backText : memo.frontText;
    return displayText;
  };

  //追加ボタン押したとき
  const onPressAdd = () => {
    const createdAt = Date.now();
    navigation.navigate("Compose", { EditFlag, createdAt });
  };

  //削除ボタン押したとき

  const onPressRemove = async (createdAt) => {
    Alert.alert(
      "本当に削除しますか？",
      "",
      [
        { text: "Yes", onPress: async () => funcA(createdAt) },
        { text: "No", onPress: () => funcB() },
      ],
      { cancelable: false }
    );

    const funcA = async (createdAt) => {
      await remove(createdAt);
      const newMemos = await loadAll();
      setMemos(newMemos);
    };

    const funcB = () => {};
  };

  //編集ボタン押したとき
  const onPressEdit = async (createdAt) => {
    //編集処理
    //const newMemos = await loadAll();
    //setMemos(newMemos);
    EditFlag = 1;
    navigation.navigate("Compose", { EditFlag, createdAt });
  };

  return (
    <View style={styles.container}>
      <Switch value={isBack} onValueChange={onToggleSwitch} />

      <FlatList
        style={styles.list}
        data={memos}
        keyExtractor={(item) => `${item.createdAt}`}
        renderItem={({ item }) => (
          <View>
            <Card style={styles.card}>
              <Card.Content>
                <View style={styles.oneMemo}>
                  <List.Item
                    style={styles.memo}
                    title={getDisplayText(item)}
                    titleNumberOfLines={5}
                    description={`作成日時: ${format(
                      item.createdAt,
                      "yyyy.MM.dd HH:mm"
                    )}`}
                    descriptionStyle={{ textAlign: "right" }}
                  ></List.Item>
                  <View style={styles.buttons}>
                    <Ionicons
                      size={40}
                      name="md-pencil"
                      onPress={() => onPressEdit(item.createdAt)}
                    />
                    <Ionicons
                      size={40}
                      name="ios-trash"
                      onPress={() => onPressRemove(item.createdAt)}
                    />
                  </View>
                </View>
              </Card.Content>
            </Card>
          </View>
        )}
      ></FlatList>

      <FAB style={styles.Add} icon="plus" onPress={() => onPressAdd()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  card: {
    marginBottom: 1,
  },
  oneMemo: {
    flex: 1,
    flexDirection: "row",
  },
  memo: {
    width: "70%",
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
  },
  Add: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },
});
