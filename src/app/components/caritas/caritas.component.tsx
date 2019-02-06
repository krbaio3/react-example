import * as React from 'react';

const className = require('../../../assets/css/site.css');

interface Props {
    level: number;
}

export const CaritasComponent = (props: Props) =>
    <div className={className.verySatisfied}></div>
