import { Worker } from "@/types";
import WorkerItem from "./worker-item";

interface WorkListProps {
    workers: Worker[],
}

const WorkerList: React.FC<WorkListProps> = ({
    workers
}) => {
    return (
        <div>
            <div className=" grid grid-cols-4 gap-[30px]">
                {
                    workers.map((item) => (
                        <WorkerItem worker={item} />
                    ))
                }
            </div>
        </div>
    );
}
export default WorkerList;