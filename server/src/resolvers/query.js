const { prisma } = require("../../prisma/db.js");

const Query = {
  enrollment: (_parent, _args) => {
    return prisma.student.findMany({
      where: { enrolled: true },
    });
  },
  student: (_parent, args) => {
    return prisma.student.findFirst({
      where: { id: Number(args.id) },
    });
  },

  students: (_parent, _args) => {
    return prisma.student.findMany({});
  },

  departments: (_parent, _args) => {
    return prisma.department.findMany({});
  },

  department: (_parent, args) => {
    return prisma.department.findFirst({
      where: { id: Number(args.id) },
    });
  },

  courses: (_parent, _args) => {
    return prisma.course.findMany({});
  },

  course: (_parent, args) => {
    return prisma.course.findFirst({
      where: { id: Number(args.id) },
    });
  },

  teachers: (_parent, _args) => {
    return prisma.teacher.findMany({});
  },

  teacher: (_parent, args) => {
    return prisma.teacher.findFirst({
      where: { id: Number(args.id) },
    });
  },
};

module.exports = {
  Query
}