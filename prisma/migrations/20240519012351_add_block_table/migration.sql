-- CreateTable
CREATE TABLE "Block" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "hierarchyId" TEXT NOT NULL,
    "name" TEXT,
    "blockTypeId" TEXT NOT NULL,

    CONSTRAINT "Block_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlockType" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "BlockType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Block_hierarchyId_key" ON "Block"("hierarchyId");

-- AddForeignKey
ALTER TABLE "Block" ADD CONSTRAINT "Block_blockTypeId_fkey" FOREIGN KEY ("blockTypeId") REFERENCES "BlockType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
