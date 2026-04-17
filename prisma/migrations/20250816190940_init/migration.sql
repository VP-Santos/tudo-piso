/*
  Warnings:

  - You are about to drop the column `categoriaId` on the `produto` table. All the data in the column will be lost.
  - You are about to drop the column `fabricante` on the `produto` table. All the data in the column will be lost.
  - You are about to drop the column `imagemNome` on the `produto` table. All the data in the column will be lost.
  - You are about to drop the `categoria` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `imagem` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linhaId` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `produto` DROP FOREIGN KEY `Produto_categoriaId_fabricante_fkey`;

-- DropIndex
DROP INDEX `Produto_categoriaId_fabricante_fkey` ON `produto`;

-- AlterTable
ALTER TABLE `produto` DROP COLUMN `categoriaId`,
    DROP COLUMN `fabricante`,
    DROP COLUMN `imagemNome`,
    ADD COLUMN `imagem` VARCHAR(191) NOT NULL,
    ADD COLUMN `linhaId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `categoria`;

-- CreateTable
CREATE TABLE `Fabricante` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Linha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `fabricanteId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Linha` ADD CONSTRAINT `Linha_fabricanteId_fkey` FOREIGN KEY (`fabricanteId`) REFERENCES `Fabricante`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_linhaId_fkey` FOREIGN KEY (`linhaId`) REFERENCES `Linha`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
