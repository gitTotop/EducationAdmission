import React from 'react'
import './style.css'

export default function HeaderSection(props) {
    return (
      <div className="section-header">
        <h2 className="section-title">{props.title}</h2>
        <span className="line"></span>
      </div>
    );
}
