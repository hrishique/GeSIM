-- CreateTable
CREATE TABLE "TypeReferenceGroup" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TypeReferenceGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeReference" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "sortOrder" INTEGER,
    "groupId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TypeReference_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TypeReferenceGroup_code_key" ON "TypeReferenceGroup"("code");

-- AddForeignKey
ALTER TABLE "TypeReference" ADD CONSTRAINT "TypeReference_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "TypeReferenceGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
