import React from "react";
import LightPillar from "@/component/background";

export default function Home() {
  return (
    <div className="relative h-dvh w-full flex-1 overflow-hidden bg-white">
      <div className="flex h-dvh w-full flex-col overflow-hidden">
        {/* Top: video (focus on upper half / people walking) */}
        <div className="relative h-[52dvh] w-full shrink-0 overflow-hidden bg-black">
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
          <div className="pointer-events-none absolute bottom-0 right-0 z-20 h-14 w-24 bg-black/0 sm:h-16 sm:w-28" />

          <LightPillar
            topColor="#303031"
            bottomColor="#90848f"
            intensity={0.9}
            rotationSpeed={0.3}
            glowAmount={0.002}
            pillarWidth={3}
            pillarHeight={0.4}
            noiseIntensity={0.5}
            pillarRotation={25}
            interactive={false}
            mixBlendMode="screen"
            quality="high"
          />

          {/* Soft fade to the form */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-12 bg-gradient-to-b from-transparent to-white" />
        </div>

        {/* Bottom: login */}
        <div className="flex min-h-0 flex-1 flex-col justify-center overflow-hidden px-5 py-4">
          <div className="mx-auto w-full max-w-sm">
            <div className="mb-4">
              <h1 className="text-xl font-semibold tracking-tight text-zinc-900">
                Welcome back
              </h1>
              <p className="mt-1 text-sm text-zinc-600">
                Sign in to continue.
              </p>
            </div>

            <form className="space-y-3">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-800"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-[15px] text-zinc-900 shadow-sm outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-900"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-zinc-800"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-[15px] text-zinc-900 shadow-sm outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-900"
                />
              </div>

              <button
                type="button"
                className="mt-1 w-full rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 active:bg-zinc-950"
              >
                Sign in
              </button>

              <button
                type="button"
                className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 active:bg-zinc-100"
              >
                Create account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
