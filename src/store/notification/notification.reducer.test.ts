import { notificationReducer } from './notification.reducer';
import { DISPLAY_NOTIF, HIDE_NOTIF } from './notification.actions';

const mockInitialState = {
    isVisible: false,
    type: null,
    message: ''
};

describe('[Reducer] NotificationReducer', () => {
    describe('displayNotification', () => {
        it('should return the correct state', () => {
            const expectedReturn = {
                isVisible: true,
                type: 'error',
                message: 'Une erreur'
            };

            expect(notificationReducer(mockInitialState, {
                type: DISPLAY_NOTIF,
                payload: {
                    type: 'error',
                    message: 'Une erreur'
                }
            })).toEqual(expectedReturn);
        });
    });

    describe('hideNotification', () => {
        it('should return the correct state', () => {
            const expectedReturn = {
                isVisible: false,
                type: null,
                message: ''
            };

            expect(notificationReducer(mockInitialState, {
                type: HIDE_NOTIF
            })).toEqual(expectedReturn);
        });
    });
});
