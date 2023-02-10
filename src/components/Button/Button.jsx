import { Btn } from './Button.styled';

const Button = ({ text, onBtnClick }) => {
  return <Btn onClick={onBtnClick}>{text}</Btn>;
};

export default Button;
