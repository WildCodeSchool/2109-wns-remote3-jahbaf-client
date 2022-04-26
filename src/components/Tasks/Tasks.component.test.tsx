import { render } from '@testing-library/react';
import { Tasks } from './Tasks.component';

const component = () => {
    return <Tasks tasks={[]} />;
};

describe('[Component] Tasks', () => {
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
    });
});
