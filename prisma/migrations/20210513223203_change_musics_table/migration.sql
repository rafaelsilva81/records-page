/*
  Warnings:

  - The primary key for the `Musics` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Musics` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Musics" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "video_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "thumbnail" TEXT
);
INSERT INTO "new_Musics" ("id", "video_id", "title", "date", "thumbnail") SELECT "id", "video_id", "title", "date", "thumbnail" FROM "Musics";
DROP TABLE "Musics";
ALTER TABLE "new_Musics" RENAME TO "Musics";
CREATE UNIQUE INDEX "Musics.video_id_unique" ON "Musics"("video_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
