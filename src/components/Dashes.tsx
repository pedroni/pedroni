export default function Dashes() {
  return (
    <div className="overflow-hidden w-full flex items-center gap-2 h-4">
      {Array.from({ length: 70 }).map((_, index) => (
        <div key={index} className="shrink-0 h-px w-2 bg-white/20"></div>
      ))}
    </div>
  )
}
