import { LinkedEntity } from './LinkedEntity';

export type Note = LinkedEntity & {
  children?: Note[];
  parent?: Note | null;
  parentId?: string | null;
  subject?: string;
  text?: string;
};
