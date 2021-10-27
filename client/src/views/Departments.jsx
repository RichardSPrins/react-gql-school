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
import {GET_DEPARTMENTS} from '../graphql/queries.js'

const DepartmentsPage = () => {
  const {data, loading, error} = useQuery(GET_DEPARTMENTS);

  return (
    <>
      <Container mt="6" maxW="8xl">
        <Heading>Departments</Heading>
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
                  <Th>Name</Th>
                  <Th>Description</Th>
                  <Th isNumeric>Courses</Th>
                  <Th isNumeric>Students</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.departments.map(el => {
                  return (
                    <Tr>
                      <Td>{el.id}</Td>
                      <Td>{el.name}</Td>
                      <Td>{el.description}</Td>
                      <Td isNumeric>{el.courses?.length}</Td>
                      <Td isNumeric>{el.students?.length}</Td>
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

export default DepartmentsPage