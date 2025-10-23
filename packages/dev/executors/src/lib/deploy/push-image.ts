import { spawn } from 'child_process';

export default async function pushImage(registry: string, imageName: string) {
  return new Promise<void>((resolve, reject) => {
    const pushProcess = spawn('docker', ['push', `${registry}/${imageName}`], {
      stdio: 'inherit',
    });

    pushProcess.on('exit', (code) => {
      if (code === 0) {
        console.info(`Push image success ${registry} ${imageName}`);
        resolve();
      } else {
        reject(new Error(`Push image failed with code ${code}`));
      }
    });
  });
}
