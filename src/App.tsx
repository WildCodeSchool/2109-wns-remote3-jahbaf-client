import { Navigation } from 'components/Navigation';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'routes';
import './App.scss';

export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navigation/>
                <Routes/>
            </BrowserRouter>
        </div>
    );
};
