/*
  Warnings:

  - Added the required column `nome` to the `cadastro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cadastro" ADD COLUMN     "nome" TEXT NOT NULL;
