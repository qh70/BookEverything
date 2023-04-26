import React from 'react'

const ThreeCoinsSec = ({src, percentage, num, status}) => {
  return (
    <div className="threeCoinsSec">
        <div className="topInthreeCoinsSec">
            <img className="iconInTopInthreeCoinsSec" src={src} />
            <div className="percentageInTopInthreeCoinsSec">{percentage}</div>
        </div>
        <div className="bottomInthreeCoinsSec">
            <div className="numInBottomInthreeCoinsSec">{num}</div>
            <div className="statusInBottomInthreeCoinsSec">{status}</div>
        </div>
    </div>
  )
}

export default ThreeCoinsSec
