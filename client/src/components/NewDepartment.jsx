import * as React from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Spinner,
  Flex,
  Alert,
  AlertIcon
} from '@chakra-ui/react'
import {
  useQuery,
  useMutation
} from '@apollo/client'
import { GET_DEPARTMENTS } from '../graphql/queries.js'
import { CREATE_DEPARTMENT } from '../graphql/mutations.js'

const NewDepartment = () => {
  const [deptState, setDeptState] = React.useState({
    name: "",
    description: "" 
  })

  const [createDepartment, {data, loading, error}] = useMutation(CREATE_DEPARTMENT, {
    refetchQueries: [
      GET_DEPARTMENTS,
      'Departments'
    ]
  })

  if (loading) return <Flex h="150px" align="center" justify="center" width="100%"><Spinner size="xl"/></Flex>;
  if (error) return `Submission error! ${error.message}`;

  const handleSubmit = async () => {
    await createDepartment({variables: {
      name: deptState.name,
      description: deptState.description
    }})
    setDeptState({
      name: "",
      description: "" 
    })
  }

  return (
    <>
      {
        data && (
          <Alert status="success">
            <AlertIcon />
            Department Successfully Created
          </Alert>
        )
      }
      {
        !data && (
          <>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input value={deptState.name} onChange={(e) => setDeptState({ ...deptState, name: e.target.value })} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea value={deptState.description} onChange={(e) => setDeptState({ ...deptState, description: e.target.value })} />
            </FormControl>
            <Button mt="4" isFullWidth colorScheme="green" onClick={handleSubmit}>Create Department</Button>
          </>
        )
      }
    </>
  )
}

export default NewDepartment