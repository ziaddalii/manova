import { BrowserRouter } from 'react-router-dom';
import ThemeCustomization from 'themes';
import { JWTProvider as AuthProvider } from 'contexts/JWTContext';
import { render, RenderOptions } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';

interface AllProvidersProps {
  children?: ReactNode; // Allow children to be undefined
}

const AllProviders = ({ children }: AllProvidersProps) => (
  <BrowserRouter>
    <ThemeCustomization>
      <AuthProvider>{children}</AuthProvider>
    </ThemeCustomization>
  </BrowserRouter>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'> // Exclude wrapper from options since we're providing it
) => render(ui, { wrapper: AllProviders, ...options });

// Re-export everything from @testing-library/react
export * from '@testing-library/react';

// Override the render method
export { customRender as render };
