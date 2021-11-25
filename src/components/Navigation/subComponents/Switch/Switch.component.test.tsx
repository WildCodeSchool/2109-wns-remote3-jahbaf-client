import { render } from '@testing-library/react';
import { Switch } from './Switch.component';
import SwitchFixtures from './Switch.fixtures';

describe('[Component] Switch', () => {
    let container: any = null;
    let fixtures: SwitchFixtures;
    const mockOnSwitch = jest.fn();

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        fixtures = new SwitchFixtures();
    });

    afterEach(() => {
        container.remove();
        container = null;
    });

    it('should call the onSwitch method with the dark argument when current is light', () => {
        render(<Switch onSwitch={mockOnSwitch} currentValue="light"/>, container);

        const switchContainer = fixtures.getSwitchContainer();
        switchContainer.click();

        expect(mockOnSwitch).toHaveBeenCalledWith('dark');
    });

    it('should call the onSwitch method with the light argument when current is dark', () => {
        render(<Switch onSwitch={mockOnSwitch} currentValue="dark"/>, container);

        const switchContainer = fixtures.getSwitchContainer();
        switchContainer.click();

        expect(mockOnSwitch).toHaveBeenCalledWith('light');
    });
});
