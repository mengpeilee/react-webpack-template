const isEmptyObject = obj => obj === undefined || Object.keys(obj).length === 0;

const isEqualObject = (obj1, obj2) =>
  JSON.stringify(obj1) === JSON.stringify(obj2);

const debounce = (func, delay) => {
  var timerId;
  return function() {
    var thisArg = this,
      args = arguments;
    clearTimeout(timerId);
    timerId = setTimeout(function() {
      func.apply(thisArg, args);
    }, delay);
  };
};

export {isEmptyObject, isEqualObject, debounce};
