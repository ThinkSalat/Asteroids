function sum1() {
  let arr = Array.from(arguments);
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + Number(arr[i]);
  }
  return sum;
}

const sumRest = (...arguments) => {
  let arr = Array.from(arguments);
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

// Function.prototype.myBind = function (context,...bindingArgs) { 
//   return (...extraArgs) => {
//     this.apply(context,bindingArgs.concat(extraArgs));
//   };
// };

Function.prototype.myBind = function (ctx) {
  const fn = this;
  const bindArgs = Array.from(arguments).slice(1);
  return function _boundFn() {
    const callArgs = Array.from(arguments);
    return fn.apply(ctx, bindArgs.concat(callArgs));
  };
};


class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "me"
markov.says.myBind(breakfast)("meow", "a tree");
// Breakfast says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(breakfast, "meow")("Markov");
// Breakfast says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow", "me");
// Breakfast says meow to me!
// true

const curriedSum = (numArgs) => {
  let numbers= [];
    return function _curriedSum(num) {
      numbers.push(num);
      if (numbers.length < numArgs) {
        return _curriedSum;
      } else {
        return numbers.reduce((x,y) => x+y);
      }
    };
};

Function.prototype.curry = function(numArgs){
  let fn = this;
  let args = [];
  return function _curriedFunc(arg){
    args.push(arg);
    if(args.length < numArgs){
      return _curriedFunc;
    }else{
      return fn(...args);
    }
  }; 
};





