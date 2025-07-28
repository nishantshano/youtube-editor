import * as KEYS from '../credentials/keys.json' assert { type: 'json' };
import { ICREDENTIALS } from '../types/credentials.type';

const oauth2Credentials: ICREDENTIALS = {
    ...KEYS['default'].web,
    scopes: 'https://www.googleapis.com/auth/youtube.readonly'
}

const JWTSecret = 'd6f1cb826014b4f8911773f7a54efadd9b169d48c7dbbe6e1b470f645b67ae7e'

export {
    JWTSecret,
    oauth2Credentials
}