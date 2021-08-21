const timer = (ar) => {
  for(let delay of ar) {
    setTimeout(() => {
      console.log("beep after " + delay * 1000 + " sec");
      process.stdout.write('\x07');
    }, delay * 1000);
  }
}

let args = process.argv.slice(2); // console.log("args: ", args);

timer(args);

// process.stdout.write('\x07');
