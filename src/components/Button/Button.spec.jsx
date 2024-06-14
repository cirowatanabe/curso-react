import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '.';

describe('<Button />', () => {
  // checa se o botao aparece com o texto informado no parametro
  it('should render the button with the text "Load more"', () => {
    render(<Button text="Load more" />)

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  // simula o click do botao e verifica se a sua funcao foi chamada
  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="Load more" clicou={fn} />)

    const button = screen.getByRole('button', { name: /load more/i });

    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  // testa se o botao eh desabilitado quando passamos true para disabled
  it('should be disabled when disabled is true', () => {
    render(<Button text="Load more" disabled={true} />);

    const button = screen.getByRole('button', { name: /load more/i });
    
    expect(button).toBeDisabled();
  });

  it('should match snapshot', () => {
    const { container } = render(<Button text="Load more" disabled={true} />);

    expect(container.firstChild).toMatchSnapshot();
  })

});