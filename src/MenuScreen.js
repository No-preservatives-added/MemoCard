// MenuScreen.js
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export const MenuScreen = () => {
  const navigation = useNavigation();

  const onPressList = () => {
    // カードを入力した順番に表示するプログラム
    navigation.navigate("List");
  };

  const onPressBrowsing = () => {
    navigation.navigate("Browsing");
  };

  const onPressShuffle = () => {
    navigation.navigate("Shuffle");
  };

  return (
    <View style={styles.container}>
      <Button style={styles.list} mode="outlined" onPress={onPressList}>
        カード一覧
      </Button>

      <Button style={styles.browsing} mode="outlined" onPress={onPressBrowsing}>
        カード閲覧
      </Button>

      <Button style={styles.shuffle} mode="outlined" onPress={onPressShuffle}>
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
