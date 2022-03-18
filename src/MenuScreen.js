// MenuScreen.js
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

export const MenuScreen = () => {
  const onPressList = () => {};

  const onPressBrowsing = () => {};

  const onPressShuffle = () => {};
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
