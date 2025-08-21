
import { Request, Response } from 'express';

import { oauth2Credentials } from '../../config/credentials.config.ts';
import { getOAuth2Client } from '../../utils/auth.utils.ts';

export const createAuth = (req: Request, res: Response) => {
    const oauth2Client = getOAuth2Client();
    const loginLink = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: oauth2Credentials.scopes
    })

    res.render('index', { loginLink })
};

export const login = (req: Request, res: Response) => {
    const oauth2Client = getOAuth2Client();

    if (req.query.error) {
        return res.redirect('/');
    } else {
        const code = Array.isArray(req.query.code) ? req.query.code[0] : req.query.code;

        if (typeof code !== 'string') {
            return res.redirect('/');
        }

        oauth2Client.getToken(code, (err, token) => {
            if (err) {
                return res.redirect('/');
            }

            res.cookie('jwt', token)
            return res.redirect('/yt/subscription-list');
        });
    }
}