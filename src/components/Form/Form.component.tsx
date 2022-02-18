import './Form.style.scss';

const Form = ({ children }: any) => {
    function onSubmit (e: any) {
        e.preventDefault();
    }
    return (
        <form className='form' method="post" onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export default Form;
