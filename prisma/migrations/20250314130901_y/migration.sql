-- CreateTable
CREATE TABLE "livro" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT,
    "autor" TEXT NOT NULL,
    "editora" TEXT NOT NULL,

    CONSTRAINT "livro_pkey" PRIMARY KEY ("id")
);
