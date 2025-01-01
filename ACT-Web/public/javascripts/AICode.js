const { exec } = require('child_process');
const path = require('path');

const executeCommand = (commands, directory) => {
  exec(commands, { cwd: directory, shell: 'cmd.exe' }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
};

// Absolute path to stock_analysis directory
const directory = path.resolve(__dirname, '../../../stock_analysis');

// Chain the commands: Activate virtual environment and run crewai
const command = '.venv\\Scripts\\activate.bat && crewai run';
executeCommand(command, directory);

console.log("hello world from bundler")