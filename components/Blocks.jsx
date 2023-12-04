import Image from "next/image"


const Blocks = ({title,para}) => {
  return (
      <div className="border-r-2 border-gray-300 w-60 h-full flex  justify-center items-center px-3 " >
          <Image className=" w-10 h-10 rounded-full" src={'/demo.svg'} width={50} height={20} alt="demo" />
          <div className="" >
              <h3 className="font-bold">{title}</h3>
              <p className="line-clamp-1 text-gray-400 text-sm">{ para}</p>
          </div>
    </div>
  )
}

export default Blocks