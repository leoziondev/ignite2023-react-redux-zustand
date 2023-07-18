import { Video } from "lucide-react";

interface LessonProps {
    title: string
    duration: string
    onPlay: () => void
}

export function Lesson({ title, duration, onPlay }: LessonProps) {

    return (
        <button onClick={onPlay} className="flex items-center gap-3 text-sm text-zinc-400">
            <Video className="h-4 w-4 text-zinc-500" />
            <span className="">{title}</span>
            <span className="ml-auto font-mono text-xs text-zinc-500">{duration}</span>
        </button>
    )
}