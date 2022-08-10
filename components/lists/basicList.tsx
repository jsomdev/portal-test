/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface BasicListProps {
  items: any[];
  onRenderItem: (item: any, index?: number) => JSX.Element;
}

export const BasicList: React.FC<BasicListProps> = ({
  items,
  onRenderItem
}) => {
  return (
    <ul>
      {items.map((item, index) => {
        return onRenderItem(item, index);
      })}
    </ul>
  );
};
