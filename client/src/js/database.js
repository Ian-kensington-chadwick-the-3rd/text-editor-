import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: false });
      console.log('jate database created');
    },
  });
// update, get

// create an openDB - database name, version.
// create a transaction - database name, readwrite
// create a store - store name, 
// put the store - content: {id, info}
// await the result
// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {

console.log('update the text')
const jatedb = await openDB('jate', 1);
const tx = jatedb.transaction('jate', 'readwrite');
const store = tx.objectStore('jate')
const request = store.put({id: 1, value: content });
const result = await request;  
console.log('data saved:', result)
};

// TODO: Add logic for a method that gets all the content from the database
// create an openDB - database name, readonly,
// create a transaction - database name, readonly,
// create a store - store name,
// get the store * get one item - store.get(1)
// await the result
// return the result

export const getDb = async () => {
const textdb = await openDB('jate', 1);
const tx = textdb.transaction('jate', 'readonly');
const store = tx.objectStore('jate');
const request = store.get(1);
const result = await request;
if(result){
  console.log('data found:', result.value)
} else {
  console.log('data not found')
}
return result?.value;

};
initdb();
