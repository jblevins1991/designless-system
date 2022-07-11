import * as React from 'react';

import Textarea from "./Textarea";

export default {
    title: 'Components/Textarea',
    component: Textarea
};

export const DefualtTextarea = () => {
    return <Textarea
        label='textarea'
        name='textarea'
    />
}
