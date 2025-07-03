import { supabase } from "../api/supabaseClient";

export const uploadImage = async (file: File, folder = 'product-images'): Promise<string | null> => {
  const ext = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}.${ext}`;
  const filePath = `${folder}/${fileName}`;

  const { error: uploadError } = await supabase.storage.from('product-images').upload(filePath, file);
  if (uploadError) {
    console.error(' Upload error:', uploadError.message);
    return null;
  }

  const { data } = supabase.storage.from('product-images').getPublicUrl(filePath);
  return data?.publicUrl || null;
};
