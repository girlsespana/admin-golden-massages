import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { TbLogout } from 'react-icons/tb'
import { HiChevronDown } from 'react-icons/hi2'
import { useAuth, useMe } from '@auth/hooks'
import { Popover } from '@components'

interface Props {
  children: ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  const { logout } = useAuth()
  const me = useMe()

  return (
      <div className="relative w-full h-screen bg-background-dark flex flex-col overflow-hidden">
        {/* Ambient velvet radial glow */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div
              className="absolute -top-40 left-1/2 -translate-x-1/2 w-[820px] h-[420px] rounded-full blur-3xl opacity-40"
              style={{
                background:
                    'radial-gradient(ellipse, rgba(139,58,58,0.18) 0%, rgba(10,10,11,0) 70%)',
              }}
          />
          <div
              className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full blur-3xl opacity-30"
              style={{
                background:
                    'radial-gradient(circle, rgba(139,58,58,0.14) 0%, rgba(10,10,11,0) 70%)',
              }}
          />
        </div>

        {/* Top bar */}
        <header className="relative z-10 shrink-0">
          {/* Velvet accent line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent"/>

          <div className="bg-card-dark/80 backdrop-blur-md border-b border-white/[0.06]">
            <div className="px-6 h-[60px] flex items-center justify-between">
              {/* Brand */}
              <Link to="/" className="flex items-center gap-3 group">
                <div className="flex flex-col leading-none">
                  <span className="text-base font-extrabold tracking-tight uppercase text-white">
                    <span className="text-velvet-gradient">Lounge</span> Velvet
                  </span>
                  <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-neutral-500 mt-0.5">
                    Panel admin
                  </span>
                </div>
              </Link>

              {/* User menu */}
              {me && (
                  <Popover>
                    <Popover.Trigger
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-colors duration-200 cursor-pointer focus:outline-none">
                      <div
                          className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 border border-primary/30 grid place-items-center text-[10px] font-bold text-white uppercase shrink-0">
                        {me.name.slice(0, 1)}
                      </div>
                      <span className="hidden sm:block text-xs font-medium text-neutral-200">
                        {me.name}
                      </span>
                      <HiChevronDown
                          className="text-xs text-neutral-500 transition duration-200 [[data-headlessui-state~=open]_&]:rotate-180"/>
                    </Popover.Trigger>

                    <Popover.Panel>
                      {/* User info */}
                      <div className="px-4 py-3">
                        <p className="text-sm font-semibold text-white truncate">{me.name}</p>
                        <p className="text-xs text-neutral-400 mt-0.5 truncate">{me.email}</p>
                      </div>

                      <div className="border-t border-white/[0.06]"/>

                      {/* Actions */}
                      <div className="p-1.5">
                        <button
                            onClick={() => logout()}
                            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-neutral-300 hover:bg-white/[0.06] hover:text-white transition-colors duration-150"
                        >
                          <TbLogout className="text-base shrink-0"/>
                          Cerrar sesión
                        </button>
                      </div>
                    </Popover.Panel>
                  </Popover>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="relative z-10 flex-1 overflow-auto pb-24">
          {children}
        </main>
      </div>
  )
}

export default DashboardLayout
