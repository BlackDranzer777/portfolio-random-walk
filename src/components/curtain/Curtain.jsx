import React from 'react';
import './Curtain.css';

export default function Curtain({curtain, facts}) {

    return (
        <div className={curtain ? 'curtain-active' : 'curtain'}>
            <p className="fact">{facts}</p>
        </div>
    )
}
