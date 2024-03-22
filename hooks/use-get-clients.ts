import { CaseType, Client, Industry } from "@/types";
import { useEffect, useState, useMemo } from "react";
import { useSessionContext } from "@supabase/auth-helpers-react";

const useGetClients = (caseTabId: number, industryId: number, typeId: number) => {

    //const [isLoading, setIsLoading] = useState<boolean>(false);
    const [clients, setCients] = useState<Client[]>([]);
    const { supabaseClient } = useSessionContext();

    console.log("caseTabId:" + caseTabId + ", industryId:" + industryId + ", typeId:" + typeId);

    useEffect(() => {
        //setIsLoading(true);
        const fetchData = async () => {
            try {
                let data: any;
                let error: any;
                if (industryId === undefined || typeId === undefined) {
                    let { data: data_, error: error_ } = await supabaseClient
                        .from('Client')
                        .select("*")
                        .eq('caseTabId', caseTabId);
                    data = data_;
                    error = error_;
                } else {
                    let { data: data_, error: error_ } = await supabaseClient
                        .from('Client')
                        .select("*")
                        .eq('caseTabId', caseTabId).eq("industryId", industryId).eq("typeId", typeId);
                    data = data_;
                    error = error_;
                }
                if (!error) {
                    setCients(data as Client[]);
                    console.log("useGetClients:" + (data as Client[]).length);
                    //setIsLoading(false);
                }
            } catch (error) {
                //setIsLoading(false);
                console.error('Error fetching data:', error);
            }
            //setIsLoading(false);
        };
        fetchData();
    }, [caseTabId, industryId, typeId]);

    //在渲染长列表时，可以使用useMemo来优化列表元素的计算
    //useMemo的第一个参数是一个函数，该函数的返回值会被缓存。这个函数可以是任意可以返回值的表达式或函数。
    //useMemo的第二个参数是依赖项数组，表示当数组中任意一项发生变化时，useMemo需要重新计算并返回结果
    return useMemo(() => ({
        clients
    }), [clients]);
}
export default useGetClients;