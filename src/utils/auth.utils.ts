import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
// import * as jwt from 'jsonwebtoken'

// import { JWTSecret, oauth2Credentials } from "../config/credentials.config.ts"
import { GOOGLE_CERT, oauth2Credentials } from "../config/credentials.config.ts";

let oauth2Client!: OAuth2Client

export const getOAuth2Client = () => {

    if (oauth2Client) {
        return oauth2Client;
    }

    const OAuth2 = google.auth.OAuth2;
    const newOAuth2Client = new OAuth2(
        oauth2Credentials?.client_id,
        oauth2Credentials?.client_secret,
        oauth2Credentials?.redirect_uris[0]
    )

    oauth2Client = newOAuth2Client;
    return oauth2Client;
}

export const authenticateUser = async (token) => {
    if (token?.id_token) {
        const oauth2Client = getOAuth2Client();
        const verifiedUser = await oauth2Client.verifySignedJwtWithCertsAsync(token.id_token, GOOGLE_CERT);

        if (!oauth2Client.credentials.access_token) {
            oauth2Client.setCredentials(token);
        }

        return verifiedUser;
    }

    return null;
}


// export const signJWTToken = (token) => {
//     return jwt['default'].sign(token, JWTSecret)
// }