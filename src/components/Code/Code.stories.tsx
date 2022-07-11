import * as React from 'react';

import Code from "./Code";

export default {
    title: 'Components/Code',
    component: Code
};

export const DefualtCode = () => {
    return <Code id='code' copyIcon={null}>
        {'Some code'}
    </Code>
}