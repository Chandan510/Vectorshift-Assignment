export default function PipelineAlert({
    nodesCount,
    edgesCount,
    isDAG,
    onClose,
  }) {
    return (
      <div className="fixed   right-4 z-50 w-[320px] rounded-xl border border-[#334155] bg-[#0F172A] shadow-xl">
        {/* Header */}
        <div className="px-4 py-3 border-b border-[#334155] flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">
            Pipeline Analysis
          </h3>
          <button
            onClick={onClose}
            className="text-[#94A3B8] hover:text-white transition"
          >
            X
          </button>
        </div>
  
        {/* Body */}
        <div className="px-4 py-4 space-y-3 text-xs">
          <InfoRow label="Nodes" value={nodesCount} />
          <InfoRow label="Edges" value={edgesCount} />
  
          <div className="flex items-center justify-between">
            <span className="text-[#94A3B8] uppercase font-semibold">
              Is DAG
            </span>
            <span
              className={`font-semibold ${
                isDAG ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {isDAG ? "Valid ✓" : "Invalid ✕"}
            </span>
          </div>
        </div>
      </div>
    );
  }
  
  function InfoRow({ label, value }) {
    return (
      <div className="flex items-center justify-between">
        <span className="text-[#94A3B8] uppercase font-semibold">
          {label}
        </span>
        <span className="text-white font-medium">{value}</span>
      </div>
    );
  }
  