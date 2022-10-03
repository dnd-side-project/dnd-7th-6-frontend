import {SERVICE_TERMS, PRIVACY_TERMS, LOCATION_TERMS} from '../types/TermsActionType';

export const changeServiceTerms = (isService: any) => ({
  type: SERVICE_TERMS,
  payload: {isService},
});

export const changePrivacyTerms = (isPrivacy: any) => ({
  type: PRIVACY_TERMS,
  payload: {isPrivacy},
});

export const changeLocationTerms = (isLocation: any) => ({
  type: LOCATION_TERMS,
  payload: {isLocation},
});
