-- CreateTable
CREATE TABLE "Pictures" (
    "id" SERIAL NOT NULL,
    "publicId" TEXT NOT NULL,
    "reviewId" INTEGER,
    "bathroomsId" INTEGER,

    CONSTRAINT "Pictures_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pictures" ADD CONSTRAINT "Pictures_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Reviews"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pictures" ADD CONSTRAINT "Pictures_bathroomsId_fkey" FOREIGN KEY ("bathroomsId") REFERENCES "Bathrooms"("id") ON DELETE SET NULL ON UPDATE CASCADE;
