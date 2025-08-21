
import { Request, Response } from 'express';

import { getDefaultPlaylistContent } from '../../utils/youtube.utils.ts';
import { authenticateUser } from '../../utils/auth.utils.ts';

export const getYoutubeVideos = async (req: Request, res: Response) => {
    if (!req.cookies.jwt) {
        res.redirect('/')
    }

    const isUserAuthenticated = await authenticateUser(req.cookies.jwt)

    if (!isUserAuthenticated) {
        res.redirect('/')
    }

    const playlistDefaultPlaylistContent = await getDefaultPlaylistContent();

    res.json({ ...playlistDefaultPlaylistContent })
}