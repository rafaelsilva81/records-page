/*
  Warnings:

  - You are about to drop the `Musics` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Musics";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Music" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "video_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "thumbnail" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Music.video_id_unique" ON "Music"("video_id");
