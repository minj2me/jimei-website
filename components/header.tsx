import Link from "next/link"
import { usePathname } from "next/navigation";

const Header = () => {
    return (
        <div
            className="mx-6 flex items-center space-x-4 lg:space-x-6"
        >
        <text>
            集美(广州)工业设计有限公司
        </text>
        </div>
    )
}

export default Header;