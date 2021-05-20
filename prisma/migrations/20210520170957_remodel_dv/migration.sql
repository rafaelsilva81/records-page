/*
  Warnings:

  - You are about to drop the column `description` on the `Music` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Music" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "video_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "thumbnail" TEXT
);
INSERT INTO "new_Music" ("id", "video_id", "title", "date", "thumbnail") SELECT "id", "video_id", "title", "date", "thumbnail" FROM "Music";
DROP TABLE "Music";
ALTER TABLE "new_Music" RENAME TO "Music";
CREATE UNIQUE INDEX "Music.video_id_unique" ON "Music"("video_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
