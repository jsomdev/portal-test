import React from 'react';

import { EnvironmentProps } from './environment.types';
import { isValidClientEnvironment } from './environmentHelpers';

/**
 * Component that will validate the current ClientEnvironment with the target ClientEnvironment.
 * If valid, it will render the children, otherwise it will not render anything.
 * This can be used to visualize / hide certain functionality based on the current ClientEnvironment
 * @param target ClientEnvironment when to render children
 * @param strict Whether to validate strictly or not.
 * @param onRender Optional Render override (e.g: To Display another component if not active)
 */
export const Environment: React.FC<EnvironmentProps> = ({
  children,
  target,
  onRender,
  strict
}) => {
  const isActive: boolean = isValidClientEnvironment(target, strict);

  if (onRender !== undefined) {
    return onRender(isActive);
  }
  if (isActive) {
    return <>{children}</>;
  }

  return null;
};
