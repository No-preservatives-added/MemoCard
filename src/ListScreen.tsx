import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { List, FAB, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
//import format from "date-fns/format";
import { loadAll } from "./store";

type MemosProps = {
  id: number;
  frontText: string;
  backText: string;
  createdAt: number;
};

export const ListScreen = () => {
  const navigation = useNavigation();
  const [memos, setMemos] = useState<MemosProps[]>([]);

  useEffect(() => {
    const initialize = async () => {
      const newMemos = await loadAll();
      setMemos(newMemos);
    };

    const unsubscribe = navigation.addListener("focus", initialize);

    return unsubscribe;
  }, [navigation]);

  const onPressAdd = () => {
    //navigation.navigate("Compose");
  };

  /*
  const onPressRemove = async (createdAt) => {
    await remove(createdAt);
    const newMemos = await loadAll();
    //setMemos(newMemos);
    const filteredMemos = await filtered();
    setMemos(filteredMemos);
  };
  */

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={memos}
        keyExtractor={(item) => `${item.createdAt}`}
        renderItem={({ item }) => (
          <View>
            <List.Item
              title={item.frontText}
              titleNumberOfLines={5}
              description={item.createdAt}
              descriptionStyle={{ textAlign: "right" }}
            ></List.Item>
            {/*
            <Button
              mode="contained"
              onPress={() => onPressRemove(item.createdAt)}
            >
              削除
            </Button>
            */}
          </View>
        )}
      ></FlatList>
      <FAB
        style={{
          position: "absolute",
          right: 16,
          bottom: 16,
        }}
        icon="plus"
        onPress={() => onPressAdd()}
      />
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
});
