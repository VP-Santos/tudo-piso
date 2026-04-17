/*
  Warnings:

  - You are about to drop the column `imagem` on the `produto` table. All the data in the column will be lost.
  - You are about to drop the column `preco` on the `produto` table. All the data in the column will be lost.
  - Added the required column `contra_indicacao` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `indicacao` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `produto` DROP COLUMN `imagem`,
    DROP COLUMN `preco`,
    ADD COLUMN `contra_indicacao` VARCHAR(191) NOT NULL,
    ADD COLUMN `indicacao` VARCHAR(191) NOT NULL;
