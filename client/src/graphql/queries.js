import { gql } from '@apollo/client'

export const GET_DEPARTMENTS = gql`
  query Departments {
    departments {
      id
      name
      description
      teachers {
        id
      }
      courses {
        id
      }
      students {
        id
      }
    }
  }
`
export const GET_STUDENTS = gql`
  query Students {
    students {
      id
      fullName
    }
  }
`
export const GET_TEACHERS = gql`
  query Teachers {
    teachers {
      id
      name
      description
    }
  }
`
export const GET_COURSES = gql`
  query Courses {
    courses {
      id
      name
      description
    }
  }
`