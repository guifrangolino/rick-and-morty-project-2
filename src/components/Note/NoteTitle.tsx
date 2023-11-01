type NoteTitleProps = {
  text: string
  underline?: boolean
}

export function NoteTitle({ text, underline }: NoteTitleProps) {
  return (
    <p className={`text-xl ${underline ? 'underline underline-offset-4' : ''}`}>{text}</p>
  )
}