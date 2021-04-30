/* eslint-disable camelcase */
import { action } from "easy-peasy";

const defaultState = {
  defaultProp: "shivam",
};

const modelObj = {
  ...defaultState,
  setDefaultProp: action((state, payload) => ({
        ...state,
        ...payload
  }))

  // sendParentOTP: thunk((actions, { mobile, country_code }) => sendParentOTP({ mobile, country_code })),
}

export default modelObj;
