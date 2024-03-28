export default function ErrorField({ error }: { error: string[] }) {
  return (
    <div aria-live="polite" aria-atomic="true">
      {error.map((error: string) => (
        <p className="mt-2 text-sm text-error" key={error}>
          {error}
        </p>
      ))}
    </div>
  )
}
