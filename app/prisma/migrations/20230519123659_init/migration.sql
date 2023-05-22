-- CreateTable
CREATE TABLE "Game" (
    "gameId" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "ageRating" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("gameId")
);

-- CreateTable
CREATE TABLE "Recommendation" (
    "recommendationId" SERIAL NOT NULL,
    "gamerId" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "dateRecommended" TEXT NOT NULL,

    CONSTRAINT "Recommendation_pkey" PRIMARY KEY ("recommendationId")
);

-- CreateTable
CREATE TABLE "Gamer" (
    "gamerId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "Gamer_pkey" PRIMARY KEY ("gamerId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_title_key" ON "Game"("title");
