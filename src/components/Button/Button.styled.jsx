import styled from 'styled-components';

const Btn = styled.button`
  padding: 4px 8px;
  width: fit-content;
  border-radius: 10px;
  border: 1px solid #2e2e2e70;
  cursor: pointer;
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: #ffa600b9;
  }
`;

export { Btn };
