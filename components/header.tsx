import Link from "next/link"
import Image from 'next/image'
import { usePathname } from "next/navigation";

const Header = () => {
    return (
        <div
            className=" flex justify-center items-center h-[80px] w-full "
        >
            <Image src={`/image/jm_logo.png`} alt="" width="20" height="20" />
            <text className=" ml-[11px]">
                集美(广州)工业设计有限公司
            </text>
        </div>
    )
}

export default Header;