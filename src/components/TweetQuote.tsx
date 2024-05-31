import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { FaTwitter } from "react-icons/fa";



interface TweetQuoteProps {
  quote: string;
  author: string;
}

const TweetQuote = ({ quote, author }: TweetQuoteProps) => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  const linkStyle = {
    color: isDarkMode ? "#ffffff" : "#000000",
    textDecoration: 'none',
  };

  const hoverStyle = {
    color: isDarkMode ? "#242424" : "#ffffff",
  };

  return (
    <Button
      
      variant={isDarkMode ? "outline-light" : "outline-dark"}
      onMouseOver={e => {
        e.currentTarget.querySelector('a')!.style.color = hoverStyle.color;
      }}
      onMouseOut={e => {
        e.currentTarget.querySelector('a')!.style.color = linkStyle.color;
      }}
    >
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quote} - ${author}`)}`}
        target="_blank"
        style={linkStyle}
        id="tweet-quote"
      >
        <FaTwitter />
      </a>
    </Button>
  );
}


export default TweetQuote;
