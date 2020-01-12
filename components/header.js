import { html } from '../node_modules/lit-html/lit-html.js';

export const headerTemplate = (pathToRoot, pageTitle) => html`
  <header>
    <nav>
      <a href="${pathToRoot}/index.html">Home</a>
      <a href="${pathToRoot}/pages/example.html">Example</a>
    </nav>
    <h1>Current Page: ${pageTitle}</h1>
  </header>
`;