import { google } from 'googleapis';
import * as jwt from 'jsonwebtoken'

import { JWTSecret, oauth2Credentials } from "../config/credentials.config.ts"

export const getOAuth2Client = () => {
    const OAuth2 = google.auth.OAuth2;

    return new OAuth2(
        oauth2Credentials.client_id,
        oauth2Credentials.client_secret,
        oauth2Credentials.redirect_uris[0]
    )
}

export const signJWTToken = (token) => {
    return jwt['default'].sign(token, JWTSecret)
}