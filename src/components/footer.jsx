import React from 'react'
import { Link } from 'react-router-dom'

const footer = () => {
  return (
    <footer>
        <div>
            <div>
                <h3>ShopZy</h3>
                <p>
                   shop with use and experience the best online shopping experience 
                </p>
            </div>
            <div>
                <h4>Quick Links</h4>
                <ul>
                    <li>
                        <Link to={'/home'}>Home</Link>
                    </li>
                    </ul>

            </div>
            <div>
                <h4>Customer Service</h4>
                <a href="">FAQ</a>
                <a href="">Return&refund</a>
                <a href="">Terms and condition</a>
                <a href="">Privacy policy</a>
                
            </div>
        </div>
    </footer>
  )
}

export default footer