import { CaseTab } from "@/types";
import { useEffect, useState, useMemo } from "react";
/*import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";*/
import { useSessionContext } from "@supabase/auth-helpers-react";

const useGetCaseTab = () => {
    /*const supabase = createClient(supabaseUrl, supabaseKey);
    let { data, error } = await supabase
        .from('CaseTab')
        .select('*')
    if (!error) {
        return data as CaseTab[];
    }
    return [];*/

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [caseTabs, setCaseTabs] = useState<CaseTab[]>([]);
    const { supabaseClient } = useSessionContext();

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                let { data, error } = await supabaseClient
                    .from('CaseTab')
                    .select('*')
                if (!error) {
                    //return data as CaseTab[];
                    setCaseTabs(data as CaseTab[]);
                    setIsLoading(false);
                }
                console.log("datas size:" + (data as CaseTab[]).length)
            } catch (error) {
                setIsLoading(false);
                console.error('Error fetching data:', error);
            }
            setIsLoading(false);
        };
        fetchData();
    }, []);

    //在渲染长列表时，可以使用useMemo来优化列表元素的计算
    //useMemo的第一个参数是一个函数，该函数的返回值会被缓存。这个函数可以是任意可以返回值的表达式或函数。
    //useMemo的第二个参数是依赖项数组，表示当数组中任意一项发生变化时，useMemo需要重新计算并返回结果
    return useMemo(() => ({
        isLoading,
        caseTabs
    }), [isLoading, caseTabs]);
}
export default useGetCaseTab;