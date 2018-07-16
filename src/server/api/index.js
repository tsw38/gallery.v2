import archiveEnd from './endpoints/archive';
import imagesEnd from './endpoints/images';
import loginEnd from './endpoints/login';
import galleryEnd from './endpoints/gallery';
import sitemapEnd from './endpoints/sitemap';
import authenticationEnd from './endpoints/authentication';
import authenticatorHelper from './endpoints/authenticator';

export const archiveEndpoint        = archiveEnd;
export const imagesEndpoint         = imagesEnd;
export const loginEndpoint          = loginEnd;
export const galleryEndpoint        = galleryEnd;
export const sitemapEndpoint        = sitemapEnd;
export const authenticationEndpoint = authenticationEnd;
export const authenticate           = authenticatorHelper;
