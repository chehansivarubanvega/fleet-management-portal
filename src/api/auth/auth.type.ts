import { UserRoles } from "@/types/user";


export interface SignInResponseDto {
  id: string;
  name: string;
  email: string;
  status: string;
  role: string;
  accessToken: string;
  refreshToken?: string;
  logo?: string;
}

export interface SellerSignUpResponseDto {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: UserRoles;
  isSubscribed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface BuyerSignUpResponseDto {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRoles;
  isEmailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}
