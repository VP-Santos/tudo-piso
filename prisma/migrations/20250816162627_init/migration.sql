/*
  Warnings:

  - Added the required column `fabricante` to the `Categoria` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `categoria` ADD COLUMN `fabricante` VARCHAR(191) NOT NULL,
    MODIFY `id` INTEGER NOT NULL;
