import {Footer, Theme} from 'common/Footer/styles';
import { connect } from 'react-redux';

import {setTheme} from 'actions/ThemeActions';

const FooterWrapper = ({theme, setTheme}) => {
    const handleChangeTheme = () => {
        return setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <Footer>
            <Theme onClick={handleChangeTheme}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M8 24l3-9H2L16 0l-3 9h9L8 24z"/>
                </svg>
            </Theme>
        </Footer>
    )
}

const mapStateToProps = ({theme}) => ({
    theme
});

const mapDispatchToProps = {
    setTheme
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FooterWrapper)
