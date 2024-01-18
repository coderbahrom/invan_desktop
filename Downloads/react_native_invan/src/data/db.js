import SQLite from 'react-native-sqlite-storage';

const databaseName = 'LoginDatabase.db';
const databaseVersion = '1.0';
const databaseDisplayName = 'Login Database';
const databaseSize = 200000;

const db = SQLite.openDatabase(
  databaseName,
  databaseVersion,
  databaseDisplayName,
  databaseSize,
);

export default db;
