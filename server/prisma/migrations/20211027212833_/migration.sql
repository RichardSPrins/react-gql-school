/*
  Warnings:

  - You are about to drop the column `deptId` on the `teacher` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "teacher" DROP CONSTRAINT "teacher_deptId_fkey";

-- AlterTable
ALTER TABLE "teacher" DROP COLUMN "deptId";
