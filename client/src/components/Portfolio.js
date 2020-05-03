import React from "react"
import {Link} from "react-router-dom"
import Week19 from "./Week-19"

const Portfolio = () => {
  return (
    <div className="container">
      <h2 className = "portfolio-title">Website Highlights</h2>
      <h5>Below are the highlights for websites I have either built or worked on with a team</h5>
      <div class="">
        <iframe className = "week-19" src= "https://tehpunisher456.github.io/week-19/"/>
        <a href = "tehpunisher456.github.io/week-19" className = "row "> Week-19: Employee Directory</a>
      </div>
    </div>
  )
}

export default Portfolio