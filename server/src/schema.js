const { gql } = require("apollo-server");

// Creating GraphQL schema for data types and mutations for modifying data
const typeDefs = gql`
  type Student {
    id: ID!
    email: String!
    fullName: String!
    department: Department!
    enrolled: Boolean
    updatedAt: String
    createdAt: String
  }

  type Department {
    id: ID!
    name: String!
    description: String
    students: [Student]
    courses: [Course]
    teachers: [Teacher]
    updatedAt: String
    createdAt: String
  }

  type Teacher {
    id: ID!
    email: String!
    fullName: String!
    courses: [Course]
    type: TeacherType
    updatedAt: String
    createdAt: String
  }

  type Course {
    id: ID!
    code: String!
    title: String!
    description: String
    teacher: Teacher
    department: Department
    updatedAt: String
    createdAt: String
  }

  input CreateTeacherInput {
    email: String!
    fullName: String!
    courses: [CreateCourseWithoutTeacherInput!]
  }

    input CreateCourseWithoutTeacherInput {
    code: String!
    title: String!
    description: String
  }

  type Mutation {
    registerStudent(email: String!, fullName: String!, deptId: Int!): Student!
    enrollStudent(id: ID!): Student
    createTeacher(data: CreateTeacherInput!): Teacher!
    createCourse(code: String!, title: String!, teacherEmail: String): Course!
    createDept(name: String!, description: String): Department!
  }

  enum TeacherType {
    FULLTIME
    PARTTIME
  }

  type Query {
    students: [Student]
    departments: [Department]
    teachers: [Teacher]
    courses: [Course]
    enrollment: [Student]
    student(id: ID!): Student
    department(id: ID!): Department
    course(id: ID!): Course
    teacher(id: ID!): Teacher
  }
`

module.exports = {
  typeDefs
}