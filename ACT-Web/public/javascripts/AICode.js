const { exec } = require('child_process');
const path = require('path');

const STOCK_ANALYSIS_DIR = path.resolve('../../../stock_analysis');
const VENV_ACTIVATE = process.platform === 'win32' 
  ? path.join(STOCK_ANALYSIS_DIR, 'venv', 'Scripts', 'activate')
  : `source ${path.join(STOCK_ANALYSIS_DIR, 'venv', 'bin', 'activate')}`;

const executeCrewCommand = () => {
  const command = `${VENV_ACTIVATE} && crewai run`;

  exec(command, { 
    cwd: STOCK_ANALYSIS_DIR,
    shell: true 
  }, (error, stdout, stderr) => {
    if (error) console.error(`Error: ${error.message}`);
    if (stderr) console.error(`stderr: ${stderr}`);
    if (stdout) console.log(`stdout: ${stdout}`);
  });
};

executeCrewCommand();