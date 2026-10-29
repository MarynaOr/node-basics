export const lessTwo = async () => {};

//  //repeat

// import path from 'node:path';
// import fs from 'node:fs/promises';

//   const somePath = path.join(process.cwd(), 'src', 'moduleOne', 'lessTwo.js');
//   const someWord = 'Hello';

//   await fs.writeFile('less2.txt', someWord);
//   const data = await fs.readFile('less2.txt', 'utf-8');

//   console.log(data.toString());

//   const newFile = async () => {
//     try {
//       await fs.rename('less2.txt', 'text.txt');
//     } catch (err) {
//       console.error('error: ', err);
//     }
//   };

//   const deleteFile = async () => {
//     try {
//       await fs.unlink('text.txt');
//     } catch (err) {
//       console.error('error: ', err);
//     }
//   };

//   const list = async () => {
//     const files = await fs.readdir('.');
//     console.log(files);
//   };

//   await list();
//   await newFile();
//   await deleteFile();
