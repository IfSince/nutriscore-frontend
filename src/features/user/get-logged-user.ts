import { User } from '../../redux/models/user.ts';

export const getLoggedUser = () => JSON.parse(localStorage.getItem('user') ?? '') as User