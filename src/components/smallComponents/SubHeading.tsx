import React from 'react'

const SubHeading = ({title}:{title:string}) => {
  return (
    <h2 className="text-2xl text-center md:text-4xl font-sans font-bold text-[#178A52] mb-6">
        {title}
    </h2>
  )
}

export default SubHeading
