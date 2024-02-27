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
            <div className=" grid grid-cols-4 gap-y-10">
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