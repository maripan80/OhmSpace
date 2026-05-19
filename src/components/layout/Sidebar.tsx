import { NavLink } from 'react-router-dom'
import { lore } from '../../data/lore'

const navItems = [
  { to: '/', label: 'Misiuni', end: true },
  { to: '/lab/mission-01', label: 'Laborator', end: false },
  { to: '/academic', label: 'Academic', end: false },
]

export function Sidebar() {
  return (
    <aside className="flex h-full w-56 flex-col border-r border-neon-cyan/20 bg-space-800/80 p-4 md:w-64">
      <div className="mb-8">
        <h1 className="font-display text-lg font-bold text-neon-cyan">OhmSpace</h1>
        <p className="font-mono text-xs text-slate-500">{lore.stationName}</p>
      </div>

      <nav className="flex flex-1 flex-col gap-1" aria-label="Navigare principală">
        {navItems.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `rounded-md px-3 py-2 font-medium transition ${
                isActive
                  ? 'border border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan shadow-neon-cyan'
                  : 'text-slate-400 hover:bg-space-700/50 hover:text-slate-200'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <p className="font-mono text-[10px] text-slate-600">
        {lore.role}
      </p>
    </aside>
  )
}
