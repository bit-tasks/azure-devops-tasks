import { execSync } from 'child_process';

const run = async (branchName: string, org: string, scope: string, wsdir: string): Promise<void> => {

  try {
    execSync(`bit lane remove ${org}.${scope}/${branchName} --remote --silent --force`, { cwd: wsdir, shell: '/bin/bash' });
  } catch (error) {
    console.error(`Error while removing bit lane: ${error}. Lane may not exist`);
  }

  execSync('bit status --strict', { cwd: wsdir,  shell: '/bin/bash' });
  execSync(`bit lane create ${branchName}`, { cwd: wsdir,  shell: '/bin/bash' });
  execSync('bit snap -m "CI"', { cwd: wsdir,  shell: '/bin/bash' });
  execSync('bit export', { cwd: wsdir,  shell: '/bin/bash' });
};

export default run;
