-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Musics" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "video_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "thumbnail" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "User.username_unique" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Musics.video_id_unique" ON "Musics"("video_id");
