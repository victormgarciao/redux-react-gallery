import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/store';

describe('App', function() {
    beforeEach(function() {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
    });


    test('renders App', () => {
        const linkElement = screen.getByTestId('App');
        expect(linkElement).toBeInTheDocument();
    });


    test('renders title', () => {
        const linkElement = screen.getByText('Hello Gif!');
        expect(linkElement).toBeInTheDocument();
    });


    test('renders Gallery', () => {
        const galleryPicture = screen.getByTestId('gallery-picture');
        const galleryButton = screen.getByTestId('gallery-button');
        expect(galleryPicture).toBeInTheDocument();
        expect(galleryButton).toBeInTheDocument();
    });
});
