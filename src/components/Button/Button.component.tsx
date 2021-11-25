import { ButtonProps } from './Button.props';
import './Button.style.scss';

export const Button = ({ content, onClickAction, isDisabled }: ButtonProps) => (
    <button className="button" onClick={onClickAction} disabled={isDisabled}>
        <span>{ content }</span>
    </button>
);
