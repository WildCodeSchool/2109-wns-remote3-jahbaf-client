import { Fixtures } from 'fixtures';

interface CardFixturesInterface {
    /** Returns the header element if existing, null otherwise */
    getHeader: () => Element | null;

    /** Returns the title displayed on the card if existing */
    getTitle: () => string | null;
}

export default class CardFixtures
    extends Fixtures
    implements CardFixturesInterface
{
    private readonly HEADER_SELECTOR = '.card__header';
    private readonly TITLE_SELECTOR = 'h2';

    public getHeader() {
        return this.query(this.HEADER_SELECTOR);
    }

    public getTitle() {
        return this.query(this.TITLE_SELECTOR)!.textContent;
    }
}
