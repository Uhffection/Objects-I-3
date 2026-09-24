// Write your code below
var newObject = {
    "testKey" : "testPair",
}

function removeValue(obj,key) {
    obj[key] = undefined;
}

removeValue(newObject,"testKey")

console.log(newObject["testKey"])