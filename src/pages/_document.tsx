/* eslint-disable import/no-default-export */
import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../../stiches.config';

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <style
                        id="stitches"
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: getCssText() }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}