/* eslint-disable import/prefer-default-export */

import { NAVBAR_LINK_UPDATE } from '../constants/navBarConstants';

export const updateLink = (link) => ({
  type: NAVBAR_LINK_UPDATE,
  text,
});
