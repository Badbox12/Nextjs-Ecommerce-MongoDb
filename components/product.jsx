
import Image from "next/image"
const product = ({name, price, description, pictures}) => {
  return (
    <div className='w-64'>
    <div className='bg-blue-100 p-5 rounded-xl'>
      <Image src={pictures} width={256} height={256} alt={pictures} />
    </div>
    <div className='mt-1'>
      <h3 className='font-bold text-lg'>{name}</h3>
    </div>
    <p className='text-sm mt-2 leading-4'>{description}</p>
       <div className='flex mt-1'>
    <div className='text-2xl font-bold grow'>${price}</div>
    <button className='bg-emerald-400 text-white py-1 px-3'>+</button>
  </div>
  </div>
  )
}

export default product