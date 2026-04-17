/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Fabricante` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Fabricante_nome_key` ON `Fabricante`(`nome`);
