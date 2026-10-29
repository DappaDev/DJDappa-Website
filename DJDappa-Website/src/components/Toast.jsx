export default function Toast({ message }) {
  return (
    <div aria-live="polite" role="status" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] pointer-events-none">
      {message && (
        <div className="px-6 py-3 rounded-full bg-[#FF5CDA] text-black text-[12px] tracking-wide font-medium border border-[#00E5FF]/20 shadow-[0_0_18px_rgba(255,92,218,0.5)] text-center max-w-[90vw]">
          {message}
        </div>
      )}
    </div>
  );
}
