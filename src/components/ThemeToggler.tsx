import { useSelector, useDispatch } from 'react-redux';
import { RootState, toggleTheme } from '../store/store';
import Button from 'react-bootstrap/Button';
import { ToggleOn, ToggleOff } from 'react-bootstrap-icons';

const ThemeToggler = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const buttonVariant = isDarkMode ? "dark" : "light";
  const iconStyle = {
    color: isDarkMode ? "#ffffff" : "#000000",
    transition: 'color 0.5s',
  };

  return (
    <div className="position-fixed top-0 end-0 m-3 d-flex align-items-center">
      <Button
        variant={buttonVariant}
        onClick={handleToggleTheme}
        className="me-2"
        style={{ transition: 'background-color 0.5s, color 0.5s' }}
      >
        {isDarkMode ? (
          <ToggleOn style={iconStyle} />
        ) : (
          <ToggleOff style={iconStyle} />
        )}
      </Button>
      <span>{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
    </div>
  );
};

export default ThemeToggler;
