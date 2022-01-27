import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  useToast,
  Heading,
  Text,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import personalInformation from '../../../config/personalInformation.json'
import Project from '../../../models/Project'

const projects: Project[] = personalInformation.projects

const ProjectModal = (): JSX.Element => {
  const { isOpen } = useDisclosure({ defaultIsOpen: true })
  const projectFromParams = useParams()['project']
  const toast = useToast()
  const navigate = useNavigate()

  const project = projects.find((project) => project.id === projectFromParams)

  useEffect(() => {
    if (!projectFromParams || !project) {
      toast({
        title: 'No project found',
        description: 'The project you asked for does not exist.',
        status: 'error',
        isClosable: true,
      })
    }
  }, [projectFromParams, toast, navigate, project])

  const onClose = () => {
    navigate('/projects')
  }

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader />
        <ModalBody>
          <Heading as="h2" size="lg">
            {project.name}
          </Heading>
          <Text>{project.description}</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ProjectModal
