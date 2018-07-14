export const compare = (obj1 = {}, obj2 = {}) => {
  obj1 = JSON.stringify(obj1);
  obj2 = JSON.stringify(obj2);

  return {
    changed: obj1 !== obj2
  }
}

export const deepFind = (obj, path) => {
  if(obj){
    var paths = path.split('.'),
      current = obj,
      i;

    for (i = 0; i < paths.length; ++i) {
      if (current[paths[i]] == undefined) {
        return undefined;
      } else {
        current = current[paths[i]];
      }
    }
    return current;
  }
  return;
}
