import React, { useState, useEffect } from "react"

const Footer = () => {

  var [date, setDate] = useState(new Date())

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  })

  return (
    <footer className="footer font-roboto">
      <div className="footer-container">
        <div className="-my-[120px] px-[55px] flex flex-col items-end justify-end">
          <p>0° 0' 0.0000'' N </p>
          <p>0° 0' 0.0000'' E </p>
          <p>LOREM, IPSUM </p>
          <p>
            {date.toLocaleDateString()}, {date.toLocaleTimeString()}
          </p>
        </div>   
      </div>
    </footer>
  )
}

export default Footer