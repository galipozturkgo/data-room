import { spawn } from 'child_process';

export default async function buildImage(
  dockerfile: string,
  imageName: string,
) {
  return await new Promise<void>((resolve, reject) => {
    const buildProcess = spawn(
      'docker',
      [
        'build',
        '--rm',
        '--platform',
        'linux/amd64',
        '-f',
        dockerfile,
        '.',
        '-t',
        imageName,
      ],
      {
        stdio: 'inherit',
      },
    );

    buildProcess.on('exit', (code) => {
      if (code === 0) {
        console.info(`Build image success ${imageName}`);
        resolve();
      } else {
        reject(new Error(`Build image failed with code ${code}`));
      }
    });
  });
}
