import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProjectCart({image , name ,description ,tags ,url}) {
  return (
    <div className="block bg-white overflow-hidden rounded-md  duration-300 hover:-translate-y-2 hover:drop-shadow-lg">
        <Image src={image} alt='project' width={300} height={200} />
        <div className="block p-4">
            <h6 className="block mt-4 font-roboto-black text-2xl ">{name}</h6>
            <p className="block mt-4 text-md text-text-200">{description}</p>
            <ul className="flex gap-2 flex-wrap mt-4">
              {tags[0].split(',').map((tag, index)=>
                <li className="flex justify-center items-center bg-primary rounded-lg text-sm py-2  px-3 text-white"key={index}>{tag}</li>
              )}
            </ul>
            <Link href={url} className='btn_success mt-3' target='_blank'>View Project</Link>
        </div>
    </div>
  )
}

export default ProjectCart