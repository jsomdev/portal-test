import { Environment } from '@widgets/environment/environment';
import { ClientEnvironment } from '@widgets/environment/environment.types';
import React from 'react';

import { useStepper } from './stepperContext';

export const StepContent: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  const { currentIndex } = useStepper();

  return (
    <React.Fragment>
      {(children &&
        Array.isArray(children) &&
        (children as JSX.Element[])[currentIndex]) || (
        <Environment target={ClientEnvironment.Develop}>
          <div>Please provide a valid step</div>
        </Environment>
      )}
    </React.Fragment>
  );
};
