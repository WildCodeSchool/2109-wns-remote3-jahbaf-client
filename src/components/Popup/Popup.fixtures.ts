import { Fixtures } from 'fixtures';

interface PopupFixturesInterface {
    /** Returns the popup element */
    getPopup: () => HTMLDivElement;
}

export default class PopupFixtures
    extends Fixtures
    implements PopupFixturesInterface
{
    private readonly POPUP_SELECTOR = '.popup';

    public getPopup() {
        return this.query(this.POPUP_SELECTOR) as HTMLDivElement;
    }
}
