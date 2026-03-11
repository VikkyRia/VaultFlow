import { Info, ChevronDown, CheckCircle2, Plus, FileText } from 'lucide-react';
import { Navbar } from "../../components/Navbar";

const SectionLabel = ({
  children,
  dark,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) => (
  <span
    className={`text-[12px] font-semibold tracking-[1.2px] uppercase font-['Familjen_Grotesk',sans-serif] ${
      dark ? "text-white/50" : "text-[#737373]"
    }`}
  >
    {children}
  </span>
);

const EmptyState = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center justify-center py-8 gap-2">
    <FileText size={36} strokeWidth={1.5} className="text-[#d4d4d4] mb-2" />
    <p className="text-black text-[14px] font-medium font-['Familjen_Grotesk',sans-serif]">
      {title}
    </p>
    <p className="text-[#737373] text-[14px] font-['Familjen_Grotesk',sans-serif]">
      {description}
    </p>
  </div>
);

export const NewUserDashboard = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col">
        <Navbar />

        <div className="flex flex-col gap-8 px-8 py-6">
          {/* Safe-to-Spend Card */}
          <div className="bg-[#1a1a1a] border border-[#e5e5e5] rounded-[14px] px-6 pt-8 pb-7 overflow-hidden">
            <div className="flex items-center gap-1.5 mb-4">
              <SectionLabel dark>Safe-to-Spend</SectionLabel>
              <Info size={14} strokeWidth={2} className="text-white/40 shrink-0" />
            </div>
            <p className="text-white text-[48px] font-bold tracking-[-1.2px] leading-none font-['Familjen_Grotesk',sans-serif] mb-5">
              $3,389
            </p>
            <button className="flex items-center gap-1 text-white/50 text-[14px] font-medium font-['Familjen_Grotesk',sans-serif] cursor-pointer">
              Show breakdown
              <ChevronDown size={14} strokeWidth={2} className="shrink-0" />
            </button>
          </div>

          {/* Financial Health Card */}
          <div className="bg-white border border-[#e5e5e5] rounded-[14px] p-6">
            <div className="flex items-center gap-1.5 mb-4">
              <SectionLabel>Financial Health</SectionLabel>
              <Info size={14} strokeWidth={2} className="text-[#737373] shrink-0" />
            </div>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-[#009966] text-[36px] font-bold leading-10 font-['Familjen_Grotesk',sans-serif]">
                100
              </span>
              <span className="text-[rgba(115,115,115,0.6)] text-[18px] font-['Familjen_Grotesk',sans-serif]">
                /100
              </span>
            </div>
            <div className="bg-black/10 rounded-full h-2 mb-4">
              <div className="bg-[#009966] h-2 w-full rounded-full" />
            </div>
            <p className="text-[#737373] text-[14px] font-['Familjen_Grotesk',sans-serif] mb-4">
              Excellent - your business is in great shape
            </p>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} strokeWidth={2} className="text-[#009966] shrink-0" />
                <span className="text-black text-[14px] font-['Familjen_Grotesk',sans-serif]">
                  Positive balance
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} strokeWidth={2} className="text-[#009966] shrink-0" />
                <span className="text-black text-[14px] font-['Familjen_Grotesk',sans-serif]">
                  Tax reserve funded
                </span>
              </div>
            </div>
          </div>

          {/* Quick Add */}
          <div className="flex flex-col gap-4">
            <SectionLabel>Quick Add</SectionLabel>
            <div className="flex gap-2">
              {["Income", "Expense", "Invoice"].map((label) => (
                <button
                  key={label}
                  className="flex-1 flex items-center gap-1.5 bg-[#fafafa] border border-[#e5e5e5] rounded-lg px-3 py-2 cursor-pointer hover:bg-[#f0f0f0]"
                >
                  <Plus size={16} strokeWidth={2} className="text-black shrink-0" />
                  <span className="text-black text-[14px] font-medium font-['Familjen_Grotesk',sans-serif]">
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Outstanding Invoices */}
          <div className="flex flex-col gap-4 pt-4">
            <div className="flex items-center gap-1.5">
              <SectionLabel>Outstanding Invoices</SectionLabel>
              <Info size={14} strokeWidth={2} className="text-[#737373] shrink-0" />
            </div>
            <EmptyState
              title="No outstanding invoices"
              description="Create an invoice to track money you're owed."
            />
          </div>

          {/* Recent Activity */}
          <div className="flex flex-col gap-4 pt-4 pb-12">
            <SectionLabel>Recent Activity</SectionLabel>
            <EmptyState
              title="No transactions yet"
              description="Record your first income or expense."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

