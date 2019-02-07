import * as React from 'react';

const className = require('../../../assets/css/site.css');

/**
 *
 *
 * @interface Props
 */
interface Props {
  level: number;
}

/**
 *
 *
 * @interface State
 */
interface State {}

/**
 *
 *
 * @param {number} level
 * @returns
 */
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

const isRangeChange = (oldValue: number, newValue: number): boolean => {
  const oldValueClass = setSatisfactionClass(oldValue);
  const newValueClass = setSatisfactionClass(newValue);

  return oldValueClass !== newValueClass;
};

/**
 * Si no ponemos el ShouldComponentUpdate, es como si siempre estuviera a true, por lo que se va a renderizar el componente,
 * Para comprobar esto, comentar la línea return isRange... y descomentar el return true y el console.log del render
 * Esto puede ser una forma de debuggearlo.
 *
 * @export
 * @class CaritasComponent
 * @extends {React.Component<Props>}
 */
export class CaritasComponent extends React.Component<Props> {
  shouldComponentUpdate(nextProps: Props, nextState, nextContext) {
    return isRangeChange(this.props.level, nextProps.level);
    // return true;
  }

  public render() {
    //   console.log(this.props.level);
    return <div className={setSatisfactionClass(this.props.level)} />;
  }
}
