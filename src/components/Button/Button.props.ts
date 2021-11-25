export interface ButtonProps {
    /** Text content to be displayed on the button */
    content: string;

    /** Action to trigger when button is clicked */
    onClickAction: () => any

    /** Width to be applied to the button */
    width?: string;
}
