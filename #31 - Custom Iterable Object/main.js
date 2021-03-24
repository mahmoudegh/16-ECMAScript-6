/*
  Custom Iterable Object
*/

const myObject = {
  name: "Mahmoud",
  age: 35,
  country: "Egypt",
  favSkill: "JavaScript",
  [Symbol.iterator]() {
    let step = 0;
    let properties = Object.keys(this);
    // console.log(properties);
    return {
      next() {
        return {
          value: properties[step],
          done: step++ === properties.length,
        };
      },
    };
  },
};

for (let prop of myObject) {
  console.log(prop);
}

console.log(myObject["favSkill"]);
