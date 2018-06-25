import homepage from './homepage/homepageActions';
import about from './about/aboutActions';
import archive from './archive/archiveActions';
import login from './login/loginActions';
import global from './globalActions.js';

console.log('this is the actions', global);

export const HomepageActions = homepage;
export const AboutActions    = about;
export const ArchiveActions  = archive;
export const LoginActions    = login;
export const GlobalActions   = global;
