-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "devicePublicKey" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "MpcKeyShare" (
    "id" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "keyShare" TEXT NOT NULL,
    "address" TEXT,
    "userId" TEXT NOT NULL,
    "userDevicePublicKey" TEXT NOT NULL,

    CONSTRAINT "MpcKeyShare_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccountAddressToTatumId" (
    "accountAddress" TEXT NOT NULL,
    "tatumId" TEXT NOT NULL,

    CONSTRAINT "AccountAddressToTatumId_pkey" PRIMARY KEY ("accountAddress")
);

-- CreateTable
CREATE TABLE "CircleAccount" (
    "userId" TEXT NOT NULL,
    "userDevicePublicKey" TEXT NOT NULL,
    "id" TEXT NOT NULL,

    CONSTRAINT "CircleAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CircleCard" (
    "accountId" TEXT NOT NULL,
    "cardId" TEXT NOT NULL,

    CONSTRAINT "CircleCard_pkey" PRIMARY KEY ("cardId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_devicePublicKey_key" ON "User"("id", "devicePublicKey");

-- CreateIndex
CREATE UNIQUE INDEX "MpcKeyShare_userId_path_key" ON "MpcKeyShare"("userId", "path");

-- CreateIndex
CREATE UNIQUE INDEX "CircleAccount_userId_userDevicePublicKey_key" ON "CircleAccount"("userId", "userDevicePublicKey");

-- AddForeignKey
ALTER TABLE "MpcKeyShare" ADD CONSTRAINT "MpcKeyShare_userId_userDevicePublicKey_fkey" FOREIGN KEY ("userId", "userDevicePublicKey") REFERENCES "User"("id", "devicePublicKey") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CircleAccount" ADD CONSTRAINT "CircleAccount_userId_userDevicePublicKey_fkey" FOREIGN KEY ("userId", "userDevicePublicKey") REFERENCES "User"("id", "devicePublicKey") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CircleCard" ADD CONSTRAINT "CircleCard_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "CircleAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
