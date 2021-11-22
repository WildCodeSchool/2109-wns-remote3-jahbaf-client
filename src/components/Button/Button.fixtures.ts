import { Fixtures } from 'fixtures';

interface ButtonFixturesInterface {
    /** Returns the button element */
    getButton: () => HTMLButtonElement
}

export default class ButtonFixtures extends Fixtures implements ButtonFixturesInterface {
    private readonly BUTTON_SELECTOR = 'button';

    public getButton () {
        return this.query(this.BUTTON_SELECTOR) as HTMLButtonElement;
    }
}
