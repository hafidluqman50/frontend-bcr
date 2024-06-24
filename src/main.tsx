import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { GlobalHistory } from '@/lib/utils'

import '@/assets/bootstrap.min.css'
import '@/assets/custom.css'
import '@/assets/bootstrap.bundle.min.js'
import "nprogress/nprogress.css";
import { ListOrderContextProvider } from './context/OrderContext'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ListOrderContextProvider>
      <BrowserRouter>
        <GlobalHistory />
        <App />
      </BrowserRouter>
    </ListOrderContextProvider>
  </QueryClientProvider>
)
