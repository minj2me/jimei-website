
import Link from "next/link";

import Header from "@/components/header";
import Container from "@/components/ui/container";
import { MainTab } from "@/types";

const Navbar = async () => {
    //const categories = await getCategories();
    const tabs = new Array<MainTab>();
    tabs.push({id:0,name:"公司介绍"});
    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl">STORE</p>
                    </Link>
                    <Header />
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
