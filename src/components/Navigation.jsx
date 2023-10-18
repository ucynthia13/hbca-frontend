import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className='container'>
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/patient-data"}>Patient Data</Link>
                </li>
                <li>
                    <Link to={"/frequent-sickness"}>Frequent Sickness</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation