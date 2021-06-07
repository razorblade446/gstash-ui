import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { AppRouter } from './routes/AppRouter';

library.add(faUser, faKey);

export const App = () => {
  return <AppRouter />;
};
