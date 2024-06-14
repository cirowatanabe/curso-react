import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { TextInput } from ".";



describe("<TextInput />", () => {
  // teste para ver se o parametro informado vai estar presente no textinput
  it("should have a value of searchValue", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={'testando'} />);

    const input = screen.getByPlaceholderText(/type your search/i);

    expect(input.value).toBe('testando');
  });

  // teste para ver se a funcao vai ser chamada a cada tecla inserida
  it("should call handleChange function on each key pressed", async () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    const value = 'o valor';
    await userEvent.type(input, value);

    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it("should match snapshot", () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} searchValue={'teste'} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
