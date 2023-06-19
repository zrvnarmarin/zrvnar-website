"use client"

interface ErrorPageProps {
    error: Error,
    reset: () => void
}

export default function Error({ error, reset }: ErrorPageProps) {
    return <div>
        <div>Error Occuring!</div>
        <button onClick={reset}>Try Again!</button>
    </div>
}