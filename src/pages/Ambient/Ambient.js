import React, { useEffect, useState } from "react";

import { CircleSlider } from 'react-circle-slider';
import ReactPlayer from 'react-player'
import { BrowserView, MobileView } from 'react-device-detect';

import bee from '../../assets/ambient/bee.png'
import bird from '../../assets/ambient/bird.png'
import chat from '../../assets/ambient/chat.png'
import fire from '../../assets/ambient/fire.png'
import guitar from '../../assets/ambient/guitar.png'
import jazz from '../../assets/ambient/jazz.png'
import rain from '../../assets/ambient/rain.png'
import river from '../../assets/ambient/river.png'
import snow from '../../assets/ambient/snow.png'
import thunder from '../../assets/ambient/thunder.png'
import wind from '../../assets/ambient/wind.png'

import beeG from '../../assets/ambient/gifs/bee.gif'
import birdG from '../../assets/ambient/gifs/bird.gif'
import chatG from '../../assets/ambient/gifs/chat.gif'
import fireG from '../../assets/ambient/gifs/fire.gif'
import guitarG from '../../assets/ambient/gifs/guitar.gif'
import jazzG from '../../assets/ambient/gifs/jazz.gif'
import rainG from '../../assets/ambient/gifs/rain.gif'
import riverG from '../../assets/ambient/gifs/river.gif'
import snowG from '../../assets/ambient/gifs/snow.gif'
import thunderG from '../../assets/ambient/gifs/thunder.gif'
import windG from '../../assets/ambient/gifs/wind.gif'
import HeadNav from "../../components/HeadNav";

const Ambient = () => {

  //FIRE BEAT
  const [fireVolume, setFireVolume] = useState(0);
  const [firePlaying, setFirePlaying] = useState(false);
  //WAVE BEAT
  const [waveVolume, setWaveVolume] = useState(0);
  const [wavePlaying, setWavePlaying] = useState(false);
  //RAIN BEAT
  const [rainVolume, setRainVolume] = useState(0);
  const [rainPlaying, setRainPlaying] = useState(false);
  //THUNDEER BEAT
  const [thunderVolume, setThunderVolume] = useState(0);
  const [thunderPlaying, setThunderPlaying] = useState(false);
  //BIRDS BEAT
  const [birdsVolume, setBirdsVolume] = useState(0);
  const [birdsPlaying, setBirdsPlaying] = useState(false);
  //GUITAR BEAT
  const [guitarVolume, setGuitarVolume] = useState(0);
  const [guitarPlaying, setGuitarPlaying] = useState(false);
  //JAZZ BEAT
  const [jazzVolume, setJazzVolume] = useState(0);
  const [jazzPlaying, setJazzPlaying] = useState(false);
  //CHAT BEAT
  const [chatVolume, setChatVolume] = useState(0);
  const [chatPlaying, setChatPlaying] = useState(false);
  //BEE BEAT
  const [beeVolume, setBeeVolume] = useState(0);
  const [beePlaying, setBeePlaying] = useState(false);
  //SNOW BEAT
  const [snowVolume, setSnowVolume] = useState(0);
  const [snowPlaying, setSnowPlaying] = useState(false);
  //WIND BEAT
  const [windVolume, setWindVolume] = useState(0);
  const [windPlaying, setWindPlaying] = useState(false);

  function turnOff() {
    setFirePlaying(false); setFireVolume(0);
    setWavePlaying(false); setWaveVolume(0);
    setRainPlaying(false); setRainVolume(0);
    setThunderPlaying(false); setThunderVolume(0);
    setBirdsPlaying(false); setBirdsVolume(0);
    setGuitarPlaying(false); setGuitarVolume(0);
    setJazzPlaying(false); setJazzVolume(0);
    setChatPlaying(false); setChatVolume(0);
    setBeePlaying(false); setBeeVolume(0);
    setSnowPlaying(false); setSnowVolume(0);
    setWindPlaying(false); setWindVolume(0);
  }

  function nature() {
    turnOff();
    setWavePlaying(true); setWaveVolume(0.125);
    setBirdsPlaying(true); setBirdsVolume(0.5);
    setBeePlaying(true); setBeeVolume(0.125);
    setWindPlaying(true); setWindVolume(0.05);
  }
  function rainyDay() {
    turnOff();
    setWavePlaying(true); setWaveVolume(0.1);
    setRainPlaying(true); setRainVolume(0.25);
  }
  function naturalDisaster() {
    turnOff();
    setWavePlaying(true); setWaveVolume(0.05);
    setWindPlaying(true); setWindVolume(0.25);
    setRainPlaying(true); setRainVolume(0.25);
    setSnowPlaying(true); setSnowVolume(0.5);
    setThunderPlaying(true); setThunderVolume(0.5);
  }
  function natureCamping() {
    turnOff();
    setFirePlaying(true); setFireVolume(0.75);
    setWavePlaying(true); setWaveVolume(0.05);
    setBirdsPlaying(true); setBirdsVolume(0.5);
    setGuitarPlaying(true); setGuitarVolume(0.15);
    setBeePlaying(true); setBeeVolume(0.125);
  }
  function alone() {
    turnOff();
    setFirePlaying(true); setFireVolume(1);
    setWavePlaying(true); setWaveVolume(0.1);
    setRainPlaying(true); setRainVolume(0.2);
  }
  function smoothConcert() {
    turnOff();
    setJazzPlaying(true); setJazzVolume(0.25);
    setChatPlaying(true); setChatVolume(0.125);
  }



  useEffect(() => {
    if (document.getElementById("env") === null) return;
    var backgroundImage = "";
    var backgroundRepeat = "";
    var backgroundPosition = "";
    var backgroundSize = "";

    if (rainPlaying === true) {
      backgroundImage += "url(" + rainG + "),";
      backgroundRepeat += "repeat,"
      backgroundPosition += "100%,"
      backgroundSize += "auto,"
    }
    if (snowPlaying === true) {
      backgroundImage += "url(" + snowG + "),";
      backgroundRepeat += "repeat,"
      backgroundPosition += "0%,"
      backgroundSize += "500px,"
    }
    if (windPlaying === true) {
      backgroundImage += "url(" + windG + "),";
      backgroundRepeat += "no-repeat,"
      backgroundPosition += "10% -50%,"
      backgroundSize += "auto 50%,"
    }
    if (thunderPlaying === true) {
      backgroundImage += "url(" + thunderG + "),";
      backgroundRepeat += "no-repeat,"
      backgroundPosition += "-50% 100%,"
      backgroundSize += "1000px,"
    }
    if (birdsPlaying === true) {
      backgroundImage += "url(" + birdG + "),";
      backgroundRepeat += "no-repeat,"
      backgroundPosition += "0%,"
      backgroundSize += "auto,"
    }
    if (firePlaying === true) {
      backgroundImage += "url(" + fireG + "),";
      backgroundRepeat += "no-repeat,"
      backgroundPosition += "50% 90%,"
      backgroundSize += "75px,"
    }
    if (guitarPlaying === true) {
      backgroundImage += "url(" + guitarG + "),";
      backgroundRepeat += "no-repeat,"
      backgroundPosition += "70% 90%,"
      backgroundSize += "125px,"
    }
    if (jazzPlaying === true) {
      backgroundImage += "url(" + jazzG + "),";
      backgroundRepeat += "no-repeat,"
      backgroundPosition += "35% 90%,"
      backgroundSize += "70px,"
    }
    if (chatPlaying === true) {
      backgroundImage += "url(" + chatG + "),url(" + chatG + "),url(" + chatG + "),";
      backgroundRepeat += "no-repeat,no-repeat,no-repeat,"
      backgroundPosition += "50% 70%,40% 70%,60% 70%,"
      backgroundSize += "75px,50px,50px,"
    }
    if (wavePlaying === true) {
      backgroundImage += "url(" + riverG + "),";
      backgroundRepeat += "no-repeat,"
      backgroundPosition += "-20%,"
      backgroundSize += "auto,"
    }
    if (beePlaying === true) {
      backgroundImage += "url(" + beeG + "),";
      backgroundRepeat += "no-repeat,"
      backgroundPosition += "75% 25%,"
      backgroundSize += "250px 100px,"
    }

    document.getElementById("env").style.backgroundImage = backgroundImage.substring(0, backgroundImage.length - 1);
    document.getElementById("env").style.backgroundRepeat = backgroundRepeat.substring(0, backgroundRepeat.length - 1);;
    document.getElementById("env").style.backgroundPosition = backgroundPosition.substring(0, backgroundPosition.length - 1);;
    document.getElementById("env").style.backgroundSize = backgroundSize.substring(0, backgroundSize.length - 1);;

  }, [firePlaying, wavePlaying, rainPlaying, thunderPlaying, birdsPlaying, guitarPlaying, jazzPlaying, chatPlaying, beePlaying, snowPlaying, windPlaying])

  return (

    <div className="container-fluid">
      
      <HeadNav title={"AMBIENT CREATOR"} />
      <br />

      <MobileView>
        <br />
        <div className="row">
          <div className="col-12 text-center">
            <h1>Not supported on mobile devices</h1>
          </div>
        </div>
      </MobileView>

      <BrowserView>
        <div className="row">
          <div className="col-3 text-center">
            <div className="row">
              <div className="col-12 text-center" className="invert" style={{ "backgroundImage": "url(" + fire + ")" }}>
                <CircleSlider gradientColorFrom="#FEA346" value={fireVolume * 100}
                  gradientColorTo="#F8616D"
                  progressWidth={10} onChange={e => { setFireVolume(e / 100); setFirePlaying(e > 5) }} />
              </div>
            </div>

            <div className="row">
              <div className="col-12 text-center" className="invert" style={{ "backgroundImage": "url(" + river + ")" }}>
                <CircleSlider gradientColorFrom="#FEA346" value={waveVolume * 100}
                  gradientColorTo="#F8616D"
                  progressWidth={10} onChange={e => { setWaveVolume(e / 100); setWavePlaying(e > 5) }} />
              </div>
            </div>

            <div className="row">
              <div className="col-12 text-center" className="invert" style={{ "backgroundImage": "url(" + rain + ")" }}>
                <CircleSlider gradientColorFrom="#FEA346" value={rainVolume * 100}
                  gradientColorTo="#F8616D"
                  progressWidth={10} onChange={e => { setRainVolume(e / 100); setRainPlaying(e > 5) }} />
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center" className="invert" style={{ "backgroundImage": "url(" + thunder + ")" }}>
                <CircleSlider gradientColorFrom="#FEA346" value={thunderVolume * 100}
                  gradientColorTo="#F8616D"
                  progressWidth={10} onChange={e => { setThunderVolume(e / 100); setThunderPlaying(e > 5) }} />
              </div>
            </div>
          </div>
          <div className="col-6 text-center">
            <div className="row">
              <figure id="env" className="env">

              </figure>
            </div>
            <div className="row">
              <div className="col-4 text-center invert" style={{ "backgroundImage": "url(" + bird + ")" }}>
                <CircleSlider gradientColorFrom="#FEA346" value={birdsVolume * 100}
                  gradientColorTo="#F8616D"
                  progressWidth={10} onChange={e => { setBirdsVolume(e / 100); setBirdsPlaying(e > 5) }} />
              </div>
              <div className="col-4 text-center invert" style={{ "backgroundImage": "url(" + guitar + ")" }}>
                <CircleSlider gradientColorFrom="#FEA346" value={guitarVolume * 100}
                  gradientColorTo="#F8616D"
                  progressWidth={10} onChange={e => { setGuitarVolume(e / 100); setGuitarPlaying(e > 5) }} />
              </div>
              <div className="col-4 text-center invert" style={{ "backgroundImage": "url(" + jazz + ")" }}>
                <CircleSlider gradientColorFrom="#FEA346" value={jazzVolume * 100}
                  gradientColorTo="#F8616D"
                  progressWidth={10} onChange={e => { setJazzVolume(e / 100); setJazzPlaying(e > 5) }} />
              </div>
            </div>
          </div>

          <div className="col-3 text-center">
            <div className="row">
              <div className="col-12 text-center" className="invert" style={{ "backgroundImage": "url(" + wind + ")" }}>
                <CircleSlider gradientColorFrom="#FEA346" value={windVolume * 100}
                  gradientColorTo="#F8616D"
                  progressWidth={10} onChange={e => { setWindVolume(e / 100); setWindPlaying(e > 5) }} />
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center" className="invert" style={{ "backgroundImage": "url(" + snow + ")" }}>
                <CircleSlider gradientColorFrom="#FEA346" value={snowVolume * 100}
                  gradientColorTo="#F8616D"
                  progressWidth={10} onChange={e => { setSnowVolume(e / 100); setSnowPlaying(e > 5) }} />
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center" className="invert" style={{ "backgroundImage": "url(" + bee + ")" }}>
                <CircleSlider gradientColorFrom="#FEA346" value={beeVolume * 100}
                  gradientColorTo="#F8616D"
                  progressWidth={10} onChange={e => { setBeeVolume(e / 100); setBeePlaying(e > 5) }} />
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center" className="invert" style={{ "backgroundImage": "url(" + chat + ")" }}>
                <CircleSlider gradientColorFrom="#FEA346" value={chatVolume * 100}
                  gradientColorTo="#F8616D"
                  progressWidth={10} onChange={e => { setChatVolume(e / 100); setChatPlaying(e > 5) }} />
              </div>
            </div>

          </div>
        </div>

        <br /><br /><br />

        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <button type="button" className="btn btn-danger" onClick={e => { turnOff(); }}>TURN OFF</button>
          </div>
          <br /><br /><br />
          <div className="col-12 text-center">
            <h2>Samples</h2>
          </div>
          <br />
          <br />

          <div className="row justify-content-center">
            <div className="col-2 text-center">
              <button type="button" className="btn btn-dark" onClick={e => { nature(); }}>NATURE SOUNDS</button>
            </div>
            <div className="col-2 text-center">
              <button type="button" className="btn btn-dark" onClick={e => { rainyDay(); }}>RAINY NIGHT</button>
            </div>
            <div className="col-2 text-center">
              <button type="button" className="btn btn-dark" onClick={e => { naturalDisaster(); }}>NATURAL DISASTER</button>
            </div>
          </div>
          <br /><br /><br />
          <div className="row justify-content-center">
            <div className="col-2 text-center">
              <button type="button" className="btn btn-dark" onClick={e => { natureCamping(); }}>CAMPING TRIP</button>
            </div>
            <div className="col-2 text-center">
              <button type="button" className="btn btn-dark" onClick={e => { alone(); }}>LOST IN NATURE</button>
            </div>
            <div className="col-2 text-center">
              <button type="button" className="btn btn-dark" onClick={e => { smoothConcert(); }}>SMOOTH CONCERT</button>
            </div>
          </div>
        </div>

        <ReactPlayer url={'https://www.youtube.com/watch?v=eyU3bRy2x44'} volume={fireVolume} playing={firePlaying} controls={false} style={{ "display": "none" }} />

        <ReactPlayer url={'https://www.youtube.com/watch?v=RKMEMLJL3Oc'} volume={waveVolume} playing={wavePlaying} controls={false} style={{ "display": "none" }} />

        <ReactPlayer url={'https://www.youtube.com/watch?v=q76bMs-NwRk'} volume={rainVolume} playing={rainPlaying} controls={false} style={{ "display": "none" }} />

        <ReactPlayer url={'https://www.youtube.com/watch?v=V3-Ex0WOrI8'} volume={thunderVolume} playing={thunderPlaying} controls={false} style={{ "display": "none" }} />


        <ReactPlayer url={'https://www.youtube.com/watch?v=rYoZgpAEkFs'} volume={birdsVolume} playing={birdsPlaying} controls={false} style={{ "display": "none" }} />

        <ReactPlayer url={'https://www.youtube.com/watch?v=sODc9VJ7ZrI'} volume={guitarVolume} playing={guitarPlaying} controls={false} style={{ "display": "none" }} />

        <ReactPlayer url={'https://www.youtube.com/watch?v=VUi1PX5m84Q'} volume={jazzVolume} playing={jazzPlaying} controls={false} style={{ "display": "none" }} />


        <ReactPlayer url={'https://www.youtube.com/watch?v=8vGan2TZwbs'} volume={windVolume} playing={windPlaying} controls={false} style={{ "display": "none" }} />

        <ReactPlayer url={'https://www.youtube.com/watch?v=GCzBeJIyhP0'} volume={snowVolume} playing={snowPlaying} controls={false} style={{ "display": "none" }} />

        <ReactPlayer url={'https://www.youtube.com/watch?v=oEulVp5q4oU'} volume={beeVolume} playing={beePlaying} controls={false} style={{ "display": "none" }} />

        <ReactPlayer url={'https://www.youtube.com/watch?v=h2zkV-l_TbY'} volume={chatVolume} playing={chatPlaying} controls={false} style={{ "display": "none" }} />

      </BrowserView>


    </div>

  )
}

export default Ambient