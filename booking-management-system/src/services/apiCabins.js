import supabase from "./supabase";


export async function getCabins() {
    //query the supabase client

    let { data, error } = await supabase.from('cabins').select('*');

    if (error) {
        console.error(error);
        throw new Error('Cabins could not be loaded');
    }
    return data;
}

export async function deleteCabin(id) {
    //query the supase client

    const { data, error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id);
    if (error) {
        console.error(error);
        throw new Error('Cabins could not be loaded');
    }
    return data;

}