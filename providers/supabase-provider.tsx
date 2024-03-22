"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

interface SupabaseProviderProps {
    children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupabaseProviderProps> = (
    { children }
) => {
    const [supabaseClient] = useState(() => createClientComponentClient({ supabaseKey, supabaseUrl }));
    return (
        <SessionContextProvider supabaseClient={supabaseClient}>
            {children}
        </SessionContextProvider>
    )
}

export default SupabaseProvider;