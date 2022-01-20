import { render } from '@testing-library/react';
import { TaskContainer } from './TaskContainer.component';

const component = () => {
    return <TaskContainer />;
};

describe('[Component] TaskContainer', () => {
    let container: any = null;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        container.remove();
        container = null;
    });
});
