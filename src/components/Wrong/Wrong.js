import React from 'react'

const Wrong = ({ showNotification }) => {
  return (
    <div className={`wrong ${showNotification ? 'show' : ''}`}>
      <p>Bu harfi zaten girdin. Başka bir harf deneyebilirsin</p>
    </div>
  )
}

export default Wrong
