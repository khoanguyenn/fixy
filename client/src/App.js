import React, { Component } from 'react';
import fixylogo from './logo.svg'
import fixyiphone from './iPhoneX.png';
import googleplay from './googleplay.png';
import appstore from './appstore.png';
import groupconnection from './groupconnection.png';
import './fixy.css';


class App extends Component {
  render() {
    return (
      <div className="containter">
          <div className="navigation">
            <div className="logo_top"><img src={fixylogo}></img></div>
              <div className="navigation_bar">
                <ul>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#feature">Feature</a></li>
                  <li><a href="#introduction">Introduction</a></li>
                  <li><a href="#home">Home</a></li>
                </ul>
              </div>
            </div>
            <div className="banner">
              <div className="smartphone"><img src={fixyiphone}></img></div>
              <div className="getapp">
                <h1>Fix now with FIXY</h1>
                <h2>FIXY, FIX EVERYTHINGS</h2>
                <div className="download_buttons">
                  <div><img src={googleplay} width={260} height={80} className="buttons"></img></div>
                  <div><img src={appstore} width={260} height={80} className="buttons"></img></div>
                </div>
                <div class="btn_getstarted">Get started</div>
              </div>
            </div>
        <div className="introduction">
          <div className="introduction_description">
            <h3>Connection.</h3>
            <h3>Communication.</h3>
            <div className="fixy_title">Fixy.</div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed volutpat sed neque sit amet tempor. 
            Suspendisse blandit risus in laoreet rutrum. 
            Donec blandit felis tortor, sed condimentum turpis pharetra ut. 
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            </p>
          </div>
          <img src={groupconnection} className="groupconnection_img"></img>
        </div>
        <div className="background">
        <div className="feature">
          <div className="feature_title">Fixy's Feature</div>
          <div className="feature_section">
            <div className="feature_card">
              <div className="feature_content">
                <h3>Connect.</h3>
                <p className="feature_description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed volutpat sed neque sit amet tempor. 
                  Suspendisse blandit risus in laoreet rutrum. 
                  Donec blandit felis tortor, sed condimentum turpis pharetra ut.
                </p>
              </div>
            </div>
            <div className="feature_card">
              <div className="feature_content">
                <h3>Connect.</h3>
                <p className="feature_description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed volutpat sed neque sit amet tempor. 
                  Suspendisse blandit risus in laoreet rutrum. 
                  Donec blandit felis tortor, sed condimentum turpis pharetra ut.
                </p>
              </div>
            </div>
            <div className="feature_card">
              <div className="feature_content">
                <h3>Connect.</h3>
                <p className="feature_description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed volutpat sed neque sit amet tempor. 
                  Suspendisse blandit risus in laoreet rutrum. 
                  Donec blandit felis tortor, sed condimentum turpis pharetra ut.
                </p>
              </div>
            </div>
          </div>
        </div>
          <div className="getapp_bottom">
            <div className="logo_top"><img src={fixylogo}></img></div>
            <div className="banner banner_bottom">
              <div className="smartphone"><img src={fixyiphone}></img></div>
              <div className="getapp">
                <h1 className="title_bottom">Get FIXY now !</h1>
                <h2 className="title_bottom">FIXY, FIX EVERYTHINGS</h2>
                <div><img src={googleplay} width={260} height={80}></img></div>
                <div><img src={appstore} width={260} height={80}></img></div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <form>
            <div className="fixy_title bottom">Fixy.</div>
            <input className="inputfield" placeholder="Name" type="text"></input>
            <input className="inputfield" placeholder="Email" type="text"></input>
            <input className="inputfield" placeholder="Company Name" type="text"></input>
            <button className="submit">Submit</button>
          </form>
          <div className="contact-info">
            <h3>Contact info</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed volutpat sed neque sit amet tempor. 
          Suspendisse blandit risus in laoreet rutrum. 
          Donec blandit felis tortor, sed condimentum turpis pharetra ut. 
          </div>
        </div>
      </div>
    );
  }
}
export default App;
