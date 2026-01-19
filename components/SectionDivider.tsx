type SectionDividerProps = {
  className?: string
}

export default function SectionDivider({ className = "" }: SectionDividerProps) {
  return <div className={`h-16 w-full ${className}`}></div>
}
