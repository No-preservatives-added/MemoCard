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

export const loadOneCard = async (createdAt) => {
  const key = `${createdAt}`;
  const Data = await AsyncStorage.getItem(key); // (3)
  const Memo = JSON.parse(Data);
  return Memo; // (4)
};

export const loadAll = async () => {
  const keys = await AsyncStorage.getAllKeys();
  keys.sort();
  const entryList = await AsyncStorage.multiGet(keys);
  return entryList.map((entry) => JSON.parse(entry[1]));
};

export const loadAllrandom = async () => {
  const keys = await AsyncStorage.getAllKeys();

  const shuffleArray = (array) => {
    const cloneArray = [...array];

    for (let i = cloneArray.length - 1; i >= 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      // 配列の要素の順番を入れ替える
      let tmpStorage = cloneArray[i];
      cloneArray[i] = cloneArray[rand];
      cloneArray[rand] = tmpStorage;
    }

    return cloneArray;
  };

  keys.sort(shuffleArray(keys.createdAt));

  const entryList = await AsyncStorage.multiGet(keys);
  return entryList.map((entry) => JSON.parse(entry[1]));
};
