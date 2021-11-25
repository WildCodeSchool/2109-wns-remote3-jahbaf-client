import { Fixtures } from 'fixtures';

interface NavigationMobileFixturesInterface {
    /** Returns the navigation container */
    getNavigation: () => HTMLDivElement;

    /** Returns the button used to switch the navigation visibility */
    getNavigationButton: () => HTMLButtonElement;

    /** Returns the first link displayed on the navigation */
    getLink: () => HTMLLinkElement;
}

export default class NavigationMobileFixtures
    extends Fixtures
    implements NavigationMobileFixturesInterface {
    private readonly NAVIGATION_SELECTOR = 'nav';
    private readonly BUTTON_SELECTOR = 'button';
    private readonly LINK_SELECTOR = 'a';

    public getNavigation () {
        return this.query(this.NAVIGATION_SELECTOR) as HTMLDivElement;
    }

    public getNavigationButton () {
        return this.query(this.BUTTON_SELECTOR) as HTMLButtonElement;
    }

    public getLink () {
        return this.query(this.LINK_SELECTOR) as HTMLLinkElement;
    }
}
