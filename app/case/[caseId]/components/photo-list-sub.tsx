import { ImageData } from "@/types";

interface PhotoListSubProps {
    photoData: ImageData[] | ImageData,
}

const PhotoListSub: React.FC<PhotoListSubProps> = ({
    photoData
}) => {
    if (photoData instanceof Array) {
        return (
            <div className="flex flex-row gap-4">
                {
                    photoData.map((item) => (
                        <li key={item.url}><img src={item.url} width={item.width} /></li>
                    ))
                }
            </div>
        );
    } else {
        return (
            <div>
                <img src={photoData.url} width={photoData.width} />
            </div>);
    }
}

export default PhotoListSub;