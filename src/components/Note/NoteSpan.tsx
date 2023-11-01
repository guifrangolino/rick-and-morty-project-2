type NoteSpanProps = {
  text: string
  underline?: boolean
}

export function NoteSpan({ text, underline }: NoteSpanProps) {
  return (
    <p className={`${underline ? 'underline underline-offset-4' : ''}`}>{text}</p>
  )
}