import { AsyncStorage } from "react-native";

export const save = async (frontText, backText, createdAt) => {
  const key = `${createdAt}`;
  const value = JSON.stringify({
    frontText,
    backText,
    createdAt,
  });

  await AsyncStorage.setItem(key, value);
};

export const loadAll = async () => {
  const keys = await AsyncStorage.getAllKeys();
  keys.sort();
  const entryList = await AsyncStorage.multiGet(keys);
  return entryList.map((entry) => JSON.parse(entry[1]));
};
