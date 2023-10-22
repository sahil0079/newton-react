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