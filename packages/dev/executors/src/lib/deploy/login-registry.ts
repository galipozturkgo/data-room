import { spawn } from 'child_process';

export default async function loginRegistry(
  registry: string,
  username: string,
  password: string,
) {
  return await new Promise<void>((resolve, reject) => {
    const loginProcess = spawn(
      'docker',
      ['login', '-u', username, '-p', password, registry],
      { stdio: 'inherit' },
    );

    loginProcess.on('exit', (code) => {
      if (code === 0) {
        console.info(`Login docker success ${registry} ${username}`);
        resolve();
      } else {
        reject(new Error(`Login docker failed with code ${code}`));
      }
    });
  });
}
