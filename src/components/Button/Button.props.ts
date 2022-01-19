export interface ButtonProps {
    /** Text content to be displayed on the button */
    content: string;

    /** Action to trigger when button is clicked */
    onClickAction: () => any

    /** Width to be applied to the button */
    width?: string;

    /** Define if the button is of type submit or button */
    submit?: boolean;
}
