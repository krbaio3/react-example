import * as React from 'react';

const className = require('../../../assets/css/site.css');

interface Props {
	level: number;
}

const setSatisfactionClass = (level: number) => {
	if (level < 100) {
		return className.veryDissatisfied;
	}

	if (level < 200) {
		return className.somewhatDissatisfied;
	}

	if (level < 300) {
		return className.neither;
	}

	if (level < 400) {
		return className.somewhatSatisfied;
	}
 
	return className.verySatisfied;
};

export const CaritasComponent = (props: Props) => (
	<div className={setSatisfactionClass(props.level)} />
);
