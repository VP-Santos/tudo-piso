/*
  Warnings:

  - You are about to drop the column `contra_indicacao` on the `produto` table. All the data in the column will be lost.
  - You are about to drop the column `indicacao` on the `produto` table. All the data in the column will be lost.
  - Added the required column `categoriaId` to the `Linha` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoriaId` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fabricanteId` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `produto` DROP FOREIGN KEY `Produto_linhaId_fkey`;

-- DropIndex
DROP INDEX `Produto_linhaId_fkey` ON `produto`;

-- AlterTable
ALTER TABLE `linha` ADD COLUMN `categoriaId` INTEGER NOT NULL,
    ADD COLUMN `descricao` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `produto` DROP COLUMN `contra_indicacao`,
    DROP COLUMN `indicacao`,
    ADD COLUMN `categoriaId` INTEGER NOT NULL,
    ADD COLUMN `codigo` VARCHAR(191) NULL,
    ADD COLUMN `comprimentoMm` DOUBLE NULL,
    ADD COLUMN `cor` VARCHAR(191) NULL,
    ADD COLUMN `espessuraMm` DOUBLE NULL,
    ADD COLUMN `fabricanteId` INTEGER NOT NULL,
    ADD COLUMN `imagemUrl` VARCHAR(191) NULL,
    ADD COLUMN `larguraMm` DOUBLE NULL,
    MODIFY `descricao` VARCHAR(191) NULL,
    MODIFY `linhaId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Categoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Categoria_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Linha` ADD CONSTRAINT `Linha_categoriaId_fkey` FOREIGN KEY (`categoriaId`) REFERENCES `Categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_categoriaId_fkey` FOREIGN KEY (`categoriaId`) REFERENCES `Categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_fabricanteId_fkey` FOREIGN KEY (`fabricanteId`) REFERENCES `Fabricante`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_linhaId_fkey` FOREIGN KEY (`linhaId`) REFERENCES `Linha`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
