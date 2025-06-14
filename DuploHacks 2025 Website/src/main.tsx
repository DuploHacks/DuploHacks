import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import LoadingScreen from './components/LoadingScreen.tsx';

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  if (document.fonts) {
    document.fonts.load('1em "Bauhaus 93"').then(() => {
      document.body.classList.add('font-loaded');
      setIsLoading(false);
    });
  } else {
    document.body.classList.add('font-loaded');
    setIsLoading(false);
  }

  return (
    <StrictMode>
      {isLoading && <LoadingScreen />}
      {!isLoading && <App />}
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(
  <Main />
);
