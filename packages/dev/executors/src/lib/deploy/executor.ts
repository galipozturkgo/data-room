import type { ExecutorContext } from '@nx/devkit';

import buildImage from './build-image';
import loginRegistry from './login-registry';
import pushImage from './push-image';
import { DeployExecutorSchema } from './schema';
import tagImage from './tag-image';

export default async function runExecutor(
  {
    username,
    password,
    registry = 'docker.io/library',
    dockerfile,
    name,
    tag = 'latest',
  }: DeployExecutorSchema,
  { projectName }: ExecutorContext,
): Promise<{ success: boolean }> {
  const imageName = `${name || projectName}:${tag}`;

  console.info(`Executing "deploy" ${imageName}...`);

  await buildImage(dockerfile, imageName);

  await tagImage(registry, imageName);

  if (username && password) {
    await loginRegistry(registry, username, password);

    await pushImage(registry, imageName);
  }

  return new Promise((resolve) => {
    resolve({ success: true });
  });
}
