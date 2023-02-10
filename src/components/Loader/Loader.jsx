import { ProgressBar } from 'react-loader-spinner';
import { LoaderPosition } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderPosition>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#2e2e2e70"
        barColor="#ffa600b9"
      />
    </LoaderPosition>
  );
};

export default Loader;
