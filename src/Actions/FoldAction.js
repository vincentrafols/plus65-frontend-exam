export const FOLD = 'FOLD';

export const triggerFold = (isFolded) => {
    return {
        type: FOLD,
        payload: isFolded
    };
};