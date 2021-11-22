import { render } from '@testing-library/react';
import { CloseButton } from './CloseButton.component';
import CloseButtonFixtures from './CloseButton.fixtures';

describe('[Component] CloseButton', () => {
    let container: any = null;
    let fixtures: CloseButtonFixtures;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        fixtures = new CloseButtonFixtures();
    });

    afterEach(() => {
        container.remove();
        container = null;
    });

    it('should trigger the onCloseAction passed on props on button click', () => {
        const onClickMock = jest.fn();

        render(<CloseButton onCloseAction={onClickMock}/>, container);

        const button = fixtures.getButton();
        button.click();
        expect(onClickMock).toHaveBeenCalled();
    });
});
