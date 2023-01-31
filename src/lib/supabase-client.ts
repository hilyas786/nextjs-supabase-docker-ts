import { createClient } from '@supabase/supabase-js';
import { Database } from '@/database.types';

const supabaseUrl = (import.meta as any).env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = (import.meta as any).env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabaseClient = createClient<Database>(supabaseUrl, supabaseKey);

supabaseClient
  .from('user_profiles')
  .select('*')
  .then(({ data }) => {});
