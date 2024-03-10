import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Modal } from '@/components/Modal';
import '@testing-library/jest-dom';

describe('Modal component', () => {
  it('renders with default header text if no header prop is provided', () => {
    const { getByText } = render(<Modal />);
    expect(getByText('Header')).toBeInTheDocument();
  });

  it('renders with custom header if header prop is provided', () => {
    const { getByText } = render(<Modal header="Custom Header" />);
    expect(getByText('Custom Header')).toBeInTheDocument();
  });

  it('renders children content', () => {
    const { getByText } = render(<Modal>Modal Content</Modal>);
    expect(getByText('Modal Content')).toBeInTheDocument();
  });
});
