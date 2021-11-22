import { render } from '@testing-library/react';
import { Button } from './Button.component';
import ButtonFixtures from './Button.fixtures';

describe('[Component] Button', () => {
    let container: any = null;
    let fixtures: ButtonFixtures;
    const onClickMock = jest.fn();

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        fixtures = new ButtonFixtures();
    });

    afterEach(() => {
        container.remove();
        container = null;
    });

    it('should display the correct button content', () => {
        render(<Button content="Test" onClickAction={onClickMock}/>, container);

        expect(fixtures.getButton().textContent).toEqual('Test');
    });

    it('should trigger the click action when button is clicked', () => {
        render(<Button content="Test" onClickAction={onClickMock}/>, container);

        const button = fixtures.getButton();
        button.click();
        expect(onClickMock).toHaveBeenCalled();
    });
});
