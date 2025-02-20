import type { Dayjs } from 'dayjs';

// ----------------------------------------------------------------------

export type IPaymentCard = {
  id: string;
  cardType: string;
  primary?: boolean;
  cardNumber: string;
};

export type IAddressItem = {
  id?: string;
  name: string;
  company?: string;
  primary?: boolean;
  fullAddress: string;
  phoneNumber?: string;
  addressType?: string;
};

export type IDateValue = string | number | Date | null;

export type IDatePickerControl = Dayjs | null;

export type ISocialLink = {
  twitter: string;
  facebook: string;
  linkedin: string;
  instagram: string;
};

export type IPopulated = {
  _id: string;
  name: string;
};

export type IPopulatedCase = {
  _id: string;
  title: string;
};

export interface IPopulatedUser extends IPopulated {
  profilePhotoUrl: string;
}

export interface IPopulatedClient extends IPopulated {
  email: string;
  contactNumber: string;
  address: string;
}
