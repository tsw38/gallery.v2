export const compare = (obj1 = {}, obj2 = {}) => {
  obj1 = JSON.stringify(obj1);
  obj2 = JSON.stringify(obj2);

  return {
    changed: obj1 !== obj2
  }
}
