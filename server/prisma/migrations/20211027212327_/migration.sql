/*
  Warnings:

  - You are about to drop the column `departmentId` on the `teacher` table. All the data in the column will be lost.
  - Added the required column `deptId` to the `teacher` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "teacher" DROP CONSTRAINT "teacher_departmentId_fkey";

-- AlterTable
ALTER TABLE "teacher" DROP COLUMN "departmentId",
ADD COLUMN     "deptId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "teacher" ADD CONSTRAINT "teacher_deptId_fkey" FOREIGN KEY ("deptId") REFERENCES "department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
