/*
  Warnings:

  - Added the required column `description` to the `Musics` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Musics" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "video_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "thumbnail" TEXT
);
INSERT INTO "new_Musics" ("id", "video_id", "title", "date", "thumbnail") SELECT "id", "video_id", "title", "date", "thumbnail" FROM "Musics";
DROP TABLE "Musics";
ALTER TABLE "new_Musics" RENAME TO "Musics";
CREATE UNIQUE INDEX "Musics.video_id_unique" ON "Musics"("video_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
