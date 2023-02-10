import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;

  & img {
    display: block;
    height: auto;
  }
`;

const ContentWrraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 900;
  text-align: center;
`;

const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;

  & span {
    font-size: 16px;
    font-weight: 500;
  }
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const GanreWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: baseline;
`;

export { Wrapper, Title, SubTitle, Text, ContentWrraper, GanreWrapper };
