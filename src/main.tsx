import { createRoot } from 'react-dom/client'
import { LazyMotion, domAnimation } from 'framer-motion';

import './styles/globals.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <LazyMotion features={domAnimation}>
    <App />
  </LazyMotion>,
)
