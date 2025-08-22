const { fs } = require("fs");
const path = require("path");

async function initRepo(){
    const repoPath = path.resolve(process.cwd(), ".myGit");
    const commitPath = path.join(repoPath, "commits");

    try {
        await fs.mkdir(repoPath, {recursive: true});
        await fs.mkdir(commitsPath, {recursive: true});
        await fs.writeFile(
            path.join(repoPath, "config.json"),
            JSON.stringify({bucket: process.env.s3_Bucket})
        );
        console.log("Repository initialised successfully.");

    } catch (error) {
        console.error("Error initialising repository:", error);
    }
}

module.exports = {
    initRepo
}