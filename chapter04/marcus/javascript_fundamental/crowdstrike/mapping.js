const kvArray = [
    ["key1", "value1"],
    ["key2", "value2"],
  ];
  
  // Use the regular Map constructor to transform a 2D key-value Array into a map
  const myMap = new Map(kvArray);
  
  console.log(myMap.get("key1")); // "value1"
  
  // Use Array.from() to transform a map into a 2D key-value Array
  console.log(Array.from(myMap)); // Will show you exactly the same Array as kvArray
  
  // A succinct way to do the same, using the spread syntax
  console.log([...myMap]);
  
  // Or use the keys() or values() iterators, and convert them to an array
  console.log(Array.from(myMap.keys())); // ["key1", "key2"]
  console.log(Array.from(myMap.values()));
  console.log([...myMap.values()]);
  for (let [key, value] of myMap) {
    console.log(key, value)
  }