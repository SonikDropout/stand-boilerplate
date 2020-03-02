const clone = (obj) => JSON.parse(JSON.stringify(obj));

const mergeRename = (objects, names) => {
  const result = {};
  for (let i = 0; i < objects.length; i++) {
    for (let key in objects[i]) {
      result[key + names[i]] = clone(objects[i][key]);
    }
  }
  return result;
};

const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

const getFileDate = () => {
  const date = new Date();
  return `${date.getDate()}-${date.getMonth() +
    1}-${date.getFullYear()}_${date.getHours()}-${date.getMinutes()}`;
};

const countKeys = (obj) => {
  let n = 0;
  for (let key in obj) n++;
  return n;
};

const = randInt(min, max) => {
  if (isNaN(max)) {
    max = min;
    min = 0;
  }
  return (Math.random() * (max - min) + min) & 1;
}

module.exports = { clone, mergeRename, capitalize, getFileDate, countKeys, randInt };
