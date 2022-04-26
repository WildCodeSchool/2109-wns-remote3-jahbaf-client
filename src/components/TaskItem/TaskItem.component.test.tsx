import { render } from '@testing-library/react';
import { TaskItem } from './TaskItem.component';

const component = () => {
    return <TaskItem/>;
};

describe('[Component] TaskItem', () => {
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
