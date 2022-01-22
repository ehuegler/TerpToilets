/*
  Warnings:

  - The `shower` column on the `Bathrooms` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Bathrooms" DROP COLUMN "shower",
ADD COLUMN     "shower" INTEGER;
