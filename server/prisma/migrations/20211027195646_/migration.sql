-- DropForeignKey
ALTER TABLE "student" DROP CONSTRAINT "student_deptId_fkey";

-- AlterTable
ALTER TABLE "student" ALTER COLUMN "deptId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_deptId_fkey" FOREIGN KEY ("deptId") REFERENCES "department"("id") ON DELETE SET NULL ON UPDATE CASCADE;
