import React, { Component } from 'react';
import './About.css';
import profileImage from '../assets/headshot.jpeg';
import SailingIcon from '@mui/icons-material/Sailing';
import BrushIcon from '@mui/icons-material/Brush';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img 
                className="profile_image"
                src={profileImage}
                alt="Profile Pic"
              />
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Teresa Lee</div>
              <div className="brief_description">
                Hi! I am a rising junior at UCLA studying Computer Science. Here are some fun facts about me!
                <div className='fun_fact'>
                  <div className='icon1'>
                    <SailingIcon />
                  </div>
                  <div className="fun_fact_text">
                    I am originally from NYC but I like SoCal more, now that I've been here for 2 years!
                  </div>
                </div>
                <div className='fun_fact'>
                  <div className='icon2'>
                    <BrushIcon />
                  </div>
                  <div className="fun_fact_text">
                    I love making miniature clay sculptures and crocheting!
                  </div>
                </div>
                <div className='fun_fact'>
                  <div className='icon3'>
                    <LocalDiningIcon />
                  </div>
                  <div className="fun_fact_text">
                    I am a huge foodie!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
