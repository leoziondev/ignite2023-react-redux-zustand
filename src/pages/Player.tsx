import { useEffect } from 'react'
import { Header } from '../components/Header'
import { Video } from '../components/Video'
import { Module } from '../components/Module'

import { MessageCircle } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '../store'
import { loadCourse, useCurrentLesson } from '../store/slices/player'


export function Player() {
    const dispatch = useAppDispatch()

    const modules = useAppSelector(state => {
        return state.player.course?.modules
    })

    const { currentLesson } = useCurrentLesson()

    useEffect(() => {
        dispatch(loadCourse())
    }, [])

    useEffect(() => {
        if (currentLesson) {
            document.title = `Assistindo: ${currentLesson.title}`
        }
    }, [currentLesson])

    return (
        <div className="h-screen bg-zinc-950 text-zinc-50 flex items-center justify-center">
            <div className="flex w-[1100px] flex-col gap-6 px-4 md:px-0">
                <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                    {/* HEADER */}
                    <Header />

                    <button className="flex items-center justify-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
                        <MessageCircle className="h-4 w-4" />
                        Deixar feedback
                    </button>
                </div>

                <main className="relative flex flex-col md:flex-row overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow md:pr-80">
                    <div className="flex-1">
                        <Video />
                    </div>
                    <aside className="w-full max-h-[300px] md:max-h-screen md:w-80 md:absolute md:top-0 md:bottom-0 md:right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
                        {modules && modules.map((module, index) => {
                            return (
                                <Module
                                    key={module.id}
                                    moduleIndex={index}
                                    title={module.title}
                                    amountOfLessons={module.lessons.length}
                                />
                            )
                        })}
                    </aside>
                </main>
            </div>
        </div>
    )
}