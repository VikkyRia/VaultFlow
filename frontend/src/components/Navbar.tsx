import { LayoutDashboard, ArrowLeftRight, FileText, BarChart2, Settings, LogOut } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const navLinks: { label: string; Icon: LucideIcon; active: boolean }[] = [
  { label: "Dashboard", Icon: LayoutDashboard, active: true },
  { label: "Transactions", Icon: ArrowLeftRight, active: false },
  { label: "Invoices", Icon: FileText, active: false },
  { label: "Reports", Icon: BarChart2, active: false },
  { label: "Settings", Icon: Settings, active: false },
];

export const Navbar = () => {
  return (
    <nav className="bg-white/80 border-b border-[#e5e5e5] flex items-center justify-between h-14.25 px-8 w-full shrink-0">
      {/* Logo */}
      <a href="#" className="font-bold text-base text-black tracking-[-0.4px] font-['Familjen_Grotesk',sans-serif] whitespace-nowrap">
        VaultFlow
      </a>

      {/* Navigation links */}
      <div className="flex items-center gap-0.5">
        {navLinks.map(({ label, Icon, active }) => (
          <a
            key={label}
            href="#"
            className={`flex items-center gap-1.5 rounded-[10px] px-3 h-8 ${
              active ? "bg-black" : "hover:bg-[#f5f5f5]"
            }`}
          >
            <Icon
              size={14}
              strokeWidth={2}
              className={active ? "text-[#fafafa]" : "text-[#737373]"}
            />
            <span
              className={`text-sm font-medium font-['Familjen_Grotesk',sans-serif] whitespace-nowrap ${
                active ? "text-[#fafafa]" : "text-[#737373]"
              }`}
            >
              {label}
            </span>
          </a>
        ))}
      </div>

      {/* User info */}
      <div className="flex items-center gap-3">
        <span className="text-[#737373] text-xs font-['Familjen_Grotesk',sans-serif] whitespace-nowrap">
          bankole design
        </span>
        <button className="flex items-center justify-center w-8 h-8 rounded-lg cursor-pointer hover:bg-[#f5f5f5]">
          <LogOut size={14} strokeWidth={2} className="text-[#737373]" />
        </button>
      </div>
    </nav>
  );
};

