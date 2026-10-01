import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import '@fontsource-variable/readex-pro';
import App from './App.jsx';
import './styles/index.css';

const root = document.getElementById('root');
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Pages are prerendered at build time. Hydrate only when the markup was rendered for this URL;
// otherwise (e.g. 404.html served for an unknown /ar/... path) render fresh to avoid a mismatch.
const normalise = (p) => (p.length > 1 ? p.replace(/\/+$/, '') : p);
const prerenderedFor = root.dataset.path;
if (root.hasChildNodes() && prerenderedFor && normalise(prerenderedFor) === normalise(window.location.pathname)) {
  hydrateRoot(root, app);
} else {
  // React clears the static markup when it commits, so it stays visible until then.
  createRoot(root).render(app);
}
