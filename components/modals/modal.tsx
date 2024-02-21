import * as Dialog from "@radix-ui/react-dialog"
import { IoMdClose } from 'react-icons/io';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: String;
    description: String;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
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
        <Dialog.Root
            open={isOpen}
            defaultOpen={isOpen}
            onOpenChange={onChange}
        >
            <Dialog.Portal>
                <Dialog.Overlay
                    className="
                    w-full
                    h-full
                    bg-neutral-600/50
                    backdrop-blur-sm 
                fixed
                inset-0
                "
                />
                <Dialog.Content
                    className="
                    fixed 
                    drop-shadow-md 
                    top-[50%] 
                    left-[50%] 
                    max-h-full 
                    h-full 
                    md:h-auto 
                    md:max-h-[85vh] 
                    w-full 
                    md:w-[90vw] 
                    md:max-w-[450px] 
                    rounded-md 
                    translate-x-[-50%] 
                    translate-y-[-50%] 
                    p-[25px] 
                    focus:outline-none
                    "
                >
                    <Dialog.Title
                        className="
                        text-gray-700
                    text-xl 
                    font-bold 
                    mb-4
                  ">
                        {title}
                    </Dialog.Title>
                    <Dialog.Description
                        className="
                        text-gray-500
                     mb-5 
                     text-sm 
                     leading-normal 
                   "
                    >
                        {description}
                    </Dialog.Description>
                    <div>
                        {children}
                    </div>
                    <Dialog.Close asChild>
                        <button
                            className="
                text-neutral-400 
                hover:text-gray
                absolute 
                top-[10px] 
                right-[10px] 
                inline-flex 
                h-[25px] 
                w-[25px] 
                appearance-none 
                items-center 
                justify-center 
                rounded-full 
                focus:outline-none
              "
                            aria-label="Close"
                        >
                            <IoMdClose />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

export default Modal;