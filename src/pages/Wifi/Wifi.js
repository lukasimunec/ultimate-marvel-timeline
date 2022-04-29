import React, { useEffect, useState } from "react";
import QRCode from 'qrcode'
import html2canvas from "html2canvas";
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';
import { BlockPicker } from 'react-color'
import { MobileView } from 'react-device-detect';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import { NavLink } from "react-router-dom";

import './Wifi.css'

import first from '../../assets/wifi/1.jpg'
import second from '../../assets/wifi/2.jpg'
import third from '../../assets/wifi/3.jpg'
import fourth from '../../assets/wifi/4.jpg'
import HeadNav from "../../components/HeadNav";

const Sprint = () => {

    const colors = ["#FFFFFF", "#000000", "#697689", "#d9e3f0", "#f47373", "#37d67a", "#556B2F", "#FFCC00", "#880808", "#2ccce4", "#000080", "#555555", "#dce775", "#ff8a65", "#ba68c8"];

    const [qrSrc, setQrSrc] = useState("")

    const [design, setDesign] = useState(0);
    const [title, setTitle] = useState("Welcome ❤️");
    const [subtitle, setSubtitle] = useState("TO OUR HOME");
    const [showName, setShowName] = useState(true);
    const [showPass, setShowPass] = useState(true);
    const [netName, setNetName] = useState("Bronion-wifi");
    const [netType, setNetType] = useState("WPA");
    const [netPassword, setNetPassword] = useState("Bronions123");


    const [bgColor, setBgColor] = useState("#FFF");
    const [textColor, setTextColor] = useState("#000");
    const [qrColor, setQrColor] = useState("#000");


    const generateQR = async text => {
        try {
            const str = "WIFI:S:" + netName + ";T:" + netType + ";P:" + netPassword + ";;";
            setQrSrc(await QRCode.toDataURL(str, { color: { dark: qrColor, light: "#0000" } }));
        } catch (err) {
            console.error(err)
        }
    }

    function capture(id) {
        html2canvas(document.querySelector("#" + id), { scale: 2 }).then(canvas => {
            var link = document.createElement('a');
            link.download = 'frame-your-wifi.png';
            link.href = canvas.toDataURL()
            link.click();
        });
    }

    useEffect(() => {
        var els = document.getElementsByClassName("main");
        Array.prototype.forEach.call(els, function (el) {
            el.style.background = bgColor;
            el.style.color = textColor;
        });
    }, [bgColor, textColor, qrColor, design])

    useEffect(() => {
        generateQR();
    }, [netName, netType, netPassword, bgColor, textColor, qrColor, design])

    return (
        <div id="wifi" className="container">
            
            <HeadNav title={"FRAME YOUR WIFI"} />
            <div className="col-12 text-center">
                <MobileView>
                    <span>For the best experience, use desktop browser!</span>
                </MobileView>
            </div>
            <br />
            <MobileView>
                <div className="col-12 text-center">
                    <span>Preview not responsive for mobile device</span>
                </div>
            </MobileView>
            <div className="row justify-content-center">
                <div className="col-12 col-md-6" style={{ "marginBottom": "50px" }}>
                    <AwesomeSlider onTransitionStart={e => { setDesign(e.nextIndex); }} style={{ "height": "540px" }} infinite={false}>
                        <div className="row justify-content-center ">
                            <div className="frame">
                                <div id="main-0" className="main">
                                    <div className="row">
                                        <h1 className="text-center" style={{ "marginTop": "10px" }}>{title}</h1>
                                        <h2 className="text-center"><i>{subtitle}</i></h2>
                                    </div>
                                    <div className="row" style={{ "marginTop": "20px" }}>
                                        <div className="col-12 text-center">
                                            <img src={qrSrc} height="200px" />
                                        </div>
                                    </div>
                                    <div className="row" style={{ "marginTop": "0px" }}>
                                        <div className="col-12 text-center">
                                            <h5><i>scan to join our wifi</i></h5>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center" style={{ "marginTop": "30px" }}>
                                        {showName ?
                                            <div className="col-6 text-center">
                                                <h5>NETWORK NAME</h5>
                                                <span>{netName}</span>
                                            </div> : null
                                        }
                                        {showPass ?
                                            <div className="col-6 text-center">
                                                <h5>PASSWORD</h5>
                                                <span>{netPassword}</span>
                                            </div> : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="frame">
                                <div id="main-1" className="main">
                                    <div className="row">
                                        <h1 style={{ "marginTop": "50px" }}>{title}</h1>
                                        <h2><i>{subtitle}</i></h2>
                                    </div>
                                    <div className="row" style={{ "marginTop": "100px" }}>
                                        <div className="col-6">
                                            <br />
                                            {showName ?
                                                <div><h5>NETWORK NAME</h5>
                                                    <span>{netName}</span>
                                                    <br /><br />
                                                </div> : null}
                                            {showPass ?
                                                <div>
                                                    <h5>PASSWORD</h5>
                                                    <span>{netPassword}</span>
                                                </div> : null

                                            }
                                        </div>
                                        <div className="col-6 text-center">
                                            <img src={qrSrc} height="200px" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="frame">
                                <div id="main-2" className="main" >
                                    <div className="row justify-content-center">
                                        <h1 className="text-center" style={{ "marginTop": "50px" }}>{title}</h1>
                                    </div>
                                    <div className="row justify-content-center" style={{ "marginTop": "50px" }}>
                                        <div className="col-3 text-center d-flex flex-column justify-content-center">
                                            {showName ?
                                                <div>
                                                    <h5>NETWORK NAME</h5>
                                                    <span>{netName}</span>
                                                </div> : null}
                                        </div>
                                        <div className="col-6 text-center">
                                            <img src={qrSrc} height="200px" />
                                        </div>
                                        <div className="col-3 text-center d-flex flex-column justify-content-center">
                                            {showPass ?
                                                <div>
                                                    <h5>PASSWORD</h5>
                                                    <span>{netPassword}</span>
                                                </div> : null
                                            }
                                        </div>
                                    </div>
                                    <div className="row justify-content-center" style={{ "marginTop": "50px" }}>
                                        <h2 className="text-center"><i>{subtitle}</i></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AwesomeSlider>
                </div>
                <div className="row col-12 col-md-6">
                    <form className="col-6">
                        <h4>General Settings</h4>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Enter Title</label>
                            <input value={title} onChange={e => { setTitle(e.target.value) }} type="text" maxLength="25" className="form-control" placeholder="Enter username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Enter Subtitle</label>
                            <input value={subtitle} onChange={e => { setSubtitle(e.target.value) }} type="text" maxLength="30" className="form-control" placeholder="Enter username" />
                        </div>
                        <br />
                        <div className="form-check">
                            <input defaultChecked={showName} onChange={() => setShowName(!showName)} type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Show WiFi Name</label>
                        </div>
                        <div className="form-check">
                            <input defaultChecked={showPass} onChange={() => setShowPass(!showPass)} type="checkbox" className="form-check-input" id="exampleCheck2" />
                            <label className="form-check-label" htmlFor="exampleCheck2">Show WiFi Password</label>
                        </div>

                    </form>

                    <form className="col-6">
                        <h4>Network Settings</h4>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Enter WiFi Name</label>
                            <input value={netName} onChange={e => { setNetName(e.target.value) }} type="text" maxLength="32" className="form-control" placeholder="Enter username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputState">Pick WiFi Type</label>
                            <select defaultValue="WPA" onChange={e => {
                                setNetType(document.getElementById("inputState").value);
                            }} id="inputState" className="form-control">
                                <option value="WPA">WPA</option>
                                <option value="WEP">WEP</option>
                                <option value="nopass">No Encryption</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Enter WiFi Password</label>
                            <input value={netPassword} onChange={e => { setNetPassword(e.target.value) }} type="text" maxLength="50" className="form-control" placeholder="Enter username" />
                        </div>
                        <br />
                    </form>
                    <form className="col-4 col-md-4 text-center">
                        <br />
                        <h4>BG<br />Color</h4>
                        <div className="row justify-content-center">
                            <BlockPicker
                                colors={colors}
                                color={bgColor}
                                onChangeComplete={color => setBgColor(color.hex)} />
                        </div>
                    </form>
                    <form className="col-4 col-md-4  text-center">
                        <br />
                        <h4>Text<br />Color</h4>
                        <div className="row justify-content-center">
                            <BlockPicker
                                colors={colors}
                                color={textColor}
                                onChangeComplete={color => setTextColor(color.hex)} />
                        </div>
                    </form>
                    <form className="col-4 col-md-4 text-center">
                        <br />
                        <h4>QR<br />Color</h4>
                        <div className="row justify-content-center">
                            <BlockPicker
                                colors={colors}
                                color={qrColor}
                                onChangeComplete={color => setQrColor(color.hex)} />
                        </div>
                    </form>

                </div>
            </div>
            <br />
            <br />
            <div className="col-12 text-center">
                <button onClick={e => { e.preventDefault(); capture("main-" + design); }} className="btn btn-warning"><b>Download Your Design</b></button>
            </div>
            <br />
            <br />
            <br />
            <article>
                <div className="row justify-content-center">

                    <div className="row justify-content-center bg-steps">
                        <div className="col-12 col-md-2 text-center d-flex flex-column align-items-center">
                            <h6 className="p-2">🖌️</h6>
                            <h5 className="p-2"><b>1. Use slider to pick any design you like</b></h5>
                        </div>
                        <div className="col-12 col-md-2 text-center d-flex flex-column align-items-center">
                            <h6 className="p-2">📝</h6>
                            <h5 className="p-2"><b>2. Enter title and subtitle</b></h5>
                        </div>
                        <div className="col-12 col-md-2 text-center d-flex flex-column align-items-center">
                            <h6 className="p-2">⚙️</h6>
                            <h5 className="p-2"><b>3. Enter network settings</b></h5>
                        </div>
                        <div className="col-12 col-md-2 text-center d-flex flex-column align-items-center">
                            <h6 className="p-2">🎨</h6>
                            <h5 className="p-2"><b>4. Choose Background, Text and QR color</b></h5>
                        </div>
                        <div className="col-12 col-md-2 text-center d-flex flex-column align-items-center">
                            <h6 className="p-2">🎉🖼️🎉</h6>
                            <h5 className="p-2"><b>5. Download and frame</b></h5>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 text-center">
                        <br />
                        <h6>"Frame Your WiFi" is a free to use tool for generating frameable WiFi QR Code.
                            Create your own personalized WiFi picture and impress your friends and family. Ideal for homes, coffee shops, apartments and hotels.
                            <br />
                            <br />
                            <b>- Check out examples -</b>
                        </h6>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-12 text-center showcase">
                            <AwesomeSlider animation="cubeAnimation">
                                <div data-src={first} alt="Coffee shop example for customers." />
                                <div data-src={second} alt="Family home example for guests." />
                                <div data-src={third} alt="Apartments example for WiFi included in reservations." />
                                <div data-src={fourth} alt="Shop example for clients." />
                            </AwesomeSlider>
                            <br />
                            <br />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-10 text-center">
                            <span><i>Disclaimer: This website does not store any sensitive data - <NavLink to="/privacy-policy">Privacy Policy</NavLink></i></span>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Sprint