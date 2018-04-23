import React from 'react'
import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

// Themeing
import { ThemeProvider } from 'styled-components';
import theme from '../../src/theme';

// Import all story.js
const req = require.context('../../src', true, /\.story\.js$/);
function loadStories() {
  req.keys().forEach(req)
}

// Setting
setAddon(infoAddon);
addDecorator(withKnobs);
addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);
