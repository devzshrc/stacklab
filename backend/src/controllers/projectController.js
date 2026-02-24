// exec - callback driven function
//util module - by using this we can promisify any nodejs module
import util from 'util';
import child_process from 'child_process';

const execPromisified = util.promisify(child_process.exec);
export const createProjectController = async (req , res) =>{
    const {stdout,stderr}= await execPromisified('ls');
    console.log('stdout: ',stdout);
    console.error('stderr: ',stderr)
    return res.json({message: 'Project created'})
}