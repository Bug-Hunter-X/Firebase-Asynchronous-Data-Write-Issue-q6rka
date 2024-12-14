The solution involves using promises or async/await to correctly handle the asynchronous nature of Firebase's `set()` method.  Here's the corrected code using `.then()`: 

```javascript
firebase.database().ref('/').set({ 
  'key1': 'value1' 
}).then(() => { 
  console.log('Data written successfully!'); 
}).catch((error) => { 
  console.error('Failed to write data:', error); 
});
```
Alternatively, you can use `async/await`:

```javascript
async function writeData() { 
  try { 
    await firebase.database().ref('/').set({ 
      'key1': 'value1' 
    }); 
    console.log('Data written successfully!'); 
  } catch (error) { 
    console.error('Failed to write data:', error); 
  } 
}

writeData();
```