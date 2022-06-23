import React from 'react'

function Article({title,minutes,date="January 1, 1970",preview}) {
 let  coffe='\u2615'

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} {minutes} <span role="img" aria-label="sheep">{minutes<=30?coffe.repeat(Math.ceil(minutes/5)):"🍱".repeat(Math.ceil(minutes/10))}</span></small>
      <p>{preview}</p>
    </article>
  )
}

export default Article