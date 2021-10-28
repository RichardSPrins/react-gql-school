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
  mutation EnrollStudent($enrollStudentId: ID!) {
    enrollStudent(id: $enrollStudentId) {
      id
      fullName
    }
  }
`

export const REVOKE_STUDENT = gql`
  mutation RevokeStudent($revokeStudentId: ID!) {
    revokeStudent(id: $revokeStudentId) {
      id
    }
  }
`

export const DELETE_STUDENT = gql`
  mutation DeleteStudent($deleteStudentId: ID!) {
    deleteStudent(id: $deleteStudentId) {
      id
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