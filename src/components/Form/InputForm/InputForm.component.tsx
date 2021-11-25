import { InputFormProps } from './InputForm.props';
import './InputForm.style.scss';

const InputForm = ({ label, placeholder, isRequired, type, onChange, value, name }: InputFormProps): any => {
    return (
        <div className="input--wrapper">
            {label &&
           <label htmlFor="uname"><b>{label}</b></label>}
            {isRequired
                ? <input
                    value={value}
                    className="input"
                    onChange={onChange}
                    type={type} placeholder={placeholder}
                    name={name}
                    required={isRequired}
                />
                : <input
                    value={value}
                    className="input"
                    onChange={onChange}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                />}
        </div>
    );
};

InputForm.defaultProps = {
    label: '',
    type: 'text'
};

export default InputForm;
