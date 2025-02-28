'use client';

import axiosInstance, { endpoints } from '@/utils/axios';

import { setSession } from './utils';
import { JWT_STORAGE_KEY } from './constants';

// ----------------------------------------------------------------------

export type SignInParams = {
  userName: string;
  password: string;
};

export type SignUpParams = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type SignInResponse = {
  accessToken: string;
  _id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  profilePhoto?: string;
};

/** **************************************
 * Sign in
 *************************************** */
export const signInWithPassword = async ({ userName, password }: SignInParams): Promise<void> => {
  console.log('signInWithPassword');
  try {
    const params = { userName, password };

    const res = await axiosInstance.post(endpoints.auth.signIn, params);

    // TODO res.data
    const accessToken  = res.data.data.accessToken;

    if (!accessToken) {
      throw new Error('Access token not found in response');
    }
    const user =  {
      accessToken: accessToken,
      _id: "hardcode id",
      name: "hardcode name",
      email: "hardcode email",
      role: "hardcode role",
      status: "hardcode status",
    };
    setSession(accessToken, user);
  } catch (error) {
    console.error('Error during sign in:', error);
    throw error;
  }
};

/** **************************************
 * Sign up
 *************************************** */
export const signUp = async ({
  email,
  password,
  firstName,
  lastName,
}: SignUpParams): Promise<void> => {
  const params = {
    email,
    password,
    firstName,
    lastName,
  };

  try {
    const res = await axiosInstance.post(endpoints.auth.signUp, params);

    const { accessToken } = res.data;

    if (!accessToken) {
      throw new Error('Access token not found in response');
    }

    sessionStorage.setItem(JWT_STORAGE_KEY, accessToken);
  } catch (error) {
    console.error('Error during sign up:', error);
    throw error;
  }
};

/** **************************************
 * Sign out
 *************************************** */
export const signOut = async (): Promise<void> => {
  try {
    await setSession(null);
  } catch (error) {
    console.error('Error during sign out:', error);
    throw error;
  }
};
