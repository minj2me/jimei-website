import Link from "next/link"
import Image from 'next/image'
import { usePathname } from "next/navigation";

const Header = () => {
    return (
        <div className="flex items-center">
            <div
                className=" flex justify-center items-center h-[80px] w-full "
            >
                <Image src={`/image/jm_logo.png`} alt="" width="20" height="20" />
                <text className=" ml-[11px]">
                    集美(广州)工业设计有限公司
                </text>
            </div>
            <div className=" absolute right-[120px] flex items-center justify-center w-[53px] h-[35px] bg-black rounded-3xl">
                <Image src={`/image/menu.png`} alt="" width="15" height="12" />
            </div>
        </div>
    )
}

export default Header;