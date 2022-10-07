let map = new Map();

map.set("John", "Java");
map.set("Peter", "Android");
map.set("Tony", "Machine Learning");
map.set("Joy", "Website Dev");
map.set("John", "Cyber Security");


console.log(map.get("Tony"));
console.log(
    map);

for (let [k, v] of map) {
    console.log(k, " : ", v);
}
console.log();

// OR using forEach
map.forEach((v, k) => {
    console.log(k, " : ", v);
    
});
