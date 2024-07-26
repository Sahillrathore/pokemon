import React from 'react'

const Footer = () => {
  return (
    <footer className='px-20 py-4 border-t-2 relative'>
      <p className='capitalize text-lg font-medium text-center w-full'>made by <span className='uppercase'>sahil</span> with &#10084;</p>

      <div className="git-logo absolute bottom-2 right-10">

        <a href="https://github.com/Sahillrathore/pokemon" target='_blank'>
          <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            className='h-10'
            alt="" />
        </a>
      </div>
    </footer>
  )
}

export default Footer