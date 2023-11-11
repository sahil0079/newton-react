import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export function useDeleteCabin() {
    const queryClient = useQueryClient();

    const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
        mutationFn: deleteCabinApi,
        onSuccess: () => {
            toast.success('Cabin succesfully deleted');
            //invalidate the queries
            queryClient.invalidateQueries({
                queryKey: ['cabins'],
            })//as soon as the mutuation is successfull we want to refetch data
        },
        onError: (error) => toast.error(error.message)
    });
    return { isDeleting, deleteCabin }
}
