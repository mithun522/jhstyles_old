import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'f7e09a08-8043-4575-9eea-8313b753d8d0',
};

export const sampleWithPartialData: IAuthority = {
  name: '4e91a550-bfbc-457e-914b-1b5bbb99b99c',
};

export const sampleWithFullData: IAuthority = {
  name: 'bcd9835d-5028-41c3-abbf-2dc988654ecc',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
