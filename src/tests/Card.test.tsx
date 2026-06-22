import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from '../components/ui/Card';


describe('Card Component', () => {
  it('renders children correctly', () => {
    render(
      <Card>
        <div data-testid="child-element">Test Content</div>
      </Card>
    );
    
    expect(screen.getByTestId('child-element')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Card className="custom-test-class">Content</Card>);
    
    expect(container.firstChild).toHaveClass('card');
    expect(container.firstChild).toHaveClass('custom-test-class');
  });
});
