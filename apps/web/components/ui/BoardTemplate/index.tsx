'use client'

import React from 'react';
import { WrappedButton } from 'turbo-build-ui/system';

const BoardTemplate = () => {
    return (
        <section>
            <h4>dashboard</h4>
            <WrappedButton text="hello" onClick={() => alert('click!')} />
        </section>
    );
};

export default BoardTemplate;
