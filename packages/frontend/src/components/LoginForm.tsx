'use client';

import { Button } from './Button';

import { Input } from './Input';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { LOGIN } from '@/graphql/mutations';
import {useCallback, useState} from 'react';
import { AUTH_TOKEN } from '@/constants';
import { navigate } from '@/utils/actions';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { GraphQLError } from 'graphql/error';
import { UNEXPECTED_ERROR } from '@/constants/errorMessages';

type LoginFormInputs = {
  email: string;
  password: string;
};
const LoginForm: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>();

  const [loading, setLoading] = useState(false);
  const [userLogin] = useMutation(LOGIN);

  const onSubmit = useCallback(
    async (data: LoginFormInputs) => {
      try {
        setLoading(true);
        const result = await userLogin({ variables: { userInput: data } });
        localStorage.setItem(AUTH_TOKEN, result.data?.login?.token ?? '');
        toast('Login successfully!', { type: 'success' });
        navigate('/dashboard');
      } catch (e: any) {
        toast(e.message ?? UNEXPECTED_ERROR, { type: 'error' });
      } finally {
        setLoading(false);
      }
    },
    [userLogin],
  );

  const renderForm = useCallback(() => {
    if (loading) {
      return (
        <ClipLoader
          color="blue"
          className="self-center"
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      );
    }
    return (
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <div className="px-5 py-7">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                type="email"
                data-testid="email-input"
                label="E-mail"
                {...register('email', { required: true })}
              />
              <Input
                data-testid="password-input"
                label="Password"
                type="password"
                {...register('password', { required: true })}
              />
              <Button type="submit">
                <span className="inline-block mr-2">Login</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            </form>
          </div>
          <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline-block align-text-top"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="inline-block ml-1">Forgot Password</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }, [handleSubmit, onSubmit, register]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      {renderForm()}
    </div>
  );
};

export default LoginForm;
