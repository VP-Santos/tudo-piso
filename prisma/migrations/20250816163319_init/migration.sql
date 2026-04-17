/*
  Warnings:

  - The primary key for the `categoria` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `fabricante` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `produto` DROP FOREIGN KEY `Produto_categoriaId_fkey`;

-- DropIndex
DROP INDEX `Produto_categoriaId_fkey` ON `produto`;

-- AlterTable
ALTER TABLE `categoria` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`id`, `fabricante`);

-- AlterTable
ALTER TABLE `produto` ADD COLUMN `fabricante` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_categoriaId_fabricante_fkey` FOREIGN KEY (`categoriaId`, `fabricante`) REFERENCES `Categoria`(`id`, `fabricante`) ON DELETE RESTRICT ON UPDATE CASCADE;
