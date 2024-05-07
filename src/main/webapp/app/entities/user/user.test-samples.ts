import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 24598,
  login: '8',
};

export const sampleWithPartialData: IUser = {
  id: 24790,
  login: 'KAhAZ',
};

export const sampleWithFullData: IUser = {
  id: 17896,
  login: 'M@1MZA',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
