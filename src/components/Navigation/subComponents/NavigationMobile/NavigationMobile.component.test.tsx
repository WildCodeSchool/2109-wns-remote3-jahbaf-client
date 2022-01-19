import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NavigationMobile } from './NavigationMobile.component';
import NavigationMobileFixtures from './NavigationMobile.fixtures';

describe('[Component] NavigationMobile', () => {
    let container: any = null;
    let fixtures: NavigationMobileFixtures;
    const mockSwitcher = jest.fn();

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        fixtures = new NavigationMobileFixtures();
        render(
            <BrowserRouter>
                <NavigationMobile currentTheme='dark' onSwitchTheme={mockSwitcher} />
            </BrowserRouter>, container);
    });

    afterEach(() => {
        container.remove();
        container = null;
    });

    describe('navigation', () => {
        it('should have the closed className when isMenuOpen is false', () => {
            const nav = fixtures.getNavigation();
            expect(nav.classList.contains('closed')).toBeTruthy();
            expect(nav.classList.contains('opened')).toBeFalsy();
        });
        it('should have the opened className when isMenuOpen is true', () => {
            const nav = fixtures.getNavigation();
            expect(nav.classList.contains('closed')).toBeTruthy();
            expect(nav.classList.contains('opened')).toBeFalsy();

            const button = fixtures.getNavigationButton();
            button.click();

            expect(nav.classList.contains('opened')).toBeTruthy();
            expect(nav.classList.contains('closed')).toBeFalsy();
        });
        it('should close the navigation when a link is clicked', () => {
            const nav = fixtures.getNavigation();

            const button = fixtures.getNavigationButton();
            button.click();

            expect(nav.classList.contains('opened')).toBeTruthy();
            expect(nav.classList.contains('closed')).toBeFalsy();

            const link = fixtures.getLink();
            link.click();

            expect(nav.classList.contains('closed')).toBeTruthy();
            expect(nav.classList.contains('opened')).toBeFalsy();
        });
    });

    describe('button', () => {
        it('should have the button-closed className when isMenuOpen is false', () => {
            const button = fixtures.getNavigationButton();
            expect(button.classList.contains('button-closed')).toBeTruthy();
            expect(button.classList.contains('button-opened')).toBeFalsy();
        });
        it('should have the button-opened className when isMenuOpen is true', () => {
            const button = fixtures.getNavigationButton();
            expect(button.classList.contains('button-closed')).toBeTruthy();
            expect(button.classList.contains('button-opened')).toBeFalsy();

            button.click();

            expect(button.classList.contains('button-opened')).toBeTruthy();
            expect(button.classList.contains('button-closed')).toBeFalsy();
        });
    });
});
