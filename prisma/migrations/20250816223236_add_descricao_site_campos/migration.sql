/*
  Warnings:

  - Added the required column `fabricanteId` to the `Categoria` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `categoria` ADD COLUMN `fabricanteId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Categoria` ADD CONSTRAINT `Categoria_fabricanteId_fkey` FOREIGN KEY (`fabricanteId`) REFERENCES `Fabricante`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
