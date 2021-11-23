import { render } from '@testing-library/react';
import { Card } from './Card.component';
import CardFixtures from './Card.fixtures';

describe('[Component] Card', () => {
    let container: any = null;
    let fixtures: CardFixtures;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        fixtures = new CardFixtures();
    });

    afterEach(() => {
        container.remove();
        container = null;
    });

    it('display the header when title is provided', () => {
        render(<Card title="test" isClosable={false}><div>test</div></Card>, container);

        expect(fixtures.getHeader()).toBeTruthy();
    });

    it('display the header when card is closable', () => {
        render(<Card isClosable={true}><div>test</div></Card>, container);

        expect(fixtures.getHeader()).toBeTruthy();
    });

    it('doesn\'t display the header when title is not provided and card is not closable', () => {
        render(<Card isClosable={false}><div>test</div></Card>, container);

        expect(fixtures.getHeader()).toBeFalsy();
    });

    it('should display the correct title when provided', () => {
        render(<Card title="Test" isClosable={false}><div>test</div></Card>, container);

        expect(fixtures.getTitle()).toEqual('Test');
    });
});
