// MenuScreen.js
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export const MenuScreen = () => {
  const navigation = useNavigation();

  const onPressList = () => {
    // カードを入力した順番に表示するプログラム
  };

  const onPressBrowsing = () => {
    // カードを1枚ずつ表示するプログラム
  };

  const onPressShuffle = () => {
    // カードをランダムに並べ替えて表示するプログラム
  };

  const onPressAdd = () => {
    navigation.navigate("Compose");
  };

  return (
    <View style={styles.container}>
      <Button
        style={styles.list}
        mode="outlined"
        onPress={() => onPressList(item.createdAt)}
      >
        カード一覧
      </Button>

      <Button
        style={styles.browsing}
        mode="outlined"
        onPress={() => onPressBrowsing(item.createdAt)}
      >
        カード閲覧
      </Button>

      <Button
        style={styles.shuffle}
        mode="outlined"
        onPress={() => onPressShuffle(item.createdAt)}
      >
        カードシャッフル
      </Button>

      <FAB
        style={{
          position: "absolute",
          right: 16,
          bottom: 16,
        }}
        icon="plus"
        onPress={onPressAdd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    margin: 72,
    padding: 16,
  },
  browsing: {
    margin: 72,
    padding: 16,
  },
  shuffle: {
    margin: 72,
    padding: 16,
  },
});
