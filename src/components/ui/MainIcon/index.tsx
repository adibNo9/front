import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export interface IMainIcon {
  iconName?: string
}

const MainIcon: React.FC<IMainIcon> = ({ iconName }) => {
  return (
    <div className="icon-wrapper">
      icon
      {/* <FontAwesomeIcon icon={faCoffee} className="fal" /> */}
      <i className="fal fa-tired"></i>
    </div>
  )
}

export default MainIcon
