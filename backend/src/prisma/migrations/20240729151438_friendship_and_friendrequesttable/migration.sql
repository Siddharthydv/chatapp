-- CreateTable
CREATE TABLE "Friendship" (
    "id" SERIAL NOT NULL,
    "user_id1" INTEGER NOT NULL,
    "user_id2" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Friendship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FriendRequest" (
    "id" SERIAL NOT NULL,
    "requester_id" INTEGER NOT NULL,
    "requestee_id" INTEGER NOT NULL,
    "status" VARCHAR(20) NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FriendRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Friendship_user_id1_user_id2_key" ON "Friendship"("user_id1", "user_id2");

-- CreateIndex
CREATE INDEX "FriendRequest_requester_id_requestee_id_idx" ON "FriendRequest"("requester_id", "requestee_id");

-- CreateIndex
CREATE UNIQUE INDEX "FriendRequest_requester_id_requestee_id_key" ON "FriendRequest"("requester_id", "requestee_id");

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_user_id1_fkey" FOREIGN KEY ("user_id1") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_user_id2_fkey" FOREIGN KEY ("user_id2") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FriendRequest" ADD CONSTRAINT "FriendRequest_requester_id_fkey" FOREIGN KEY ("requester_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FriendRequest" ADD CONSTRAINT "FriendRequest_requestee_id_fkey" FOREIGN KEY ("requestee_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
