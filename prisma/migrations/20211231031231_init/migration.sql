-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female', 'Neutral', 'Family');

-- CreateTable
CREATE TABLE "Bathrooms" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "buildingId" INTEGER NOT NULL,
    "roomnum" TEXT,
    "description" TEXT,
    "gender" "Gender",
    "shower" BOOLEAN,
    "sinks" INTEGER,
    "stalls" INTEGER,
    "urinals" INTEGER,
    "averageRating" DOUBLE PRECISION,

    CONSTRAINT "Bathrooms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Buildings" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "abrev" TEXT,

    CONSTRAINT "Buildings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reviews" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bathroomId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "author" TEXT,
    "message" TEXT,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pictures" (
    "id" SERIAL NOT NULL,
    "publicId" TEXT NOT NULL,
    "reviewId" INTEGER,
    "bathroomsId" INTEGER,

    CONSTRAINT "Pictures_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Buildings_code_key" ON "Buildings"("code");

-- AddForeignKey
ALTER TABLE "Bathrooms" ADD CONSTRAINT "Bathrooms_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "Buildings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_bathroomId_fkey" FOREIGN KEY ("bathroomId") REFERENCES "Bathrooms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pictures" ADD CONSTRAINT "Pictures_bathroomsId_fkey" FOREIGN KEY ("bathroomsId") REFERENCES "Bathrooms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pictures" ADD CONSTRAINT "Pictures_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Reviews"("id") ON DELETE SET NULL ON UPDATE CASCADE;
