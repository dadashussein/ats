import PropTypes from 'prop-types';

import { TailSpin } from 'react-loader-spinner';
const SpinLoadingButton = ({ color = 'white' }) => {
  return (
    <TailSpin
      visible={true}
      height="20"
      width="25"
      speed="1.27"
      color={color}
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

SpinLoadingButton.propTypes = {
  color: PropTypes.string
};

export default SpinLoadingButton;
