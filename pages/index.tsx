import React from "react";

export default function Home() {
  const InputIcon = ({
    children,
  }: {
    children: React.ReactNode;
  }) => (
    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/70">
      {children}
    </span>
  );

  return (
    <div className="relative h-dvh w-full flex-1 overflow-hidden bg-black">
      {/* Full-screen background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover [object-position:50%_20%]"
        src="/caregiver.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Mask bottom-right corner to hide the video logo */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-14 w-24 bg-black/0 sm:h-16 sm:w-28" />

      {/* Darken lower area for readability */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[62dvh] bg-gradient-to-b from-transparent via-[#0b1220]/35 to-[#0b1220]/60" />

      {/* Overlay login panel (starts higher, overlaps background) */}
      <div className="absolute inset-x-0 bottom-0 z-30 h-[48dvh] overflow-hidden rounded-t-[28px] bg-[#12203a]/65 px-5 pb-4 pt-5 text-white backdrop-blur-xl ring-1 ring-white/12">
        <div className="mx-auto w-full max-w-sm">
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]">
            Welcome!
          </h1>

          <form className="space-y-2.5">
            <div className="relative">
              <InputIcon>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M20 21a8 8 0 1 0-16 0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </InputIcon>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                placeholder="Username"
                className="h-11 w-full rounded-xl border border-white/18 bg-white/55 pl-11 pr-4 text-[15px] text-white shadow-sm backdrop-blur-md outline-none placeholder:text-white/80 focus:border-white/35 focus:bg-white/60"
              />
            </div>

            <div className="relative">
              <InputIcon>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M7 11V8a5 5 0 0 1 10 0v3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6 11h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </InputIcon>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Password"
                className="h-11 w-full rounded-xl border border-white/18 bg-white/55 pl-11 pr-11 text-[15px] text-white shadow-sm backdrop-blur-md outline-none placeholder:text-white/80 focus:border-white/35 focus:bg-white/60"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-2 text-white/70 hover:bg-white/10 hover:text-white"
                aria-label="Toggle password visibility"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M2 12s3.636-7 10-7 10 7 10 7-3.636 7-10 7-10-7-10-7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-between pt-1 text-sm drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]">
              <label className="flex items-center gap-2 text-white/80">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/30 bg-white/10 text-emerald-400 accent-emerald-400"
                />
                Remember me
              </label>
              <button
                type="button"
                className="font-medium text-emerald-300 hover:text-emerald-200"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="button"
              className="mt-2 h-11 w-full rounded-xl bg-gradient-to-r from-emerald-400 to-green-500 text-sm font-extrabold tracking-[0.24em] text-black shadow-[0_10px_28px_rgba(16,185,129,0.25)] hover:from-emerald-300 hover:to-green-400 active:from-emerald-500 active:to-green-600"
            >
              LOGIN
            </button>

            <div className="pt-2.5 text-center text-sm text-white/65 drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]">
              Don&apos;t have an account?{" "}
              <button
                type="button"
                className="font-semibold text-emerald-300 hover:text-emerald-200"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
