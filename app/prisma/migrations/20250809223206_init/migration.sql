/*
  Warnings:

  - You are about to drop the `piso` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `piso`;

-- CreateTable
CREATE TABLE `produtos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `categoria` INTEGER NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `imagemUrl` VARCHAR(191) NULL,
    `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categorias` (
    `ud` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `Categoria` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ud`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
