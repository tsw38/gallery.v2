import {canUseDom, canUseStorage} from 'utilities/canUse';
import TC from 'constants/ThemeConstants';

export const getTheme = () => (dispatch, getState, api) => {
    if (canUseStorage()) {
        let theme = localStorage.getItem('theme');

        if (!theme) {
            theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

            dispatch(setTheme(theme));
        }


        dispatch({
            type: TC.THEME_FETCHED,
            payload: theme
        })

        return theme;
    }
    return;
}

export const setTheme = theme => (dispatch, getState, api) => {
    if (canUseStorage()) {
        localStorage.setItem('theme', theme);


        dispatch({
            type: TC.THEME_SET,
            payload: theme
        })
    }
    return theme;
}