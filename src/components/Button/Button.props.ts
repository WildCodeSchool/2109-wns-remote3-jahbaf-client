export interface ButtonProps {
    /** Text content to be displayed on the button */
    content: string;

    /** Action to trigger when button is clicked */
    onClickAction: () => any

    /** Disable the button if needed */
    isDisabled?: boolean
}
