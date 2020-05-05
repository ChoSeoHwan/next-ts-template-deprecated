// in config.js
import React from 'react';
import { Provider } from 'react-redux';
import { Global } from '@emotion/core';
import { addDecorator } from '@storybook/react';

import { initStore } from 'modules/store';

import { GlobalStyle } from 'styles/App.style';

addDecorator((context) => (
    <Provider store={initStore()}>
        <Global styles={GlobalStyle} />
        {context()}
    </Provider>
));
