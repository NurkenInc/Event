import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { ProSidebarProvider  } from 'react-pro-sidebar' 

import App from './App/App'

import theme from './theme/theme'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ProSidebarProvider>
        <App />
      </ProSidebarProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
