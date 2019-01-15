/* eslint-disable import/prefer-default-export */

import { HOME_NAME_UPDATE } from '../constants/homeConstants';

export const updateName = (text) => ({
  type: HOME_NAME_UPDATE,
  text,
});
