import * as React from 'react';
import { NextPage } from 'next';

import GnbLayout from 'components/templates/GnbLayout';

import Logo from 'svg/logo.svg';

const Home: NextPage = () => {
    return (
        <GnbLayout title={'Home'}>
            <Logo width="40px" height="40px" />
            <h1>Hello, Next Ts</h1>
        </GnbLayout>
    );
};

export default Home;
