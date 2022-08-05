// Environmant of the Client (must be in ascending order)
export enum ClientEnvironment {
  Local = 0,
  Develop = 1,
  Test = 2,
  Stage = 3,
  Production = 4
}

export interface EnvironmentProps {
  target: ClientEnvironment;
  strict?: boolean;
  onRender?: (isActive: boolean) => JSX.Element;
}
