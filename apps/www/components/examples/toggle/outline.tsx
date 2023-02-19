import { Toggle } from "@shadcn/ui"
import { Italic } from "lucide-react"

export function ToggleOutline() {
  return (
    <Toggle variant="outline" aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  )
}
