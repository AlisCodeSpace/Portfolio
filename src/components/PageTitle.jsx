import React from 'react'

import { links } from '../data/links'
import { useLocation } from 'react-router-dom'

const PageTitle = () => {
    const location = useLocation()
    const currentPath = location.pathname

    const title = links.find((link) => link.path === currentPath)?.pageTitle

  return (
    <h1 className='page-title'>
      {title}
    </h1>
  )
}

export default PageTitle
