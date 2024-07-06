import React from 'react'

type TButtonProps = {
    text: string,
    styles: string,
    func: () => void
}

const CustomBtn = ({text, styles, func}: TButtonProps) => {
  return (
    <button
        className={styles}
        onClick={func}
    >
        {text}
    </button>
  )
}

export default CustomBtn