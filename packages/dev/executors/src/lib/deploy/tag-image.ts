import { spawn } from 'child_process';

export default async function tagImage(registry: string, imageName: string) {
  const tagProcess = spawn(
    'docker',
    ['tag', imageName, `${registry}/${imageName}`],
    { stdio: 'inherit' },
  );

  await new Promise<void>((resolve, reject) => {
    tagProcess.on('exit', (code) => {
      if (code === 0) {
        console.info(`Tag image success ${imageName}`);
        resolve();
      } else {
        reject(new Error(`Tag image failed with code ${code}`));
      }
    });
  });
}
