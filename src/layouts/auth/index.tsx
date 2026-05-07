import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const AuthLayout = ({ children }: Props) => {
  return (
      <div className="relative min-h-screen flex flex-col bg-background-dark overflow-hidden">
        {/* Ambient gold radial glows */}
        <div className="pointer-events-none absolute inset-0">
          <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full blur-3xl opacity-50"
              style={{
                background:
                    'radial-gradient(circle, rgba(212,175,55,0.22) 0%, rgba(10,10,11,0) 70%)',
              }}
          />
          <div
              className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full blur-3xl opacity-40"
              style={{
                background:
                    'radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(10,10,11,0) 70%)',
              }}
          />
          <div
              className="absolute -bottom-40 -right-32 w-[460px] h-[460px] rounded-full blur-3xl opacity-40"
              style={{
                background:
                    'radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(10,10,11,0) 70%)',
              }}
          />
        </div>

        {/* Subtle grid pattern overlay */}
        <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                  'linear-gradient(to right, #D4AF37 1px, transparent 1px), linear-gradient(to bottom, #D4AF37 1px, transparent 1px)',
              backgroundSize: '56px 56px',
              maskImage:
                  'radial-gradient(ellipse at center, black 30%, transparent 75%)',
              WebkitMaskImage:
                  'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            }}
        />

        <div className="relative z-10 flex-1 flex flex-col">
          {children}
        </div>
      </div>
  )
}

export default AuthLayout
