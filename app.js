const fs = require("fs");
const data = require("./data");
const validator = require("validator");
const yargs = require("yargs");
const notes = require("./notes");

// fs.writeFileSync("notes.txt", "hello ayaaaa");

// const data = fs.readFileSync("notes.txt").toString();

// console.log(data);

// fs.appendFileSync('notes.txt',' and omar');

// console.log(data.sum(1,2));

// console.log(validator.isEmail('aya@gmail.com'));

// console.log(process.argv)

// if(process.argv[2]==='add'){
//     console.log('add item')
// }
// else if(process.argv[2]==='remove'){
//     console.log('remove item')
// }
// else{
//     console.log('error')
// }

// const person = {
//   name: "aya",
//   age: 28,
// };
// const personJson = JSON.stringify(person);

// fs.writeFileSync("person.json", personJson);

// const returnedPerson = fs.readFileSync("person.json").toString();
// const personObj = JSON.parse(returnedPerson);

// personObj.name = "omar";
// personObj.age = 3;

// const updatedPersonJson=JSON.stringify(personObj);

// fs.writeFileSync('person.json',updatedPersonJson)

yargs.command({
  command: "add",
  describe: "add note",
  builder: {
    title: {
      describe: "this is title description in add command",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "this is body description in add comannd",
      demandOption: true,
      type: "string",
    },
  },
  handler: () => {
    notes.addNotes(yargs.argv.title, yargs.argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "remove note",
  builder: {
    title: {
      describe: "this is title dscription in remove note",
      demandOption: true,
      type: "string",
    },
  },
  handler: () => notes.deleteNotes(yargs.argv.title),
});
yargs.command({
  command: "read",
  describe: "read note",
  builder: {
    title: {
      describe: "this is title description in read command",
      demandOption: true,
      type: "string",
    },
  },
  handler: () => notes.readNotes(yargs.argv.title),
});
yargs.command({
  command: "list",
  describe: "return notes",
  handler: () => notes.getNotesTitle(),
});
yargs.parse();
// console.log(yargs.argv)
console.log('ayaaaaaaaaaaaaaa')
