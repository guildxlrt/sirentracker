/*
  Warnings:

  - You are about to drop the column `user_credential` on the `Artist` table. All the data in the column will be lost.
  - You are about to drop the column `user_credential` on the `Fan` table. All the data in the column will be lost.
  - Added the required column `user_auth_id` to the `Artist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_auth_id` to the `Fan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Artist" DROP CONSTRAINT "Artist_user_credential_fkey";

-- DropForeignKey
ALTER TABLE "Fan" DROP CONSTRAINT "Fan_user_credential_fkey";

-- AlterTable
ALTER TABLE "Artist" DROP COLUMN "user_credential",
ADD COLUMN     "user_auth_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Fan" DROP COLUMN "user_credential",
ADD COLUMN     "user_auth_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Artist" ADD CONSTRAINT "Artist_user_auth_id_fkey" FOREIGN KEY ("user_auth_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fan" ADD CONSTRAINT "Fan_user_auth_id_fkey" FOREIGN KEY ("user_auth_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
