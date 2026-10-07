import { supabase, supabaseConfigError } from '@/lib/supabase';

export default async function TestSupabasePage() {
  if (!supabase) {
    return (
      <main className="mx-auto max-w-2xl p-8">
        <h1 className="text-2xl font-bold">Konfigurasi Supabase belum valid</h1>
        <p className="mt-3">{supabaseConfigError}</p>
      </main>
    );
  }

  const { data, count, error } = await supabase
    .from('Projects')
    .select('*')
    .order('id', { ascending: true });

  if (error) {
    console.error('Gagal menguji koneksi Supabase:', error);

    return (
      <main className="mx-auto max-w-2xl p-8">
        <h1 className="text-2xl font-bold">Query Supabase gagal</h1>
        <p className="mt-3">{error.message}</p>
        <p className="mt-2">
          Periksa apakah tabel <code>proyek</code> tersedia dan kebijakan RLS-nya
          mengizinkan pembacaan.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-2xl font-bold">Supabase berhasil terhubung</h1>
      <p className="mt-3">
        Query ke tabel <code>proyek</code> berhasil. Jumlah baris: {count ?? 0}.
      </p>
    </main>
  );
}