import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import Ruler from '../../components/Ruler.js'
import 'react-tabs/style/react-tabs.css';

import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'

import './Earth.css'

import rclock from '../../assets/earth/rclock.png'
import gold from '../../assets/earth/gold.png'
import lizard from '../../assets/earth/lizard.png'
import magnetic from '../../assets/earth/magnetic.png'
import volcano from '../../assets/earth/volcano.png'
import airplane from '../../assets/earth/airplane.png'
import baloon from '../../assets/earth/baloon.png'
import moon from '../../assets/earth/moon.png'
import mars from '../../assets/earth/mars.png'
import jupiter from '../../assets/earth/jupiter.png'
import saturn from '../../assets/earth/saturn.png'
import uranus from '../../assets/earth/uranus.png'
import neptune from '../../assets/earth/neptune.png'
import perovskite from '../../assets/earth/perovskite.png'
import meteors from '../../assets/earth/meteors.png'
import satellite from '../../assets/earth/satellite.png'
import aurora from '../../assets/earth/aurora.png'

const Earth = () => {

  const [running, setRunning] = useState(false)
  const [total, setTotal] = useState(0)
  const [counter, setCounter] = useState(0)
  const [inter, setInter] = useState(null)

  const countRef = useRef(counter);
  
  useEffect(() => {
    if (running) {

      const fja = (count) => {
        var cnt = count - 15;
        var scrollTo = total - cnt;
        window.scrollTo({ top: scrollTo});
        countRef.current = cnt;
      }

      var interval = setInterval(() => {
        fja(countRef.current);
      }, 150)

      setInter(interval);

      return () => {
        clearInterval(inter);
        clearInterval(interval);
      };

    } else {
      clearInterval(inter);
    }

  }, [running])

  //VERTICAL SCROLL
  useEffect(() => {

    //HEIGHT INIT
    var cnt = 0;
    var els = document.getElementsByClassName("panel");
    Array.prototype.forEach.call(els, function (el) {
      var str = el.style.height.substring(0, el.style.height.length - 2);
      cnt += Number(str);
    });

    document.getElementById("vertical-container").style.height = cnt + 750 + "px";

    setTotal(cnt + 750);
    countRef.current = cnt + 750;

    //WHEEL
    window.addEventListener('mousewheel', function (event) {
      setRunning(false);
    });

    //WHEEL
    window.addEventListener('click', function (event) {
      if (!event.target.classList.contains("journey") && event.target.tagName !== "path") {
        setRunning(false);
      }
    });

    //RESIZE
    window.addEventListener('resize', function (event) {
      document.getElementsByClassName("panel").height = window.innerHeight;
    });

    //SCROLL
    window.addEventListener('scroll', (e) => {
      var scrollTop = window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      var els = document.getElementsByClassName("panelCon");
      Array.prototype.forEach.call(els, function (el) {
        el.style.bottom = (scrollTop) * -1 + "px";
      });

      var rulerEls = document.getElementsByTagName("td");
      Array.prototype.forEach.call(rulerEls, function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.top > window.innerHeight / 2 && rect.top < window.innerHeight / 2 + 50) {
          el.style.fontWeight = "bolder";
          el.style.fontSize = "110%";
          //el.parentElement.querySelector(".km").style.display = 'inline-block';
        } else {
          el.style.fontWeight = "";
          el.style.fontSize = "";
          //el.parentElement.querySelector(".km").style.display = 'none';
        }
      });
    });
  }, [])


  return (
    <div id="vertical-container" >


      <div className="panelCon">

        <div className="upper">
          <div id="end" className="panel row justify-content-center" style={{ "height": "200px" }}>
            <div className="col-10">
              <h4 className="text-center">Thank you for reaching the end!</h4>
              <br />
              <h5 className="text-center">I would appreciate it if you bought me a cup of coffee 😊</h5>
            </div>
          </div>
          <div id="pane-19" className="panel row" style={{ "height": "2500px" }}>
            <Ruler unit={"M"}
              min={17852}
              max={4375}
              height={2500} />
            <div className="col-8 d-flex align-items-start flex-column">
              <h1 className="align-self-center text-center">Heliopause</h1>
              <h4 className="align-self-center text-center">The theoretical boundary where the Sun's solar wind is stopped by the interstellar medium</h4>
            </div>
          </div>
          <div id="pane-20" className="panel row" style={{ "height": "2500px" }}>
            <Ruler unit={"M"}
              min={4375}
              max={2803}
              height={2500} />
            <div className="col-4 d-flex align-items-end">
              <h3>Journey to Neptune</h3>
            </div>
            <div className="col-6 justify-content-start d-flex align-items-start">
              <img alt="" className="img-fluid" src={neptune} height="500px" />
            </div>
          </div>
          <div id="pane-19" className="panel row" style={{ "height": "2500px" }}>
            <Ruler unit={"M"}
              min={2803}
              max={1479}
              height={2500} />
            <div className="col-4 d-flex align-items-end">
              <h3>Journey to Uranus</h3>
            </div>
            <div className="col-6 justify-content-start d-flex align-items-start">
              <img alt="" className="img-fluid" src={uranus} height="500px" />
            </div>
          </div>
          <div id="pane-19" className="panel row" style={{ "height": "2500px" }}>
            <Ruler unit={"M"}
              min={1479}
              max={699}
              height={2500} />
            <div className="col-4 d-flex align-items-end">
              <h3>Journey to Saturn</h3>
            </div>
            <div className="col-6 justify-content-start d-flex align-items-start">
              <img alt="" className="img-fluid" src={saturn} height="500px" />
            </div>
          </div>
          <div id="pane-19" className="panel row" style={{ "height": "2000px" }}>
            <Ruler unit={"M"}
              min={699}
              max={225}
              height={2000} />
            <div className="col-4 d-flex align-items-end">
              <h3>Journey to Jupiter</h3>
            </div>
            <div className="col-6 justify-content-start d-flex align-items-start">
              <img alt="" className="img-fluid" src={jupiter} height="500px" />
            </div>
          </div>
          <div id="pane-18" className="panel row" style={{ "height": "1500px" }}>
            <Ruler unit={"M"}
              min={225}
              max={10}
              height={1500} />
            <div className="offset-4 col-6 justify-content-start d-flex align-items-start">
              <img alt="" className="img-fluid" src={mars} height="400px" />
            </div>
          </div>
          <div id="pane-17" className="panel row" style={{ "height": "1000px" }}>
            <Ruler
              min={999999}
              max={388400}
              height={1000} />
            <div className="col-10 d-flex align-items-end">
              <h3>Journey to Mars</h3>
            </div>
          </div>
          <div id="pane-16" className="panel row" style={{ "height": "3800px" }}>
            <Ruler
              min={388400}
              max={9999}
              height={3800} />
            <div className="col-4 d-flex align-items-end">
              <h3>Journey to the Moon</h3>
            </div>
            <div className="col-6 justify-content-start d-flex align-items-start">
              <img alt="" className="img-fluid" src={moon} height="300px" />
            </div>
          </div>
          <div id="pane-15" className="panel row" style={{ "height": "1500px" }}>
            <Ruler
              min={9999}
              max={600}
              height={1500} />
            <div className="col-2 d-flex flex-column justify-content-end">
              <h3>EXOSPHERE</h3>
            </div>
          </div>
          <div id="pane-14" className="panel row" style={{ "height": "1000px" }}>
            <Ruler
              min={600}
              max={85}
              height={1000} />
            <div className="col-2 d-flex flex-column justify-content-end">
              <h3>THERMOSPHERE</h3>
            </div>
            <div className="col-4 d-flex align-items-center">
              <img alt="" className="invert" src={satellite} height="200px" />
            </div>
            <div className="col-4 d-flex align-items-end">
              <img alt="" src={aurora} height="600px" />
            </div>
          </div>
          <div id="pane-13" className="panel row" style={{ "height": "750px" }}>
            <Ruler
              min={85}
              max={50}
              height={750} />
            <div className="col-2 d-flex flex-column justify-content-end">
              <h3>MESOSPHERE</h3>
            </div>
            <div className="col-4 d-flex align-items-start">
              <h4>Karman line</h4>
            </div>
            <div className="col-4 d-flex align-items-center">
              <img alt="" className="invert" src={meteors} height="500px" />
            </div>
          </div>

          <div id="pane-12" className="panel row" style={{ "height": "1000px" }}>
            <Ruler
              min={50}
              max={10}
              height={1000} />
            <div className="col-2 d-flex flex-column justify-content-end">
              <h3 className="align-self-start text-center">STRATOSPHERE</h3>
            </div>
            <div className="col-4 d-flex align-items-center">
              <h4>Ozone layer</h4>
            </div>
            <div className="col-4 d-flex align-items-center">
              <img alt="" className="invert" src={baloon} height="100px" style={{ "marginTop": "50vh" }} />
            </div>
          </div>

          <div id="pane-11" className="panel row" style={{ "height": "250px" }}>
            <Ruler
              min={10}
              max={0}
              height={250} />
            <div className="col-2 d-flex flex-column justify-content-end">
              <h3 className="align-self-start text-center">TROPOSHERE</h3>
            </div>
            <div className="col-8 col-md-4 justify-content-start">
              <img alt="" className="invert" src={airplane} height="100px" />
            </div>
          </div>
        </div>

        <div className="lower">

          <div id="pane-9" className="panel row" style={{ "height": "150px" }}>
            <Ruler
              min={0}
              max={10}
              height={150} />
            <div className="col-2 d-flex flex-column justify-content-end">
              <h3 className="align-self-start text-center">OCEANIC CRUST</h3>
            </div>
            <div className="col-8 col-md-4 d-flex flex-column justify-content-start">
              <h4 className="align-self-center text-center">270 Million Years Old</h4>
              <span className="align-self-center text-center">The age of the oldest known area of Ocanic crust - part of the Mediterranean Sea.</span>
            </div>
          </div>
          <div id="pane-8" className="panel row" style={{ "height": "250px" }}>
            <Ruler
              min={10}
              max={75}
              height={250} />
            <div className="col-2 d-flex flex-column justify-content-end">
              <h3 className="align-self-start text-center">CONTINENTAL CRUST</h3>
            </div>
            <div className="col-8 col-md-4 d-flex flex-column justify-content-center">
              <h4 className="align-self-center text-center">40 Minerals</h4>
              <span className="align-self-center text-center">Make up 99% of the curst.</span>
            </div>
          </div>
          <div id="pane-7" className="panel row" style={{ "height": "310px" }}>
            <Ruler
              min={100}
              max={410}
              height={310} />
            <div className="col-2 d-flex flex-column justify-content-end">
              <h3 className="align-self-start text-center">UPPER MANTLE</h3>
            </div>
            <div className="col-8 col-md-4 d-flex flex-column justify-content-start">
              <h5 className="align-self-center text-center">Mohorovičić discontinuity</h5>
              <img alt="" className="align-self-center" src={volcano} height="100px" />
              <span className="align-self-center text-center">Islands, volcanoes and ocean trenches - these are all caused by movement of molten material between the crust and the mantle.</span>
            </div>
          </div>
          <div id="pane-6" className="panel row" style={{ "height": "260px" }}>
            <Ruler
              min={410}
              max={670}
              height={260} />
            <div className="col-2 d-flex flex-column justify-content-end">
              <h3 className="align-self-start text-center">TRANSITION ZONE</h3>
            </div>
            <div className="col-8 col-md-4 d-flex flex-column justify-content-center">
              <h4 className="align-self-center text-center">3 whole oceans</h4>
              <span className="align-self-center text-center">Scientists think that a transition zone mineral, ringwoodite, might hold massive amounts of water.</span>
            </div>
          </div>
          <div id="pane-5" className="panel row" style={{ "height": "2230px" }}>
            <Ruler
              min={670}
              max={2900}
              height={2230} />
            <div className="col-2 d-flex flex-column justify-content-end">
              <h3 className="align-self-start text-center">LOWER MANTLE</h3>
            </div>

            <div className="col-8 col-md-4 d-flex flex-column justify-content-center">
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <img alt="" className="align-self-center" src={perovskite} height="150px" />
              <span className="align-self-center text-center">Due to it's great depth, very little is known about the lower mantle.</span>
              <h4 className="align-self-center text-center">Perovskite</h4>
              <span className="align-self-center text-center">It is thought that this mineral composes nearly the entirety of the lower mantle.</span>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <h3 className="mt-auto align-self-center text-center">55%</h3>
              <span className="align-self-center text-center">Percentage of Earth's volume found in the Lower Mantle - the majority of the planet</span>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

              <h3 className="align-self-center text-center">5.5 Tonnes</h3>
              <span className="align-self-center text-center">The weight per cubic meter of lower mantle, twice the weight of concrete.</span>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
          </div>

          <div id="pane-4" className="panel row" style={{ "height": "100px" }}>
            <Ruler
              min={2900}
              max={3000}
              height={100} />
            <div className="col-2 d-flex flex-column justify-content-end">
              <h3 className="align-self-start text-center">D-LAYER</h3>
            </div>
            <div className="col-8 col-md-4 d-flex flex-column justify-content-center">
              <h4 className="align-self-center text-center">10.4 terawatts</h4>
              <span className="align-self-center text-center">The amount of heat that flows across the Core/Mantle Boundary, around 60% of human civilization's power usage.</span>
            </div>
          </div>
          <div id="pane-3" className="panel row" style={{ "height": "2000px" }}>
            <Ruler
              min={3000}
              max={5000}
              height={2000} />
            <div className="col-2 d-flex flex-column justify-content-end">
              <h3 className="align-self-start text-center">OUTER CORE</h3>
            </div>
            <div className="col-8 col-md-4 d-flex flex-column justify-content-center">
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <img alt="" className="align-self-center text-center" src={magnetic} height="150px" />
              <span className="align-self-center text-center">Earth's magnetic field is 100x stronger than Mercury's. Earth has the strongest magnetic field of all the inner planets.</span>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <img alt="" className="align-self-center" src={lizard} height="150px" />
              <span className="align-self-center text-center">According to Jules Verne's 1864 novel, whirpools, mushrooms, giant lizards and the Lost City of Atlantis can be found here.</span>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <h3 className="mt-auto align-self-center text-center">4641km</h3>
              <span className="align-self-center text-center">Radius of the Moon</span>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
          </div>

          <div id="pane-2" className="panel row" style={{ "height": "200px" }}>
            <Ruler
              min={5000}
              max={5200}
              height={200} />
            <div className="col-2 d-flex flex-column justify-content-end">
              <h3 className="align-self-start text-center">LIQUID SOLID BOUNDARY</h3>
            </div>
            <div className="col-8 col-md-4 d-flex flex-column justify-content-center">
              <span className="align-self-center text-center">Behavior of Iron at these temperatures and pressures is a mystery to scientists.</span>
              <br />
            </div>
          </div>

          <div id="pane-1" className="panel row" style={{ "height": "1200px" }}>
            <Ruler
              min={5200}
              max={6371}
              height={1200} />
            <div className="col-2 d-flex flex-column justify-content-end">
              <h3 className="align-self-start text-center">INNER CORE</h3>
              <br />
            </div>
            <div className="col-8 col-md-4 d-flex flex-column justify-content-center">
              <h3 className="align-self-center text-center">5400°C/9,392°F</h3>
              <span className="align-self-center text-center">The inner core is as hot as the surface of the sun.</span>
              <br /><br /><br /><br /><br />
              <img alt="" className="align-self-center text-center" src={gold} height="150px" />
              <span className="align-self-center text-center">99% of Earth's gold and platinum is thought to be found in the core. This is enough gold to cover the earth in a layer 0:5m deep.</span>
              <br /><br /><br /><br /><br />
              <img alt="" className="align-self-center" src={rclock} height="150px" />
              <span className="align-self-center text-center">It took <b>500 million years</b> for the iron core to form, meaning the core is actually younger than some parts of the crust.</span>
              <br /><br /><br /><br /><br />
            </div>

          </div>

          <a className="float">
            {!running ?
              <a onClick={() => { setRunning(true) }} className="journey btn btn-success align-self-center text-center"><AiFillPlayCircle tag={1} className="journey" size={30} /></a> :
              <a onClick={() => { setRunning(false) }} className="journey btn btn-danger align-self-center text-center"><AiFillPauseCircle className="journey" size={30} /></a>
            }
          </a>
        </div>
      </div >
    </div >
  )
}

export default Earth