import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

import { getOAuth2Client } from './auth.utils.ts';
import { YOUTUBE_CHANNEL_ID } from '../config/youtube.config.ts';

const oauth2Client = getOAuth2Client();
let youtubeClient: any
let defaultPlayListID: string;

export const getYoutubeClient = (oauth2Client: OAuth2Client) => {

    if (youtubeClient) {
        return youtubeClient
    }

    const newYoutubeClient = google.youtube({
        version: 'v3',
        auth: oauth2Client,
    });

    youtubeClient = newYoutubeClient;

    return youtubeClient
}

export const getDefaultPlaylistID = async () => {

    if (defaultPlayListID) {
        return defaultPlayListID;
    }

    const youtubeClient = getYoutubeClient(oauth2Client);
    const res = await youtubeClient.channels.list({
        part: ['contentDetails'],
        id: [YOUTUBE_CHANNEL_ID],
    });

    defaultPlayListID = res.data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;;

    return defaultPlayListID
}

export const getDefaultPlaylistContent = async () => {
    const uploadsPlaylistId = await getDefaultPlaylistID();

    const videos: any[] = [];
    let nextPageToken: string | null | undefined = null;

    do {
        const playlistItemsResponse = await youtubeClient.playlistItems.list({
            part: ['snippet', 'contentDetails'],
            playlistId: uploadsPlaylistId,
            maxResults: 50,
            pageToken: nextPageToken || undefined,
        });


        videos.push(...(playlistItemsResponse.data.items || []));

        nextPageToken = playlistItemsResponse.data.nextPageToken;

    } while (nextPageToken);

    return videos.map(item => ({
        videoId: item.contentDetails.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: item.snippet.publishedAt,
        thumbnailUrl: item.snippet.thumbnails.high?.url,
    }));
}