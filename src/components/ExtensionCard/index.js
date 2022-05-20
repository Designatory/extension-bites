import React from 'react'
import './style.css'

function index({ image, name, about, link, btn }) {
    return (
        <>
            <div className="extension-card">
                <div className="extension-info">
                    <img src={`${image}`} alt="" className='extension-logo' style={{ width: "60px" }} />
                    <div className="extension-description">
                        <p className="extension-name">{name}</p>
                        <p className='extension-quick'>{about}</p>
                    </div>
                </div>
                <a href={`${link}`} className="extension-link" target="_blank">{btn}</a>
            </div>
        </>
    )
}

export default index
