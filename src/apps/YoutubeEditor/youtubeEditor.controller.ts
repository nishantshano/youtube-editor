
import { Request, Response } from 'express';
import { google } from 'googleapis';
import { oauth2Credentials } from '../../config/credentials.config.ts';

export const createAuth = (req: Request, res: Response) => {

    const OAuth2 = google.auth.OAuth2;

    const oauth2Client = new OAuth2(
        oauth2Credentials.client_id,
        oauth2Credentials.client_secret,
        oauth2Credentials.redirect_uris[0]
    )

    const loginLink = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: oauth2Credentials.scopes
    })

    res.render('index', { loginLink })
};