import './index.css';
import './config/i18n/config.ts';

import { MantineProvider } from '@mantine/core';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { queryClient } from './config/reactQuery/queryClient';
import { Routes } from './config/routes/Routes';
import { theme } from './config/theme/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme} children={<Routes />} />
    </QueryClientProvider>
  </React.StrictMode>,
);
