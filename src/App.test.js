import { render, screen } from '@testing-library/react';
import App from './App';
import Welcome from './components/welcome';
import BookList from './components/BookList';
import CommentArea from './components/CommentArea'; 
import scifiBooks from './data/scifi.json'



// Test welcome

test('renders Welcome component', () => {
  render(<Welcome />);
  const welcomeElement = screen.getByText(/Welcome To EpiBooks!/i);
  expect(welcomeElement).toBeInTheDocument();
});

// Test per le bootstrap cards

test('renders correct numbers of bootstrap cards', () => {
  render(<BookList books={scifiBooks} onBookSelect={() =>{}}/>);
  const bookCards = screen.getAllByRole('img');
  expect(bookCards.lenght).toBe(scifiBooks.lenght);
})

// Test per il componente CommentArea

test('renders CommentArea component', () => {
  render(<CommentArea asin = "55667"/>);
  const commentAreaElement = screen.getByText(/No comments yet/i);
  expect(commentAreaElement).toBeInTheDocument();
});

// Test per il filtraggio dei libri

// Test per il cambio di colore del bordo dei libri

// Test per il ripristino del bordo del libro precedente

// Test per l'assenza di SingleComment all'avvio

// Test per il caricamento delle recensioni


