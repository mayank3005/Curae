import React from 'react'
import Item from './Item.js'
import './Wearable.css';
import wear1 from '../images/wearable1.jpg';
import wear2 from '../images/wearable2.jpg';
import wear3 from '../images/wearable3.png';
import wear4 from '../images/wearable4.jpg';
export default function Wearables() {
  return (
    <div className='Wearables'>
        <h1>Wearables</h1>
        <div className='wear-div'>
            <Item img= {wear1}name='Fitness Tracker' desc='Fitness Tracker is wrist-worn device that can detect some combination of walking steps, running distance, heart rate, sleep patterns and swimming laps.' price='Price only Rs 2000'/>
            <Item img={wear2} name='Hearing Aid' desc='A hearing aid makes some sounds louder so that a person with hearing loss can listen. It is a small electronic device that you wear in or behind your ear
' price='Price only Rs 2000'/>
            <Item img={wear3} name='Gulucose Sensor' desc='The glucose sensor measures your interstitial glucose level. It works through a tiny sensor inserted under your skin, usually on your belly or arm.' price='Price only Rs 2000'/>
            <Item img={wear4} name='Ecg Monitor' desc='ECG Moniitors is designed to collect single-lead ECG Signal to send collected data to an android via Bluetooth.' price='Price only Rs 3500'/>
        </div>

        </div>
  )
}
