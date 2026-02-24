// exec - callback driven function
//util module - by using this we can promisify any nodejs module
import util from 'util';
import child_process from 'child_process';
import fs from 'fs/promises'
import uuid4 from "uuid4"

const execPromisified = util.promisify(child_process.exec);
export const createProjectController = async (req , res) =>{
    const {stdout,stderr}= await execPromisified('ls');
    // console.log('stdout: ',stdout);
    // console.error('stderr: ',stderr)

    // TO-DO
    //Create a unique id and then inside the projects folder create a folder with that id - use UUID for this
    const projectId = uuid4();
    console.log('New project ID is: ', projectId);
    await fs.mkdir(`./projects/${projectId}`);
    // this command is executed from root folder
    // After this call the npm create vite command in the newly created project folder
    // exec fn takes a parameter -cwd - you can set your current working directory with it
    const response = await execPromisified('npm create vite@latest sandbox -- --template react',{
        cwd: `./projects/${projectId}`
        // need to execute the command in the uniqye project id named folder that is being created
    })

    

    return res.json({message: 'Project created', data:projectId})
}
//we want the command to execute in the projects folder in root - with a uniqueID 
//fs module to access file system