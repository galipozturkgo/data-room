export interface DeployExecutorSchema {
  dockerfile: string;
  name: string;
  username: string;
  password: string;
  registry: string;
  tag: string;
}
