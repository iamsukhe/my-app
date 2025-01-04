import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function ResumeModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-back-700 dark:text-back-50 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-400 group-hover:to-blue-400 group-hover:bg-no-repeat p-0">
          View full resume
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Resume - Sukhvinder Singh</DialogTitle>
        </DialogHeader>
        <div className="mt-4 w-full h-[80vh]">
          <iframe
            src="/resume.pdf"
            className="w-full h-full"
            title="Sukhvinder Singh's Resume"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

