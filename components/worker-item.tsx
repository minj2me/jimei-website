import { Worker } from "@/types";
import { Image } from "@chakra-ui/react";

interface WorkerItemProps {
    worker: Worker,
}

const WorkerItem: React.FC<WorkerItemProps> = ({
    worker
}) => {
    return (
        <div className=" flex flex-col hover:cursor-pointer items-center">
            <Image src={worker.mainImage.url} width={worker.mainImage.width}/>
            <p className=" mt-[10px] text-[16px] text-center">{worker.name}</p>
            <p className=" text-[#999999] mt-[6px] text-[16px] text-center">{worker.desc}</p>
        </div>
    );
}
export default WorkerItem;