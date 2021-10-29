import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'routes';
import './App.scss';

export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </div>
    );
};
