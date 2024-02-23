import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { Button } from "@chakra-ui/button"

//const { isOpen, onOpen, onClose } = useDisclosure()

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: String;
    description: String;
    children: React.ReactNode;
}

const ModalComponent: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    description,
    children
}) => {

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    {/* <ModalHeader>Modal Title</ModalHeader> */}
                    <ModalCloseButton />
                    <ModalBody>
                        {children}
                    </ModalBody>

                    {/* <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter> */}
                </ModalContent>
            </Modal>
        </>
    );
}

export default ModalComponent;