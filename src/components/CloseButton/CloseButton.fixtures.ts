import { Fixtures } from 'fixtures';

interface CloseButtonFixturesInterface {
    /** Returns the button element */
    getButton: () => HTMLDivElement;
}

export default class CloseButtonFixtures
    extends Fixtures
    implements CloseButtonFixturesInterface
{
    private readonly BUTTON_SELECTOR = '.close-button';

    public getButton() {
        return this.query(this.BUTTON_SELECTOR) as HTMLDivElement;
    }
}
