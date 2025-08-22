const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");
const {initRepo} = require("./controllers/init");
const {addRepo} = require("./controllers/add");
const {commitRepo} = require("./controllers/commit");
const {pushRepo} = require("./controllers/push");
const {pullRepo} = require("./controllers/pull");
const {revoteRepo} = require("./controllers/revote");

yargs(hideBin(process.argv))
    .command("init", "Initialise a new repository", {}, initRepo)
    .command("add <file>", "Add file to new repository", (yargs) => {
        yargs.positional("file", {
            describe: "The file to add",
            type: "string"
        })
    }, addRepo)
    .command("commit <message>", "Commit changes to the repository", (yargs) => {
        yargs.positional("message", {
            describe: "Commit message",
            type: "string"
        })
    }, commitRepo)
    .command("push", "Push changes to the remote repository", {}, pushRepo)
    .command("pull", "Fetch changes from the remote repository", {}, pullRepo)
    .command("revert <commitID>", "Revert changes in the repository", (yargs) => {
        yargs.positional("commitID", {
            describe: "The ID of the commit to revert",
            type: "string"
        })
    }, revertRepo)
    .demandCommand(1, "You need at least one command before moving on")
    .help().argv;
