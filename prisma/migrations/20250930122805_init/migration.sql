-- CreateTable
CREATE TABLE "public"."recruitments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "usn" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "domains" TEXT[],
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "recruitments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "recruitments_usn_key" ON "public"."recruitments"("usn");

-- CreateIndex
CREATE INDEX "recruitments_email_idx" ON "public"."recruitments"("email");

-- CreateIndex
CREATE INDEX "recruitments_usn_idx" ON "public"."recruitments"("usn");
