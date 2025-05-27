import React from 'react';
import { createRoot } from 'react-dom/client';
import '../asset/tailwind.css';

const exampleDiv = document.getElementById('example');

const container = document.createElement('div');
container.id = 'example-container';

if (exampleDiv) {
  exampleDiv.insertBefore(container, exampleDiv.children[1]);
} else {
  document.body.appendChild(container);
}

const root = createRoot(container);
root.render(<div>Hello World</div>);

