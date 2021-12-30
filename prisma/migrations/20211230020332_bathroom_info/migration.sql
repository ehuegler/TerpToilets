-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female', 'Neutral');

-- AlterTable
ALTER TABLE "Bathrooms" ADD COLUMN     "gender" "Gender",
ADD COLUMN     "shower" BOOLEAN,
ADD COLUMN     "sinks" INTEGER,
ADD COLUMN     "stalls" INTEGER,
ADD COLUMN     "urinals" INTEGER,
ALTER COLUMN "roomnum" DROP NOT NULL;
