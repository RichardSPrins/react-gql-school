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
import {GET_STUDENTS} from '../graphql/queries.js'


const StudentsPage = () => {
  const {data, loading, error} = useQuery(GET_STUDENTS);

  console.log(data)

  return (
    <>
      <Container mt="6" maxW="8xl">
        <Heading>Students</Heading>
      </Container>
    </>
  )
}

export default StudentsPage