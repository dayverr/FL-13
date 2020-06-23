const maxElement = (arr) => Math.max.apply(null, arr);
const copiedArray = (arr) => [...arr];

function addUniqueId (obj){
    let copyObj=Object.assign({}, obj);
    let id = Symbol("id");
    copyObj[id]=1;
    return copyObj;
}
