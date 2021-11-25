import { Fixtures } from 'fixtures';

interface SwitchFixturesInterface {
    /** Returns the switch container */
    getSwitchContainer: () => HTMLDivElement;
}

export default class SwitchFixtures
    extends Fixtures
    implements SwitchFixturesInterface {
    private readonly SWITCH_CONTAINER_SELECTOR = '.switch';
    private readonly SWITCH_BUTTON = '.switch-button';

    public getSwitchContainer () {
        return this.query(this.SWITCH_CONTAINER_SELECTOR) as HTMLDivElement;
    }
}
