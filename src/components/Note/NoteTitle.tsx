type NoteTitleProps = {
  text: string
  underline?: boolean
}

export function NoteTitle({ text, underline }: NoteTitleProps) {
  return (
    <p title={text} className={`text-lg sm:text-xl ${underline ? 'underline underline-offset-4' : ''} truncate w-full`}>{text}</p>
  )
}