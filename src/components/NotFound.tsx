import notFoundImg from '@/assets/not-found.png'
import Image from 'next/image'

type NotFoundProps = {
  text: string
}

export function NotFound({ text }: NotFoundProps) {
  return (
    <div className='flex flex-col items-center gap-4'>
      <Image src={notFoundImg} alt='Not Found Image' className='w-[250px]' />
      <p className='text-lg'>{text}</p>
    </div>
  )
}