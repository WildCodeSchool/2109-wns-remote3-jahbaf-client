import { Navigation } from 'components/Navigation';
import { useSelector } from 'react-redux';
import { Notification } from 'components';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'routes';
import { StoreState } from 'store';
import './App.scss';

export const App = () => {
    const notification = useSelector((state: StoreState) => state.notification);
    return (
        <div>
            { notification.isVisible && <Notification/> }
            <BrowserRouter>
                <Navigation/>
                <Routes/>
            </BrowserRouter>
        </div>
    );
};
