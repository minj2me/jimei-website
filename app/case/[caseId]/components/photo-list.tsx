import { ImageData } from "@/types";
import PhotoListSub from "./photo-list-sub";

interface PhotoListProps {
    photoList: ImageData[] | undefined,
}

/**
 * 案例的PhotoList, 这个PhotoList里可以再有list,在遍历时如果发现是list，就横向展示list里的图片
 */
const PhotoList: React.FC<PhotoListProps> = ({
    photoList
}) => {
    if (photoList === undefined) {
        return null;
    }
    console.log("photo size:" + photoList.length);
    return (<div>
        <li className="col-span-1">
            <ul className="flex flex-col gap-4">
                {
                    photoList.map((item) => (
                        // <li key={item.url}><img src={item.url} width={item.width}></img></li>
                        <PhotoListSub photoData={item}/>
                    ))
                }
            </ul>
        </li>
    </div>);
}
export default PhotoList;