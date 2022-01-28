import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Image,
  Badge,
  useDisclosure,
  useToast,
  Heading,
  Text,
  Link,
  HStack,
  Box,
} from '@chakra-ui/react'
import { HiExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
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
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader />
        <ModalBody>
          <Heading textAlign="center" marginBottom={3}>
            {project.name}
          </Heading>
          <Text marginBottom={4}>{project.description}</Text>
          <Badge marginBottom={4}>{project.type}</Badge>
          <Image src={project.image} alt={project.name} borderRadius="md" />
          <ModalFooter>
            <Link isExternal href={project.link}>
              <HStack>
                <Text>Visit site</Text>
                <HiExternalLink />
              </HStack>
            </Link>
            {project.githubLink && (
              <>
                <Box width={7} />
                <Link isExternal href={project.githubLink}>
                  <FaGithub size={20} />
                </Link>
              </>
            )}
          </ModalFooter>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ProjectModal
