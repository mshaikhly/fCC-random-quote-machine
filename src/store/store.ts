import { configureStore, createSlice } from '@reduxjs/toolkit';
import quotes from '../assets/quotes.json';

interface Quote {
  quote: string;
  author: string;
}

interface QuoteState {
  currentQuote: Quote;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const initialState: QuoteState = {
  currentQuote: getRandomQuote()
};

const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    setNewQuote: (state) => {
      state.currentQuote = getRandomQuote();
    }
  }
});

export const { setNewQuote } = quoteSlice.actions;

interface ThemeState {
  isDarkMode: boolean;
}

const getInitialThemeState = (): ThemeState => {
  const savedTheme = localStorage.getItem('isDarkMode');
  return {
    isDarkMode: savedTheme ? JSON.parse(savedTheme) : false,
  };
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: getInitialThemeState(),
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem('isDarkMode', JSON.stringify(state.isDarkMode));
    }
  }
});

export const { toggleTheme } = themeSlice.actions;

const store = configureStore({
  reducer: {
    quote: quoteSlice.reducer,
    theme: themeSlice.reducer

  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
