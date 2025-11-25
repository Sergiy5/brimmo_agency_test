interface CustomTooltipProps {
  active?: boolean;
  label?: string | number;
  payload?: {
    name: string;
    value: number;
    dataKey: string;
    payload: any;
  }[];
}

export const ChartTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  const sales = payload.find((p) => p.dataKey === 'sales')?.value;
  const revenue = payload.find((p) => p.dataKey === 'revenue')?.value;

  return (
    <div
      className="relative flex flex-col items-start justify-center gap-3 rounded-lg bg-white py-3 pr-5 pl-3"
      style={{ boxShadow: '1px 0px 4px 0 rgba(0,0,0,0.08)' }}
    >
      {/* Tooltip header */}
      <div className="flex flex-col gap-3">
        <p className="text-sm text-[#071429]/50">{label}</p>

        <div className="flex gap-4">
          {/* Sales */}
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <svg
                width={8}
                height={8}
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={4} cy={4} r={4} fill="#071429" fillOpacity="0.5" />
              </svg>
              <p className="text-[15px] font-semibold text-[#071429]">{sales} units</p>
            </div>

            <p className="text-sm text-[#071429]/50">Sales</p>
          </div>

          {/* Revenue */}
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <svg
                width={8}
                height={8}
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={4} cy={4} r={4} fill="#87B1F7" />
              </svg>
              <p className="text-[15px] font-semibold text-[#071429]">{revenue}</p>
            </div>

            <p className="text-sm text-[#071429]/50">Revenue</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-[#071429]/10" />

      {/* Footer */}
      <p className="text-sm text-[#071429]/50">PO Arrival - Nov 15 (+120)</p>
    </div>
  );
};
