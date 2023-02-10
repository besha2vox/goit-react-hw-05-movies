import { Discription } from './Message.styled';
import PropType from 'prop-types';

const Message = ({ text }) => {
  return <Discription>{text}</Discription>;
};

export default Message;

Message.propType = {
  text: PropType.string.isRequired,
};
