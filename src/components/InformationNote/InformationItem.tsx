type InformationItemProps = {
  content: string
}

export function InformationItem({ content }: InformationItemProps) {
  return (
    <li>{content}</li>
  )
}