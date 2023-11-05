type NoteContentProps = {
  text: string
  underline?: boolean
}

export function NoteContent({ text, underline }: NoteContentProps) {
  return (
    <p className={`text-base sm:text-lg truncate w-full ${underline ? 'underline underline-offset-4' : ''}`}>{text}</p>
  )
}