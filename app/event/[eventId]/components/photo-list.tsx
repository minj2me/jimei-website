import { ImageData } from "@/types";

interface PhotoListProps {
    photoList: ImageData[] | undefined,
}

const PhotoList: React.FC<PhotoListProps> = ({
    photoList
}) => {
    if (photoList === undefined) {
        return null;
    }
    //console.log("photo size:" + photoList.length);
    return (<div>
        <li className="col-span-1">
            <ul className="flex flex-col gap-4">
                {
                    photoList.map((item) => (
                        <li key={item.url}><img src={item.url} width={item.width}></img></li>
                    ))
                }
            </ul>
        </li>
    </div>);
}
export default PhotoList;