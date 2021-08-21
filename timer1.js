const timer = (ar) => {
  if (ar.length === 0) {
    return "no timer was set";
  }
  for (const elem of ar) {
    if (elem < 0) {
      return "can't schedule alarm in the past";
    }
    if (typeof elem !== 'number' || elem === " ") {
      return "invalid time entry";
    }

  }

  for(let delay of ar) {
    setTimeout(() => {
      process.stdout.write('\x07');
      return ("beep after " + delay * 1000 + " sec");
    }, delay * 1000);
  }
}

let args = process.argv.slice(2); // console.log("args: ", args);

console.log(timer(args));
// console.log(typeof -1);

// process.stdout.write('\x07');
