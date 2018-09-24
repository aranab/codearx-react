import React from 'react';
import { render } from 'react-dom';
import { hello, goodbye, hi } from "./assets/scripts/lib";

render(
    <div>
        {hello}
        {goodbye}
        {hi}
    </div>,
    document.getElementById('react-container')
);
