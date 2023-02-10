import styled from 'styled-components';

const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ReviewsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid #2e2e2e70;
  border-radius: 10px;
  padding-bottom: 8px;
  overflow: hidden;

  & div {
    display: inherit;
    gap: 8px;
    align-items: end;
  }

  & img {
    display: block;
    max-width: 150px;
    max-height: 100px;
    object-fit: contain;
  }

  & h3 {
    border-bottom: 2px solid #2e2e2e70;
  }

  & p {
    font-size: 16px;
    padding: 0 8px;
    font-weight: 700;

    & span {
      display: block;
      font-size: 16px;
      font-weight: 400;
    }
  }
`;

export { ReviewsItem, ReviewsList };
