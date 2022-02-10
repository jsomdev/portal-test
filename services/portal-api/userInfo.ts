import { BaseResource } from './base/baseResource';
import { UserContactInfoPut } from './base/types';
import { User } from './models/User';

export const updateUserInfo = async (
  userInfo: UserContactInfoPut,
  me: User | undefined
): Promise<User> => {
  const customUserResource: BaseResource<unknown> = new BaseResource('/me');
  const data: User = await customUserResource.fetch<User>(
    '/me/contactInfo',
    {},
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...userInfo })
    }
  );
  return data;
};
