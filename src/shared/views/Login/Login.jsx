import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';

import {
  ViewWrapper
} from '../index';

import {
  Consumer
} from '../../context/Context.jsx';

import { Variables, ObjectUtil } from '../../utils';

class Login extends React.Component {
  constructor(props){
    super(props);

    const { state, actions } = this.props;

    this.state = state.login ? {
      ...state.login,
      render: false,
      userName:'',
      password: '',
    } : actions.LoginActions.stateManager.initState()
  }

  async componentWillReceiveProps(nextProps){
    const parentState  = await nextProps.getParentState('login');
    const stateChanged = ObjectUtil.compare(this.state, parentState).changed;
    if(stateChanged) {
      this.setState({
        ...this.state,
        ...parentState
      });
    }
  }

  async componentDidMount(){
    await this.props.actions.GlobalActions.page.render(this.props, 'login');
  }

  async componentWillUnmount(){
    await this.props.actions.GlobalActions.page.hide(this.props, 'login');
  }

  storeInState = (storageKey) => (event) => {

    this.setState({
      [storageKey]: event.target.value
    })
  }

  authenticate = () => async () => {
    const {
      login
    } = this.props.actions.LoginActions;

    const loggedIn = await login.login({
      userName:this.state.userName,
      password:this.state.password
    });
  }

  render(){
    const {
      location
    } = this.props;

    return (
      <ViewWrapper
        page="login"
        hideMenu={true}
        render={this.state.render}>
        <Helmet title="Login - Chicago Wedding & Portrait Photographer" />
        <InnerWrapper>
          <LoginBox>
            <h2>Login</h2>
            <PseudoForm>
              <label>
                <span>Username</span>
                <StyledUserName
                  onChange={this.storeInState('userName')}
                />
              </label>
              <label>
                <span>Password</span>
                <StyledPassword
                  onChange={this.storeInState('password')}
                />
              </label>
              <StyledButton
                onClick={this.authenticate()}>
               SUBMIT
              </StyledButton>
            </PseudoForm>
          </LoginBox>
        </InnerWrapper>
        <LoginBackgroundWrapper
          render={this.state.render}/>
      </ViewWrapper>
    )
  }
}

export default props => (
  <Consumer>
    {context => {
      return <Login {...props} {...context} />
    }}
  </Consumer>
)

const InnerWrapper = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  width: 100%;
  height:100%;
  overflow: auto;
  position:relative;
  z-index:10;
  transition: opacity 1s ease-in;

  @media only screen and (max-width:920px){
    flex-direction: column;
  }
`

const LoginBox = styled.div`
  max-height: 235px;
  height: 40vw;
  width: 50vw;
  max-width: 450px;
  background-color:rgba(255,255,255,0.9);
  border-bottom:2px solid rgba(0,0,0,0.25);
  border-radius:4px;

  h2{
    text-transform:uppercase;
    font-size:25px;
    text-align:center;
    padding:25px 0 15px;
  }
`;

const PseudoForm = styled.div`
  margin: 0 2vw;

  label{
    display: block;

    span {
      display:block;
      font-size: 12px;
      text-transform: uppercase;
      color: rgba(0,0,0,0.25);
      margin-bottom: 5px;
    }

    &:first-of-type{
      margin-bottom: 25px;
    }
  }
`;

const StyledInputs = styled.input`
  display: inline-block;
  background-color:transparent;
  border:none;
  border-bottom:1px solid ${Variables.textBlack};
  width: 100%;
  font-size:16px;
  color:${Variables.textBlack};
`;

const StyledUserName = StyledInputs.extend`
`;
const StyledPassword = StyledInputs.extend.attrs({
  type: 'password'
  // or we can define dynamic ones
  // margin: props => props.size || '1em',
})``;

const StyledButton = styled.button`
  text-align: center;
  margin: 25px 0 0 auto;
  display: block;
  font-size: 15px;
  background-color: rgba(255,255,255, 0.25);
  border: none;
  padding: 5px 15px;
  border: 1px solid ${Variables.textBlack};
  cursor:pointer;
  transition: background-color 250ms ease, color 250ms ease;

  &:hover {
    color: white;
    background-color: ${Variables.textBlack};
  }
`;

const LoginBackgroundWrapper = styled.div`
  background-image:url(${Variables.origin + '/api/images/random'});
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
  user-select: none;
  pointer-events: none;
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:0;
  transition: opacity 1s ease-in;
  ${props => css`
      opacity: ${props.render ? 0.75 : 0};
    `
  }
`
