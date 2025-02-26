-- CreateTable
CREATE TABLE "cadastro" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "cadastro_pkey" PRIMARY KEY ("id")
);
