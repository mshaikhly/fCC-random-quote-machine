import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import { RootState, setNewQuote } from './store/store';
import Quote from './components/Quote';
import NewQuoteButton from './components/NewQuoteButton';
import TweetQuote from './components/TweetQuote';
import ThemeToggler from './components/ThemeToggler';

function App() {
  const quote = useSelector((state: RootState) => state.quote.currentQuote);
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  const handleNewQuote = () => {
    dispatch(setNewQuote());
  };

  return (
    <Container
      fluid
      className={`app-container full-width-height ${isDarkMode ? "dark-mode" : "light-mode"} d-flex flex-column align-items-center justify-content-center vh-100`}>      <Row className="w-100">
        <Col className="d-flex flex-column align-items-center">
          <ThemeToggler />
          <div id="quote-box" className="text-center">
            <Quote quote={quote.quote} author={quote.author} />
            <NewQuoteButton onClick={handleNewQuote} />
            <TweetQuote quote={quote.quote} author={quote.author} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;