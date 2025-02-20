import type { IDateValue } from './common';

// ----------------------------------------------------------------------

export enum UserRoles {
  SuperAdmin = 'super-admin',
  SeniorPartner = 'senior-partner',
  Associate = 'associate',
  User = 'user',
}

export enum UserStatus {
  Active = 'active',
  DeActivated = 'deactivated',
  Deleted = 'deleted',
}

export type UserStatistics = {
  total: number;
  [UserRoles.SuperAdmin]: number;
  [UserRoles.SeniorPartner]: number;
  [UserRoles.Associate]: number;
  [UserRoles.User]: number;
};

export type IUserTableFilters = {
  name: string;
  role: UserRoles | 'all';
};

export type IUserCard = {
  id: string;
  name: string;
  role: string;
  coverUrl: string;
  avatarUrl: string;
  totalPosts: number;
  totalFollowers: number;
  totalFollowing: number;
};

export type IUserAccountBillingHistory = {
  id: string;
  price: number;
  invoiceNumber: string;
  createdAt: IDateValue;
};
