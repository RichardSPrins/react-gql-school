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
} from '@chakra-ui/react'
import {
  useQuery
} from '@apollo/client'
import { GET_STUDENTS } from '../graphql/queries.js'


const StudentsPage = () => {
  const { data, loading, error } = useQuery(GET_STUDENTS);

  console.log(data)

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