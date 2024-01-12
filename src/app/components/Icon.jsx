import { icons } from "lucide-react"

export const Icon = ({ name, color, size }) => {
  const LucideIcon = icons[name]

  return <LucideIcon color={color} size={size || 16} />
}
