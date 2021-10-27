import * as React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Heading,
  Flex,
  Box,
  Text,
  VStack,
  ButtonGroup
} from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons'
import NewDepartment from './NewDepartment'
import NewTeacher from './NewTeacher'
import NewStudent from './NewStudent'

const actions = {
  base: 'BASE',
  teacher: 'TEACHER',
  dept: 'DEPT',
  student: 'STUDENT',
  course: 'COURSE'
}

const NewActionModal = () => {
  const [actionState, setActionState] = React.useState(actions.base)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const resetState = (cbs) => {
    if(cbs){
      cbs.map(cb => cb())
    }
    setActionState(actions.base)
  }
  const handleClose = () => {
    resetState()
    return onClose()
  }

  return (
    <>
      <Button
        onClick={onOpen}
        variant={'solid'}
        colorScheme={'teal'}
        size={'sm'}
        mr={4}
        leftIcon={<AddIcon />}>
        New
      </Button>

      <Modal onClose={handleClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {actionState === actions.base && <Heading size="md">What would you like to do?</Heading>}
            {actionState === actions.dept && <Heading size="md">New Department</Heading>}
            {actionState === actions.teacher && <Heading size="md">New Teacher</Heading>}
            {actionState === actions.student && <Heading size="md">New Student</Heading>}
            {actionState === actions.course && <Heading size="md">New Course</Heading>}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {actionState === actions.base && (
              <>
                <VStack width="100%" spacing="4">
                  <Button isFullWidth onClick={() => setActionState(actions.dept)}>New Department</Button>
                  <Button isFullWidth onClick={() => setActionState(actions.teacher)}>New Teacher</Button>
                  <Button isFullWidth onClick={() => setActionState(actions.student)}>New Student</Button>
                  <Button isFullWidth onClick={() => setActionState(actions.course)}>New Course</Button>
                </VStack>
              </>
            )}
            {
              actionState === actions.dept && (
                <>
                  <NewDepartment  resetState={resetState}/>
                </>
              )
            }
            {
              actionState === actions.teacher && (
                <>
                  <NewTeacher  resetState={resetState}/>
                </>
              )
            }
            {
              actionState === actions.student && (
                <>
                  <NewStudent resetState={resetState}/>
                </>
              )
            }
          </ModalBody>
          <ModalFooter>
            <ButtonGroup>
              {actionState !== actions.base && <Button onClick={() => setActionState(actions.base)}>Back</Button>}
              <Button colorScheme="red" onClick={handleClose}>Close</Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default NewActionModal