import { openDB } from 'idb';

const DB_NAME = 'resumeDB';
const STORE_NAME = 'resumeStore';

export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    }
  });
};

export const saveData = async (key, value) => {
  const db = await initDB();
  await db.put(STORE_NAME, value, key);
};

export const getData = async key => {
  const db = await initDB();
  return await db.get(STORE_NAME, key);
};

export const deleteData = async key => {
  const db = await initDB();
  await db.delete(STORE_NAME, key);
};
