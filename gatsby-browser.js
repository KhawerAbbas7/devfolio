import './src/css/index.css';
import React from 'react';

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ className: 'light' });
};
