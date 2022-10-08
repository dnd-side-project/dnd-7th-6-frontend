import {Reducer} from 'redux';

import {SERVICE_TERMS, PRIVACY_TERMS, LOCATION_TERMS} from '../types/TermsActionType';

const initialState = {
  serviceTerms: true,
  privacyTerms: false,
  locationTerms: false,
};

const termsReducer: Reducer = (state = initialState, action) => {
  const {payload} = action;

  switch (action.type) {
    case SERVICE_TERMS:
      return {...state, serviceTerms: payload.isService};
    case PRIVACY_TERMS:
      return {...state, privacyTerms: payload.isPrivacy};
    case LOCATION_TERMS:
      return {...state, locationTerms: payload.isLocation};
    default:
      return state;
  }
};

export default termsReducer;
