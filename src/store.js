import AsyncStorage from "@react-native-async-storage/async-storage";

export const save = async (frontText, backText, createdAt) => {
  const key = `${createdAt}`;
  const value = JSON.stringify({
    frontText,
    backText,
    createdAt,
  });
  await AsyncStorage.setItem(key, value);
};

export const remove = async (createdAt) => {
  const key = `${createdAt}`;
  await AsyncStorage.removeItem(key);
};

export const removeAll = async () => {
  const keys = await AsyncStorage.getAllKeys();
  keys.forEach(async (key) => {
    await AsyncStorage.removeItem(key);
  });
};

export const loadAll = async () => {
  const keys = await AsyncStorage.getAllKeys();
  keys.sort();
  const entryList = await AsyncStorage.multiGet(keys);
  return entryList.map((entry) => JSON.parse(entry[1]));
};
