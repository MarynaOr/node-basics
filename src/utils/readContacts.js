import { PATH_DB } from '../../src/contants/contants.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const readDB = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(readDB);
  } catch (err) {
    console.error('Error:', err);
  }
};
readContacts();
//У файлі src/utils/readContacts.js опишіть утилітну функцію readContacts.
// Вона має зчитувати вміст файлу src/db/db.json та повертати його.
//  Функція повинна коректно обробляти дані та забезпечувати правильне
// зчитування даних з файлу.
