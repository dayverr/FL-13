const maxElement = (arr) => Math.max.apply(null, arr);
const copiedArray = (arr) => [...arr];
function addUniqueId (obj){
    let copyObj=Object.assign({}, obj);
    copyObj.id=Symbol();
    return copyObj;
}
function regroupObject(obj) {
    const{name, details:{id, age, univercity}}=obj;
    const newObj={};
    newObj.univercity=univercity;
    newObj.user={};
    newObj.user.age=age;
    newObj.user.name=name;
    newObj.user.id=id;
    return newObj;
}
const findUniqueElements = (arr) => Array.from(new Set(arr));
const hideNumber = (str) => str.slice(-4).padStart(str.length,'*');

function requiredArg() {
    throw new Error('Missing property');
 }
 function add(x = requiredArg(), y = requiredArg()){
    return x + y;
 }
