function assign(target){
    let targ = Object(target);
    for (let i = 1; i < arguments.length; i++) {
      let nextSource = arguments[i];
      if (nextSource === undefined || nextSource === null) {
        continue;
      }

      let keysArray = Object.keys(Object(nextSource));
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
        let nextKey = keysArray[nextIndex];
        let desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== undefined && desc.enumerable) {
          targ[nextKey] = nextSource[nextKey];
        }
      }
    }
    console.log(targ);
    return targ;

}