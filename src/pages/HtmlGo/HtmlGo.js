import React, { useEffect, useRef, useState } from "react";
import useStateRef from 'react-usestateref'
import Draggable from "react-draggable";
import ReactHtmlParser from 'react-html-parser';

import { MdQueuePlayNext } from 'react-icons/md'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete, AiOutlineDrag } from 'react-icons/ai'

import './HtmlGo.css'
import HeadNav from "../../components/HeadNav";
import Modal from "react-modal";

const HtmlGo = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    const [code, setCode] = useState("")
    const [element, setElement] = useState()
    const [elements, setElements] = useState([])

    const [right, setRight] = useState()
    const [bottom, setBottom] = useState()

    const [id, setId] = useState(1)

    useEffect(() => {
        const val = document.getElementById("playground").getBoundingClientRect();
        setRight(val.width)
        setBottom(val.height - 50)
    })

    const process = (code, id) => {
        try {
            let as = code.trim()
            const el = ReactHtmlParser(code);
            setElement(el);
            if (as !== '') {
                setCode(code);
            } else {
                setCode(as);
            }
        } catch {
            alert("ERROR")
        }
    }


    const handleEditClick = (id) => {
        if (document.getElementById(id) !== null) {
            process(document.getElementById(id).innerHTML, id)
        }
    }

    const handleDeleteClick = (id) => {
        document.getElementById(id).parentElement.remove();
    }

    const spawn = () => {
        if (code !== "") {
            let test = elements;
            test.push(<Draggable handle=".handle" bounds={{ left: -10, top: -10, right: right, bottom: bottom }} grid={[10, 10]}>
                <div className="element-parent">
                    <div className="element">
                        <div id={id} className="hovered">{element}</div>
                        &nbsp;
                        <a className="handle el-btn btn btn-warning text-center"><AiOutlineDrag /></a>
                        &nbsp;
                        <a className="el-btn btn btn-secondary text-center" onTouchEnd={(e) => handleEditClick(id)} onClick={(e) => handleEditClick(id)}><BiEdit /></a>
                        &nbsp;
                        <a className="el-btn btn btn-danger text-center" onTouchEnd={(e) => handleDeleteClick(id)} onClick={(e) => handleDeleteClick(id)}><AiFillDelete /></a>
                    </div>

                </div>
            </Draggable>)
            setId(id + 1)
            setElements(test);
            process("");
        }
    }


    const customStyles = {
        content: {
            width: "50vw",
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgb(44, 44, 44)'
        },
    };

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }


    return (
        <React.Fragment>
            <HeadNav title={"CODE-GO"} />
            <div id="html-go" className="container-fluid">

                <div className="row justify-content-center justify-content-center">
                    <div id="toolbar" className="col-3">
                        <div id="creator" className="row text-center">
                            <div className="col-8">
                                <textarea value={code} onChange={(e) => { process(e.target.value) }} />
                                <br /><br />
                                <div id="preview" style={{ height: "150px" }}>
                                    <div className="d-flex align-items-middle">
                                        {element}
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 d-flex align-items-center justify-content-center">
                                <div className="btn btn-warning" onClick={(e) => { spawn(); }}>Spawn &nbsp;<MdQueuePlayNext /></div>
                            </div>
                            <br />
                        </div>
                        <div className="row text-center justify-content-center">
                            <span>How to?</span>
                            <div className="row justify-content-center">
                                <button onClick={() => openModal()} className="btn btn-warning col-6">Heading</button>
                            </div>
                        </div>
                    </div>
                    <div id="playground" className="col-8">
                        {elements}
                    </div>
                </div>

                <Modal
                    ariaHideApp={false}
                    isOpen={modalIsOpen}
                    onRequestClose={() => closeModal()}
                    style={customStyles}
                    contentLabel="Example Modal">
                    <React.Fragment>
                        <div className="row justify-content-center">
                            <div className="col-8">
                                <h1>Heading 1</h1>
                                <h2>Heading 2</h2>
                                <h3>Heading 3</h3>
                                <h4>Heading 4</h4>
                                <h5>Heading 5</h5>
                                <h6>Heading 6</h6>
                            </div>
                            <div className="col-4">
                                <span>{"<h1>Heading 1</h1>"}</span>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <button className="col-6 btn btn-secondary" onClick={() => closeModal()}>Close</button>
                        </div>
                    </React.Fragment>
                </Modal>
            </div>

        </React.Fragment>
    )
}

export default HtmlGo