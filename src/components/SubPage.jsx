import React from 'react'
import Aside from './Aside'
import SubView from './SubView'
import SubList from './SubList'
import Tag from './Tag'

const SubPage = () => {
  return (
    <div>
      <Aside />
      <Tag />
      <SubView />
      <SubList />
    </div>
  )
}

export default SubPage