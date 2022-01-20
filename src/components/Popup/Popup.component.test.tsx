import { render } from '@testing-library/react';
import { Popup } from './Popup.component';
import PopupFixtures from './Popup.fixtures';

describe('[Component] Popup', () => {
    let container: any = null;
    let fixtures: PopupFixtures;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        fixtures = new PopupFixtures();
    });

    afterEach(() => {
        container.remove();
        container = null;
    });

    it('should not have a motion class when not provided', () => {
        render(
            <Popup>
                <div>test</div>
            </Popup>,
            container
        );

        const popup = fixtures.getPopup();

        expect(popup.classList.contains('enter-left')).toBeFalsy();
    });

    it('should have a motion class when provided', () => {
        render(
            <Popup motion="enter-left">
                <div>test</div>
            </Popup>,
            container
        );

        const popup = fixtures.getPopup();

        expect(popup.classList.contains('enter-left')).toBeTruthy();
    });
});
