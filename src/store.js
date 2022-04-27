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
    //配列のコピーを作ります。

    for (let i = cloneArray.length - 1; i >= 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      //配列の要素の順番を入れ替える
      let tmpStorage = cloneArray[i];
      //配列の要素うちi番目を持ってきます
      cloneArray[i] = cloneArray[rand];
      //i番目の要素を入れ替える要素に置き換えます
      cloneArray[rand] = tmpStorage;
      //入れ替える要素を初めに持ってきていた要素と置き換えます
    }

    return cloneArray;
    //並び変えた配列で返します。
  };

  const entryList = await AsyncStorage.multiGet(shuffleArray(keys));
  return entryList.map((entry) => JSON.parse(entry[1]));
};
