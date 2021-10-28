import {gql} from '@apollo/client'

export const REGISTER_STUDENT = gql`
  mutation RegisterStudent($email: String!, $fullName: String!, $deptId: Int!) {
    registerStudent(email: $email, fullName: $fullName, deptId: $deptId) {
      email
      fullName
    }
  }
`

export const ENROLL_STUDENT = gql`
  mutation EnrollStudentMutation($enrollStudentId: ID!) {
    enrollStudent(id: $enrollStudentId) {
      id
      fullName
    }
  }
`

export const CREATE_DEPARTMENT = gql`
  mutation CreateDept($name: String!, $description: String) {
    createDept(name: $name, description: $description) {
      name
      description
    }
  }
`