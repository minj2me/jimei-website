import { Industry } from "@/types";
import { useEffect, useState, useMemo } from "react";
import { useSessionContext } from "@supabase/auth-helpers-react";

const useGetIndustrys = (caseTabId: number) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [industrys, setIndustrys] = useState<Industry[]>([]);
    const { supabaseClient } = useSessionContext();

    console.log("caseTabId:"+caseTabId);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                let { data, error } = await supabaseClient
                    .from('Industry')
                    .select("*")
                    .eq('caseTabId', caseTabId);
                if (!error) {
                    setIndustrys(data as Industry[]);
                    console.log("useGetIndustrys:"+(data as Industry[]).length);
                    setIsLoading(false);
                }
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
        industrys
    }), [isLoading, industrys]);
}
export default useGetIndustrys;