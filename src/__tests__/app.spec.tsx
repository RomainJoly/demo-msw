import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App';

describe('App tests', () => {
    it('should display list of beers', async () => {
      render(<App />);
      await waitFor(() => expect(screen.getByTestId('beerList')).toBeInTheDocument());
    });
});