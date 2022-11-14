export type StepFields<T> = {
  [Property in keyof T]: {
    readonly name: Property;
    readonly label: string;
    readonly placeholder?: string;
  };
};
