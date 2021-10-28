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
import {
  useQuery,
  useMutation
} from '@apollo/client'
import { GET_COURSES } from '../graphql/queries.js'
import { } from '../graphql/mutations.js'

const CoursesPage = () => {
  const { data, loading, error } = useQuery(GET_COURSES);

  console.log(data)

  return (
    <>
      <Container mt="6" maxW="8xl">
        <Heading>Courses</Heading>
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
                  <Th>Title</Th>
                  <Th>Code</Th>
                  <Th>Department</Th>
                  <Th>Teacher</Th>
                  <Th>Students</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.courses.map(el => {
                  return (
                    <Tr>
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

export default CoursesPage