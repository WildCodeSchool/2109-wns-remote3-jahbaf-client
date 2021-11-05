import { ButtonProps } from './Button.props';
import './Button.style.scss';

export const Button = ({ content, onClickAction }: ButtonProps) => (
    <button className="button" onClick={onClickAction}>
        <span>{ content }</span>
    </button>
);
