import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div>
         <div className="portfolio">
            <hr/>
            <h1>PORTFOLIO!</h1>
            <h3>HERE ARE SOME OF MY COMPLETED PROJECTS</h3>
            <hr/>
        </div>
        <div className="project">
            <div className="pro_header"><h1>PROJECTS :</h1></div>
            <div className="pro_body1">
                <div className="project1">
                    <div className="top"></div>
                    <div className="btm">
                        <Link><img src="image/social.png" alt="" width="50em"/></Link>
                    </div>
                </div>
                <div className="project1">
                    <div className="top"></div>
                    <div className="btm">
                        <Link><img src="image/social.png" alt="" width="50em"/></Link>
                    </div>
                </div>
                <div className="project1">
                    <div className="top"></div>
                    <div className="btm">
                        <Link><img src="image/social.png" alt="" width="50em"/></Link>
                    </div>
                </div>
                <div className="project1">
                    <div className="top"></div>
                    <div className="btm">
                        <Link><img src="image/social.png" alt="" width="50em"/></Link>
                    </div>
                </div>
                <div className="project1">
                    <div className="top"></div>
                    <div className="btm">
                        <Link><img src="image/social.png" alt="" width="50em"/></Link>
                    </div>
                </div>
                <div className="project1">
                    <div className="top"></div>
                    <div className="btm">
                        <Link><img src="image/social.png" alt="" width="50em"/></Link>
                    </div>
                </div>                
            </div>           
        </div>
    </div>
  )
}

export default Portfolio