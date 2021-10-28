import * as React from 'react-router';
import {
  Heading,
  Container,
  Text,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Button
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  useQuery,
  useMutation
} from '@apollo/client'
import { GET_STUDENTS } from '../graphql/queries.js'
import { DELETE_STUDENT, ENROLL_STUDENT, REVOKE_STUDENT } from '../graphql/mutations.js'

const ActionsButton = ({ studentId }) => {
  const [enrollStudent, { enrollData, enrollLoading, enrollError }] = useMutation(ENROLL_STUDENT, {
    refetchQueries: [
      GET_STUDENTS,
      'Students'
    ]
  })
  const [revokeStudent, { revokeData, revokeLoading, revokeError }] = useMutation(REVOKE_STUDENT, {
    refetchQueries: [
      GET_STUDENTS,
      'Students'
    ]
  })
  const [deleteStudent, { deleteData, deleteLoading, deleteError }] = useMutation(DELETE_STUDENT, {
    refetchQueries: [
      GET_STUDENTS,
      'Students'
    ]
  })
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem color="green" onClick={() => enrollStudent({ variables: { enrollStudentId: studentId } })}>Enroll</MenuItem>
        <MenuItem color="orange" onClick={() => revokeStudent({ variables: { revokeStudentId: studentId } })}>Revoke</MenuItem>
        <MenuItem color="red" onClick={() => deleteStudent({ variables: { deleteStudentId: studentId } })}>Delete</MenuItem>
      </MenuList>
    </Menu>
  )
}


const StudentsPage = () => {
  const { data, loading, error } = useQuery(GET_STUDENTS);

  return (
    <>
      <Container mt="6" maxW="8xl">
        <Heading>Students</Heading>
        {loading && (
          <Text>Loading...🤔</Text>
        )}
        {error && (
          <Text>Something Happened... 😒</Text>
        )}
        {data && (
          <Box overflowX="scroll" width="100%" mt="8">
            <Table>
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Full Name</Th>
                  <Th>Email</Th>
                  <Th>Enrolled</Th>
                  <Th>Department</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.students.map(el => {
                  return (
                    <Tr>
                      <Td>{el.id}</Td>
                      <Td>{el.fullName}</Td>
                      <Td>{el.email}</Td>
                      <Td>{el.enrolled ? "Yes" : "No"}</Td>
                      <Td>{el.department?.name}</Td>
                      <Td><ActionsButton studentId={el.id} /></Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </Box>
        )}
      </Container>
    </>
  )
}

export default StudentsPage