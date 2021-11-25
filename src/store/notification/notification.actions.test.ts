import { displayNotification, DISPLAY_NOTIF, hideNotification, HIDE_NOTIF } from './notification.actions';

describe('[Actions] Notification', () => {
    describe('displayNotification', () => {
        it('should return the correct action object', () => {
            const expectedReturn = {
                type: DISPLAY_NOTIF,
                payload: {
                    type: 'error',
                    message: 'Une erreur'
                }
            };

            expect(displayNotification('error', 'Une erreur')).toEqual(expectedReturn);
        });
    });

    describe('hideNotification', () => {
        it('should return the correct action object', () => {
            const expectedReturn = {
                type: HIDE_NOTIF
            };

            expect(hideNotification()).toEqual(expectedReturn);
        });
    });
});
