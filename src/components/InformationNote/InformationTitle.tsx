type InformationTitleProps = {
  title: string
}

export function InformationTitle({ title }: InformationTitleProps) {
  return (
    <h3 className="text-3xl text-center underline underline-offset-4">
      {title}
    </h3>
  )
}