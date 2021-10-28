const { prisma } = require('../../prisma/db')
const { Query } = require("./query.js");
const { Mutation } = require("./mutation.js");


// A resolver is a function that's responsible for populating the data for a single field in your schema
const Student = {
  id: (parent, _args, _context, _info) => parent.id,
  email: (parent) => parent.email,
  fullName: (parent) => parent.fullName,
  enrolled: (parent) => parent.enrolled,
  department: (parent, _args) => {
    console.log(parent)
    return prisma.department.findFirst({
      where: { id: parent.deptId },
    });
  },
};

const Department = {
  id: (parent) => parent.id,
  name: (parent) => parent.name,
  description: (parent) => parent.description,
  students: (parent, _args) => {
    return prisma.department.findUnique({
        where: { id: parent.id },
      }).students();
  },
  courses: (parent, _args) => {
    return prisma.department.findUnique({
        where: { id: parent.id },
      }).courses();
  },
};

const Teacher = {
  id: (parent) => parent.id,
  email: (parent) => parent.email,
  fullName: (parent) => parent.fullName,
  courses: (parent, _args) => {
    return prisma.teacher.findUnique({
        where: { id: parent.id },
      }).courses();
  },
};

const Course = {
  id: (parent) => parent.id,
  code: (parent) => parent.code,
  title: (parent) => parent.title,
  description: (parent) => parent.description,
  teacher: (parent, _args) => {
    return prisma.course.findUnique({
        where: { id: parent.id },
      }).teacher();
  },
  department: (parent, _args) => {
    return prisma.course.findUnique({
      where: { id: parent.id },
    }).department();
  },
};

const resolvers = {
  Student,
  Department,
  Teacher,
  Course,
  Query,
  Mutation,
};

module.exports = {
  resolvers,
};
