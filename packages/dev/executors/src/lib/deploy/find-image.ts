import { spawn } from 'child_process';

export default async function findImage(registry: string, imageName: string) {
  return await new Promise<string | undefined>((resolve, reject) => {
    const imageIdProcess = spawn(
      'docker',
      ['images', '-q', `${registry}/${imageName}`],
      {
        stdio: 'pipe',
      },
    );

    let imageData: string | undefined = undefined;

    imageIdProcess.stdout.on('data', (data) => {
      imageData = data.toString();
    });

    imageIdProcess.on('close', (code) => {
      if (code === 0) {
        console.info(`Find image success ${imageData || imageName}...`);

        if (imageData) {
          resolve(imageData.trim());
        } else {
          resolve(undefined);
        }
      } else {
        reject(new Error(`Find image failed with code ${code}`));
      }
    });
  });
}
