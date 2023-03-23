import React from 'react'
import './ChildFooter.css';

export default function ChildFooter() {
  return (
    <div className='cfooter-container'>
        <div className='cfooter-parent'>
            <img src={require ('../../../assets/ChildFooter/shape-bg.png')} alt='No Connection'></img>
        </div>
    </div>
  )
}
