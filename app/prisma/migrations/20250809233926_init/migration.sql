/*
  Warnings:

  - You are about to drop the `categorias` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `produtos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `categorias`;

-- DropTable
DROP TABLE `produtos`;

-- CreateTable
CREATE TABLE `Categoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `preco` DOUBLE NOT NULL,
    `imagemNome` VARCHAR(191) NOT NULL,
    `categoriaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_categoriaId_fkey` FOREIGN KEY (`categoriaId`) REFERENCES `Categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
