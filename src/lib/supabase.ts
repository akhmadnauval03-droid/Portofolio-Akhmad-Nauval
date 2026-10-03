import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

export const supabaseConfigError =
  !supabaseUrl || !supabaseAnonKey
    ? 'NEXT_PUBLIC_SUPABASE_URL dan NEXT_PUBLIC_SUPABASE_ANON_KEY harus diisi di .env.local.'
    : /\/rest\/v1\/?$/i.test(supabaseUrl)
      ? 'NEXT_PUBLIC_SUPABASE_URL harus berupa URL dasar project, bukan URL endpoint /rest/v1/.'
      : null;

export const supabase =
  !supabaseConfigError && supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;