import React from 'react';
import Head from 'next/head';

import Header from 'organisms/Header';
import Footer from 'organisms/Footer';

interface ILayout {
    title?: string;
}

const Layout: React.FunctionComponent<ILayout> = ({ children, title }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <Header />
        {children}
        <Footer />
    </div>
);

export default Layout;
