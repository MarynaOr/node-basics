// //**
import path from 'node:path';
import fs from 'node:fs/promises';

export const lessonFirst = async () => {
  const fileFs = async () => {
    const somePath = path.join(process.cwd());

    try {
      const someText = 'Hello!';
      await fs.writeFile('example.txt', someText);
      const data = await fs.readFile('example.txt', 'utf-8');
      // console.log(data.toString());
      console.log('file created: ', data.toString());
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  const newFile = async () => {
    try {
      await fs.rename('example.txt', 'newExample.txt');

      console.log('file changed!');
    } catch (error) {
      console.error('ErRor: ', error);
    }
  };

  const deleteFile = async () => {
    try {
      await fs.unlink('newExample.txt');
      console.log('file deleted!');
    } catch (error) {
      console.error('ERR:', error);
    }
  };

  const listOfFiles = async () => {
    try {
      const files = await fs.readdir('.');
      console.log('list files: ', files);
    } catch (error) {
      console.error('erroR: ', error);
    }
  };

  const runTasks = async () => {
    await fileFs();

    await newFile();
    await deleteFile();
    listOfFiles();
  };

  runTasks();
};

//  */
