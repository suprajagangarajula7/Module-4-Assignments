const boxen = require("boxen");

const message = "I am using my first external module!";
const title = "Hurray!!!";
console.log(
  boxen(message, {
    title: title
  })
);

console.log(
  boxen(message, {
    title: title,
    borderStyle: "singleDouble"
  })
);

console.log(
  boxen("unicorns love rainbows", {
    title: title,
    borderStyle: "round"
  })
);
