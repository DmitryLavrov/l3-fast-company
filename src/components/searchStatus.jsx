import React from 'react'

const SearchStatus = ({quantity}) => {
  const renderPhrase = (number) => {
    if (number === 0) return 'Никто с тобой не тусанет'
    if (number === 1) return '1 человек тусанет с тобой сегодня'
    return `${number} человек${letterA(number)} тусанут с тобой сегодня`
  }

  const letterA = (number) => {
    const digits = number.toString().split('')
    if (digits[1] === '1') return ''
    if (['2', '3', '4'].includes(digits[0])) return 'а'
    return ''
  }

  return (
    <h1>
      <span className={`badge bg-${quantity ? 'primary' : 'danger'}`}>
        {renderPhrase(quantity)}
      </span>
    </h1>
  )
}

export default SearchStatus
