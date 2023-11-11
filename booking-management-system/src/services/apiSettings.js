import supabase from "./supabase";


export async function getSettings() {
    const { data, error } = await supabase
        .from('settings')
        .select('*').single();

    if (error) {
        console.error(error);
        throw new Error('Settings could not be loaded');
    }
    return data;


}
// settings would be like {setting: newValue}
export async function updateSetting(newSetting) {
    const { data, error } = await supabase
        .from('settings')
        .update(newSetting)
        //there is only one row in settings, it has id of 1
        .eq('id', 1)
        .single();

    if (error) {
        console.error(error);
        throw new Error('Settings could not be updated');
    }
    return data;

}

