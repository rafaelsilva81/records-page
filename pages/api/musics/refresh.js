import { google } from "googleapis";
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient();

addData = (youtube, nextPageToken = "") => {
  //TODO
}

export default async (req, res) => {
  if (req.method == "GET") {
    const youtube = google.youtube({
      version: "v3",
      auth: process.env.YOUTUBE_API_KEY,
    });

    const data = await youtube.search.list({
      part: "snippet",
      channelId: process.env.CHANNEL_ID,
      maxResuls: 50,
      order: "date",
    });

    return res.status(200).json(data.data);
  } else {
    res.status(405).json({
      err: "Method not Allowed",
    });
  }
};
