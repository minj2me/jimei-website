import { Case } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/cases`;

const getCase = async (id: string): Promise<Case> => {
    const res = await fetch(`${URL}/${id}`);
    return res.json();
}

export default getCase;