const fs = require("fs");

let external_internal = [{
    country: "",
    external: 1,
    internal: 1
}];

// Read users.json file
data1 = fs.readFileSync("data1.json");
data1 = JSON.parse(data1);

data2 = fs.readFileSync("data2.json");
data2 = JSON.parse(data2);

// console.log(Object.keys(data1));

keys1 = Object.keys(data1);
keys2 = Object.keys(data2);


for (i in keys2) {
    if(keys1[i] == keys2[i]) 
        external_internal.push({
            country: keys1[i],
            external: data1[keys1[i]],
            internal: data2[keys2[i]]
        })
    }
console.log(external_internal)

fs.writeFileSync('output.json', JSON.stringify(external_internal));
