import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: darkgray;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

/* Preset styles*/

body {
  font-family: sans-serif;
  line-height: 1.5;
  }
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
`;
