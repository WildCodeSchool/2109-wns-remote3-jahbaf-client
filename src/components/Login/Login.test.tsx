import { fireEvent, render } from '@testing-library/react';
import Login from './Login.component';
import { MockedProvider } from '@apollo/client/testing';

const component = () => {
    return (
        <MockedProvider mocks={[]}>
            <Login />
        </MockedProvider>);
};

describe('[Component] Login', () => {
    let container: any = null;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        container.remove();
        container = null;
    });

    test('Should display email/password inputs, button and submit form', () => {
        render(component(), container);
        expect(container).toMatchSnapshot();

        const button = document.querySelector('button') as HTMLButtonElement;
        const displayedImage = document.querySelector('img') as HTMLImageElement;
        const passwordInput = document.querySelector('input[type=password]') as HTMLInputElement;
        const emailInput = document.querySelector('input[type=email]') as HTMLInputElement;

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(displayedImage.className).toContain('beaver-logo');

        fireEvent.change(emailInput, { target: { value: 'aa@aa.aa' } });
        expect(emailInput.value).toBe('aa@aa.aa');
        fireEvent.change(passwordInput, { target: { value: 'A1zertyu@' } });
        expect(passwordInput.value).toBe('A1zertyu@');
    });
});
