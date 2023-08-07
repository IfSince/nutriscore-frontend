import { describe, expect, it, jest } from '@jest/globals';
import { LoginView } from '../../../src/pages/login/login.view';
import { loginApiSlice } from '../../../src/features/login/login-api-slice';
import { User } from '../../../src/features/user/models/user';
import { useAppDispatch } from '../../../src/hooks';
import { render } from '@testing-library/react';

jest.mock('../../../src/features/login/login-api-slice')
jest.mock('react-router-dom')
jest.mock('../../../src/hooks')

describe('LoginView', () => {
    it('routes to home if request is successful', () => {
        const loginFn = () => {}
        const returnVal = { data: { id: 1 } as User, isSuccess: true }

        useAppDispatch.mockReturnValue(() => {})

        // @ts-ignore
        jest.spyOn(loginApiSlice, 'useLoginMutation').mockReturnValue([loginFn, returnVal])

        const result = render(<LoginView/>)

        expect(result.container.innerHTML).toBeFalsy()
    })

    it('renders login form if not successful', () => {
        const loginFn = () => {}
        const returnVal = { data: undefined, isSuccess: false }

        // @ts-ignore
        jest.spyOn(loginApiSlice, 'useLoginMutation').mockReturnValue([loginFn, returnVal])

        const result = render(<LoginView/>)

        expect(result.container.innerHTML).toBeTruthy()
    })
})