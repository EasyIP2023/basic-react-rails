import ReactOnRails from 'react-on-rails';

// import { addLocaleData } from 'react-intl';
// import en from 'react-intl/locale-data/en';
// import de from 'react-intl/locale-data/de';
// import ja from 'react-intl/locale-data/ja';
// import zh from 'react-intl/locale-data/zh';

import NavBarApp from './NavBarApp';
import HomeApp from './HomeApp';

// Initizalize all locales for react-intl.

ReactOnRails.setOptions({
  traceTurbolinks: process.env.TRACE_TURBOLINKS, // eslint-disable-line no-undef
});

ReactOnRails.register({
  NavBarApp,
  HomeApp,
});
