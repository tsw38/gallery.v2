import TC from 'constants/ThemeConstants';

export default (state = '', {type, payload}) => {
    switch (type) {
        case TC.THEME_FETCHED:
        case TC.THEME_SET:
            return payload;
        default:
            return state
    }
};