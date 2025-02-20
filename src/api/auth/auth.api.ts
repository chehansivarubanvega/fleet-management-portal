import type { IResponse } from '@/utils/axios.types';

import axiosInstance, { endpoints } from '@/utils/axios';

import type { SignInResponseDto, SellerSignUpResponseDto } from './auth.type';

export class AuthApiService {
  public static async signIn(params: {
    email: string;
    password: string;
  }): Promise<IResponse<SignInResponseDto>> {
    try {
      const { data } = await axiosInstance.post<IResponse<SignInResponseDto>>(
        endpoints.auth.signIn,
        params
      );
      return data;
    } catch (error) {
      console.error('[AuthAPI - signIn]: ', error);
      throw error;
    }
  }

  public static async signUp(params: {
    name: string;
    email: string;
    password: string;
    businessName: string;
    verificationUrl: string;
    contactNumber: string;
  }): Promise<IResponse<SellerSignUpResponseDto>> {
    try {
      const { data } = await axiosInstance.post<IResponse<SellerSignUpResponseDto>>(
        endpoints.auth.signUp,
        params
      );
      return data;
    } catch (error) {
      console.error('[AuthAPI - sellerSignUp]: ', error);
      throw error;
    }
  }

  public static async generateToken(params: { email: string }): Promise<IResponse<string>> {
    try {
      const { data } = await axiosInstance.patch<IResponse<string>>(
        endpoints.auth.generateToken,
        params
      );
      return data;
    } catch (error) {
      console.error('[AuthAPI - generateToken]: ', error);
      throw error;
    }
  }

  public static async resetPassword(params: {
    forgotPasswordToken: string;
    newPassword: string;
  }): Promise<IResponse<string>> {
    try {
      const { data } = await axiosInstance.patch<IResponse<string>>(
        endpoints.auth.verifyToken,
        params
      );
      return data;
    } catch (error) {
      console.error('[AuthAPI - resetPassword]: ', error);
      throw error;
    }
  }
}
