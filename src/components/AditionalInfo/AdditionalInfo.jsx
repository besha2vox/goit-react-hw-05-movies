import { AdditionalInfoLink, AdditionalList } from './AdditionalInfo.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader';

const AdditionalInfo = ({ backLink }) => {
  return (
    <>
      <h3>Additional info:</h3>
      <AdditionalList>
        <li>
          <AdditionalInfoLink to="cast" state={{ from: backLink }}>
            Cast
          </AdditionalInfoLink>
        </li>
        <li>
          <AdditionalInfoLink to="reviews" state={{ from: backLink }}>
            Reviews
          </AdditionalInfoLink>
        </li>
      </AdditionalList>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default AdditionalInfo;
