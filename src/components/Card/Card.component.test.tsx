import { render } from '@testing-library/react';
import { Card } from './Card.component';

const component = () => {
    return <Card/>;
};

describe('[Component] Card', () => {
    let container: any = null;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        container.remove();
        container = null;
    });

    it('should display the correct page title', () => {
        render(component(), container);
        expect(document.title).toEqual('Ttest');
    });
});
