import { google } from 'googleapis';
import { GOOGLE_CERT, oauth2Credentials } from "../config/credentials.config.ts";

let oauth2Client!: any

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