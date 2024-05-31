import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface NewQuoteButtonProps {
  onClick: () => void;
}

const NewQuoteButton = ({ onClick }: NewQuoteButtonProps) => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <Button
      variant={isDarkMode ? "outline-light" : "outline-dark"}
      onClick={onClick}
      id="new-quote"
    >
      New Quote
    </Button>
  );
};

export default NewQuoteButton;
