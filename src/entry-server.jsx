import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import AppRoutes from './routes';

export { getAlternates, getMeta, getStructuredData, indexableRoutes } from './config/seo';

export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  );
}
