import AboutButton from './AboutButton';
import BackButton from './BackButton';
import CartButton from './CartButton';
import LoginButton from './LoginButton';
import { PropTypes } from 'prop-types';

export default function HeaderBar({
  showBackButton = true,
  showCartButton = true,
  showLoginButton = true,
}) {
  return (
    <div className="flex flex-row justify-between items-center w-full text-white p-4">
      {showBackButton && <BackButton />}
      <div>
        {showLoginButton && <LoginButton />}
        <AboutButton />
      </div>
      {showCartButton && <CartButton />}
    </div>
  );
}

HeaderBar.propTypes = {
  showBackButton: PropTypes.bool,
  showCartButton: PropTypes.bool,
  showLoginButton: PropTypes.bool,
};

HeaderBar.defaultProps = {
  showBackButton: true,
  showCartButton: true,
  showLoginButton: true,
};
