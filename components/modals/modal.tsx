
import * as Dialog from "@radix-ui/react-dialog";
import { IoMdCloseCircle } from 'react-icons/io';
import { cn } from "../../lib/utils";

interface ModalProps {
    isOpen: boolean;
    isFullScreen: boolean;
    onClose: () => void;
    title: String;
    description: String;
    children: React.ReactNode;
    childrenBg: string;
}

const ModalComponent: React.FC<ModalProps> = ({
    isOpen,
    isFullScreen,
    onClose,
    title,
    description,
    children,
    childrenBg
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
                <div
                    //setting zindex to avoid this lauout under some layout
                    style={{ zIndex: 2147483647, position: "absolute", inset: 0 }}
                >
                    <Dialog.Overlay
                        className="
                    bg-neutral-600/50
                    backdrop-blur-sm 
                fixed
                inset-0
                "
                    />
                    <Dialog.Content
                        className={cn(`fixed 
                        drop-shadow-md 
                        top-[50%] 
                        left-[50%] 
                        max-h-full 
                        h-full 
                        w-full 
                        translate-x-[-50%] 
                        translate-y-[-50%] 
                        rounded-md 
                        focus:outline-none`, childrenBg, !isFullScreen && "p-[25px] md:max-h-[85vh] md:h-auto md:w-[90vw] md:max-w-[450px] ")}
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
                        <div className={cn(isFullScreen && `h-full`)}>
                            {children}
                        </div>
                        <Dialog.Close asChild>
                            <button
                                className="
                text-neutral-400 
                hover:text-gray
                absolute 
                top-[50px] 
                right-[50px] 
                inline-flex 
                h-[55px] 
                w-[55px] 
                appearance-none 
                items-center 
                justify-center 
                rounded-full 
                focus:outline-none
              "
                            >
                                <IoMdCloseCircle width={"50px"} height={"50px"} />
                            </button>
                        </Dialog.Close>
                    </Dialog.Content>
                </div>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

export default ModalComponent;