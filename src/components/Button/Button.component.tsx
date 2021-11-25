import { ButtonProps } from './Button.props';
import './Button.style.scss';

export const Button = ({ content, onClickAction, width }: ButtonProps) => (
    <button style={{ width }} className="button" onClick={onClickAction}>
        <span>{ content }</span>
    </button>
);
