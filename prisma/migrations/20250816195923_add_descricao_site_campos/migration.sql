/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Linha` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `categoria` ADD COLUMN `descricao` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `fabricante` ADD COLUMN `descricao` VARCHAR(191) NULL,
    ADD COLUMN `site` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Linha_nome_key` ON `Linha`(`nome`);
