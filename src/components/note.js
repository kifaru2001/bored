import React from 'react'

import PropTypes from 'prop-types'

import './note.css'

const Note = (props) => {
  return (
    <section className="note-note">
      <h2 className="note-caption">
        <span className="note-text">
          We got so Bored we decided to build
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="note-text1">&quot;Whaleverse 2.0&quot;</span>
        <span className="note-text2">
          , Our own Ocean! Our Own rules in a permissionless and secure world.
        </span>
      </h2>
    </section>
  )
}

Note.defaultProps = {
  Caption:
    'We got so Bored we decided to build "Whaleverse 2.0", Our own Ocean! Our Own rules in a permissionless and secure world.',
}

Note.propTypes = {
  Caption: PropTypes.string,
}

export default Note
