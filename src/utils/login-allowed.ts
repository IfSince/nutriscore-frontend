import { User } from '../features/user/models/user.ts';

export const TECHNICAL_USER_ID = 4

export const loginAllowed = (user: User) => {
    return user.userTypeId !== TECHNICAL_USER_ID // Technical User
}