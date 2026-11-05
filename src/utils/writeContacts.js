import { PATH_DB } from '../../src/contants/contants.js';
import fs from 'node:fs/promises';

export const writeContacts = async updatedContacts => {
  try {
    const dataToWrite = updatedContacts !== undefined ? updatedContacts : [];
    const writeDB = JSON.stringify(dataToWrite, null, 2);
    await fs.writeFile(PATH_DB, writeDB);
  } catch (err) {
    console.error('Error:', err);
  }
};

//У файлі src/utils/writeContacts.js опишіть утилітну функцію writeContacts.
//  Вона має записувати дані у файл src/db/db.json.
// Функція повинна коректно приймати дані як параметр та
// забезпечувати правильний запис даних у файл.
