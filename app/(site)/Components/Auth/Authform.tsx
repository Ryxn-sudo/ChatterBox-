'use client'

import React, { useState } from 'react'
import { FieldValue, FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import Input from './Input';
import Button from '../Button';
import AuthSocialButton from './AuthSocialButton';
import { BsGithub, BsGoogle } from 'react-icons/bs';
type Varient = 'LOGIN' | 'REGISTER';
const Auth = () => {
    const [varient, setVarient] = useState<Varient>('LOGIN');
    const [Loading, setLoading] = useState(false);
    const toggleVarient = () => {
        if (varient === 'LOGIN') {
            setVarient('REGISTER');
        }
        else {
            setVarient('LOGIN');
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    }
        = useForm<FieldValues>({
            defaultValues: {
                email: '',
                password: '',
            }
        });
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setLoading(true);

        if (varient === 'LOGIN') {
            // Login logic here
        }
        else {
            // Register logic here
        }
    }

    const socialAction = (action: string) => {
        setLoading(true);
        //NextAuth social login logic here
    }
    return (
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-white px-4 py-8 rounded-lg sm:px-10'>

                <form action=""
                    className='space-y-6'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {varient === 'REGISTER' && (
                        <Input
                            id='name'
                            label='Name'
                            register={register}
                            errors={errors}
                        />
                    )}
                    <Input
                        id='email'
                        label='Email'
                        type='email'
                        register={register}
                        errors={errors}
                    />
                    <Input
                        id='password'
                        label='Password'
                        type='password'
                        register={register}
                        errors={errors}
                    />
                    <div>
                        <Button
                            disabled={Loading}
                            type="submit"
                            fullWidth
                        >
                            {varient === 'LOGIN' ? 'Sign in' : 'Register'}
                        </Button>
                    </div>
                </form>

                <div className='mt-6'>
                    <div className='relative'>
                        <div className='absolute items-center inset-0 flex '>
                            <div className='w-full border-t border-gray-300' />
                        </div>
                        <div className='relative flex justify-center text-sm'>
                            <span className='px-2 bg-white text-gray-500'>Or continue with</span>
                        </div>
                    </div>
                    <div className='mt-6 flex gap-2'>
                        <AuthSocialButton
                            icon={BsGithub}
                            onClick={() => socialAction('github')}
                        />
                        <AuthSocialButton
                            icon={BsGoogle}
                            onClick={() => socialAction('google')}
                        />
                    </div>
                </div>

                <div className='flex gap-2 justify-center mt-6 text-gray-500'>
                    {varient === 'LOGIN' ? 'New to us?' : 'Already have an account?'}
                </div>
                
                <div className='mt-2 flex justify-center'>
                    <Button
                        onClick={toggleVarient}
                        fullWidth
                        secondary
                    >
                        {varient === 'LOGIN' ? 'Create an account' : 'Sign in'}
                    </Button>
                    </div>
            </div>
        </div>
    );
}

export default Auth
