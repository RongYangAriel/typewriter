const sentence = "hello there from lighthouse labs \n";

var i = 0;
const typewriter = (str) => {
  setTimeout(() => {
  // print the char here
  process.stdout.write(str[i]);
  i++;
  if(i < str.length) typewriter(str)
}, 500)

   // <= 1s delay to make it noticeable. Can dial it down later.
};

typewriter(sentence);

  