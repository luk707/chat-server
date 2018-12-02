import invert from "lodash/invert";

const errorCodes = {
  USER_REGISTER_EMAIL_TAKEN: "weasel",
  USER_REGISTER_UNKOWN: "chinchilla",
  USER_REGISTER_VALIDATION: "kangaroo"
};

export default errorCodes;

export const errorCodeLookupTable = invert(errorCodes);

export const lookupErrorCode = code => errorCodeLookupTable[code];
