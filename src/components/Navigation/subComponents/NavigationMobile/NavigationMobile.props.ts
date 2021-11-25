import { Theme } from 'components/Navigation';

export interface NavigationMobileProps {
    /** Action to trigger when theme is updated */
    onSwitchTheme: (theme: Theme) => void;

    /** Current selected theme */
    currentTheme: Theme
}
