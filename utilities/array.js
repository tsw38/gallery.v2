export const spreadToObject = (arr) => arr.reduce((obj, str) => {
    obj[str] = str;
    return obj;
}, {});