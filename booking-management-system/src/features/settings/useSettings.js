import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";


export function useSettings() {

    const { isLoading, data: settings, error } = useQuery({
        queryKey: ['settings'], //identify the data
        queryFn: getSettings,
    });

    return { isLoading, settings, error };
}
