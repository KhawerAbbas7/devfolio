import './src/css/index.css';
// gatsby-ssr.js and gatsby-browser.js
import React from 'react';

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ className: 'light' }); // default
};
