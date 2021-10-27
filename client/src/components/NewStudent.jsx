import * as React from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Select,
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
import { REGISTER_STUDENT } from '../graphql/mutations.js'


const NewStudent = () => {
  const [studentState, setStudentState] = React.useState({
    email: "",
    fullName: "",
    deptId: ""
  })
  const { data } = useQuery(GET_DEPARTMENTS);
  const [registerStudent, { data: newStudentMutationData, loading: newStudentLoading, error: newStudentError }] = useMutation(REGISTER_STUDENT, {
    refetchQueries: [
      GET_DEPARTMENTS,
      'Departments'
    ]
  })

  const { email, fullName, deptId } = studentState

  if (newStudentLoading) return <Flex h="150px" align="center" justify="center" width="100%"><Spinner size="xl" /></Flex>;
  if (newStudentError) return `Submission error! ${newStudentError.message}`;

  const handleSubmit = async () => {
    await registerStudent({
      variables: {
        email,
        fullName,
        deptId: Number(deptId)
      }
    })
    setStudentState({
      email: "",
      fullName: "",
      deptId: ""
    })
  }
  return (
    <>
      {
        newStudentMutationData && (
          <Alert status="success">
            <AlertIcon />
            Student Successfully Added
          </Alert>
        )
      }
      {!newStudentMutationData && (
        <>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input value={email} onChange={(e) => setStudentState({ ...studentState, email: e.target.value })} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Full Name</FormLabel>
            <Input value={fullName} onChange={(e) => setStudentState({ ...studentState, fullName: e.target.value })} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Department</FormLabel>
            <Select placeholder={"Select Department"}>
              {data?.departments.map(dept => {
                return <option onClick={() => setStudentState({ ...studentState, deptId: dept.id })} value={dept.id}>{dept.name}</option>
              })}
            </Select>
          </FormControl>
          <Button mt="4" isFullWidth colorScheme="green" onClick={handleSubmit}>Register Student</Button>
        </>
      )
      }
    </>
  )
}

export default NewStudent