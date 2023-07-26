import React, { useEffect, useRef } from 'react';
import ContentCard from './ContentCard'


export default function ContentContainer() {

  return (
    <div className='content-container'>
        <div className="content-box" >
            <ContentCard></ContentCard>
            <ContentCard></ContentCard>
            <ContentCard></ContentCard>
        </div>
    </div>
  )
}

