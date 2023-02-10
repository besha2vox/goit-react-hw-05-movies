import styled, { css } from 'styled-components';

const itemStyles = css`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  transition: box-shadow 300ms ease-in-out, transform 300ms ease-in-out;
  border: 1px solid #2e2e2e70;
  border-radius: 10px;
  overflow: hidden;

  & img {
    object-fit: cover;
    min-height: 400px;
  }

  & div {
    padding: 4px;
    display: inherit;
    flex-direction: column;
    justify-content: end;
    flex-grow: 1;
  }
`;

const Item = styled.li`
  ${itemStyles}

  cursor: pointer;

  &:hover {
    box-shadow: 0 0 3px 2px #db8f2cac;
    transform: scale(1.2);
  }
`;

export { itemStyles, Item };
