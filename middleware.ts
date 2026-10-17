// import { createServerClient } from '@supabase/ssr';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// export async function middleware(request: NextRequest) {
//   let supabaseResponse = NextResponse.next({ request });
//   const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return request.cookies.getAll();
//         },
//         setAll(cookiesToSet) {
//           cookiesToSet.forEach(({ name, value }) =>
//             request.cookies.set(name, value)
//           );
//           supabaseResponse = NextResponse.next({ request });
//           cookiesToSet.forEach(({ name, value, options }) =>
//             supabaseResponse.cookies.set(name, value, options)
//           );
//         },
//       },
//     }
//   );
//   const { data: { user } } = await supabase.auth.getUser();
//   const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');
//   const isLoginPage = request.nextUrl.pathname === '/admin/login';
//   if (isAdminRoute && !isLoginPage && !user) {
//     return NextResponse.redirect(new URL('/admin/login', request.url));
//   }
//   if (isLoginPage && user) {
//     return NextResponse.redirect(new URL('/admin/proyek', request.url));
//   }
//   return supabaseResponse;
// }
// export const config = {
//   matcher: ['/admin/:path*'],
// };

// import { createServerClient } from '@supabase/ssr';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export async function middleware(request: NextRequest) {
//   let supabaseResponse = NextResponse.next({ request });
//   const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return request.cookies.getAll();
//         },
//         setAll(cookiesToSet) {
//           cookiesToSet.forEach(({ name, value }) =>
//             request.cookies.set(name, value)
//           );
//           supabaseResponse = NextResponse.next({ request });
//           cookiesToSet.forEach(({ name, value, options }) =>
//             supabaseResponse.cookies.set(name, value, options)
//           );
//         },
//       },
//     }
//   );

//   const { data: { user } } = await supabase.auth.getUser();
//   const pathname = request.nextUrl.pathname;

//   const isAdminRoute = pathname.startsWith('/admin');
  
//   // Definisikan path login rahasia Anda
//   const secretLoginPath = '/admin/login/Nauval';
//   const isLoginPage = pathname === secretLoginPath;

//   // 1. Jika mencoba akses /admin/login biasa (tanpa "Nauval"), arahkan ke 404 (atau biarkan rewrite ke not-found)
//   if (pathname === '/admin/login' || pathname.startsWith('/admin/login/')) {
//     if (!isLoginPage) {
//       // Mengarahkan ke halaman not-found bawaan Next.js
//       return NextResponse.rewrite(new URL('/404', request.url));
//     }
//   }

//   // 2. Proteksi rute admin utama jika belum login
//   if (isAdminRoute && !isLoginPage && !user) {
//     return NextResponse.redirect(new URL(secretLoginPath, request.url));
//   }

//   // 3. Jika sudah login dan mencoba ke halaman login rahasia, lempar ke dashboard proyek
//   if (isLoginPage && user) {
//     return NextResponse.redirect(new URL('/admin/proyek', request.url));
//   }

//   return supabaseResponse;
// }

// export const config = {
//   matcher: ['/admin/:path*'],
// };


import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });

          supabaseResponse = NextResponse.next({ request });

          cookiesToSet.forEach(({ name, value, options }) => {
            supabaseResponse.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;
  const isLoginPath = pathname === "/admin/login";

  const isSecretLogin =
    isLoginPath &&
    request.nextUrl.searchParams.get("door") === "nauval";

  // Tolak akses login tanpa parameter rahasia yang benar.
  if (isLoginPath && !isSecretLogin) {
    return NextResponse.rewrite(new URL("/404", request.url));
  }

  // Tolak akses semua halaman admin jika belum terautentikasi.
  if (pathname.startsWith("/admin") && !isSecretLogin) {
    if (error || !user) {
      return NextResponse.redirect(
        new URL("/admin/login?door=nauval", request.url)
      );
    }
  }

  // Pengguna yang sudah login tidak perlu membuka halaman login.
  if (isSecretLogin && user && !error) {
    return NextResponse.redirect(
      new URL("/admin/proyek", request.url)
    );
  }

  return supabaseResponse;
}

export const config = {
  matcher: ["/admin/:path*"],
};
