 const removeFromArray = function(array, ...args) {
 	 const newArray = [];
 	 array.forEach((item) => {
 	 	f (!args.includes(item)) {
      newArray.push(item);
    }
  });
 	 return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
