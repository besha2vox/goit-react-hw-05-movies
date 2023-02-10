import { Btn } from './Button.styled';
import PropType from 'prop-types';

const Button = ({ text, onBtnClick }) => {
  return <Btn onClick={onBtnClick}>{text}</Btn>;
};

export default Button;

Button.propType = {
  text: PropType.string.isRequired,
  onBtnClick: PropType.func.isRequired,
};
