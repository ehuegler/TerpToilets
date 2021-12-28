/*
  Warnings:

  - You are about to drop the `Bathroom` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Review` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_bathroomId_fkey";

-- DropTable
DROP TABLE "Bathroom";

-- DropTable
DROP TABLE "Review";

-- CreateTable
CREATE TABLE "Bathrooms" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "building" TEXT NOT NULL,
    "roomnum" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Bathrooms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reviews" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bathroomId" INTEGER NOT NULL,
    "user" TEXT NOT NULL,
    "author" TEXT,
    "message" TEXT,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_bathroomId_fkey" FOREIGN KEY ("bathroomId") REFERENCES "Bathrooms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
