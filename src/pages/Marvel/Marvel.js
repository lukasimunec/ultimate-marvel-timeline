import React, { useEffect, useRef } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { BrowserView } from "react-device-detect";
import ReactHtmlParser from 'react-html-parser';
import 'react-vertical-timeline-component/style.min.css';

import './Marvel.css'

import agentsShield from '../../assets/marvel/agents_shield.png'
import captainAmerica from '../../assets/marvel/captain_america.png'
import agentCarter from '../../assets/marvel/agent_carter.png'
import captainMarvel from '../../assets/marvel/captain_marvel.png'
import lukeCage from '../../assets/marvel/luke_cage.png'
import daredevil from '../../assets/marvel/daredevil.png'
import jessicaJones from '../../assets/marvel/jessica_jones.png'
import antMan from '../../assets/marvel/ant_man.png'
import avengers from '../../assets/marvel/avengers.png'
import guardians from '../../assets/marvel/guardians.png'
import thor from '../../assets/marvel/thor.png'
import ironMan from '../../assets/marvel/iron_man.png'
import hulk from '../../assets/marvel/hulk.png'
import oneshot from '../../assets/marvel/oneshot.png'
import ironFist from '../../assets/marvel/iron_fist.png'
import defenders from '../../assets/marvel/defenders.png'
import spiderman from '../../assets/marvel/spiderman.png'
import punisher from '../../assets/marvel/punisher.png'
import doctorStrange from '../../assets/marvel/doctor_strange.png'
import blackPanther from '../../assets/marvel/black_panther.png'
import cloakDagger from '../../assets/marvel/cloak_dagger.png'
import runaways from '../../assets/marvel/runaways.png'
import inhumans from '../../assets/marvel/inhumans.png'
import blackWidow from '../../assets/marvel/black_widow.png'
import wandaVision from '../../assets/marvel/wanda_vision.png'
import loki from '../../assets/marvel/loki.png'
import hawkeye from '../../assets/marvel/hawkeye.png'
import eternals from '../../assets/marvel/eternals.png'
import shangChi from '../../assets/marvel/shang_chi.png'

import time from '../../assets/marvel/time.png'
import Stream from '../../components/Stream/Stream.js'
import DomToImage from "dom-to-image";

import HeadNav from '../../components/HeadNav'


const Marvel = () => {

    const imdbAgentsOfShield = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt2364582" data-style="p2"><a href="https://www.imdb.com/title/tt2364582/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Agents of S.H.I.E.L.D. (2013) on IMDb" /></a></span>');
    const imdbFirstAvenger = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt0458339" data-style="p2"><a href="https://www.imdb.com/title/tt0458339/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Captain America: The First Avenger (2011) on IMDb" /></a></span>');
    const imdbOSAgentCarter = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt3067038" data-style="p2"><a href="https://www.imdb.com/title/tt3067038/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Marvel One-Shot: Agent Carter (2013) on IMDb" /></a></span>');
    const imdbAgentCarter = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt3475734" data-style="p2"><a href="https://www.imdb.com/title/tt3475734/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Agent Carter (2015) on IMDb" /></a></span>')
    const imdbCaptainMarvel = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt4154664" data-style="p2"><a href="https://www.imdb.com/title/tt4154664/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Captain Marvel(2019) on IMDb" /></a></span>')
    const imdbIronMan = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt0371746" data-style="p2"><a href="https://www.imdb.com/title/tt0371746/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Iron Man (2008) on IMDb" /></a></span>')
    const imdbIronMan2 = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt1228705" data-style="p2"><a href="https://www.imdb.com/title/tt1228705/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Iron Man 2 (2010) on IMDb" /></a></span>')
    const imdbHulk = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt0800080" data-style="p2"><a href="https://www.imdb.com/title/tt0800080/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" The Incredible Hulk (2008) on IMDb" /></a></span>')
    const imdbOSConsultant = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt2011118" data-style="p2"><a href="https://www.imdb.com/title/tt2011118/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Marvel One-Shot: The Consultant (2011) on IMDb" /></a></span>')
    const imdbOSThor = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt2011109" data-style="p2"><a href="https://www.imdb.com/title/tt2011109/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Marvel One-Shot: A Funny Thing Happened on the Way to Thors Hammer (2011) on IMDb" /></a></span>')
    const imdbThor = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt0800369" data-style="p2"><a href="https://www.imdb.com/title/tt0800369/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Thor (2011) on IMDb" /></a></span>')
    const imdbAvengers = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt0848228" data-style="p2"><a href="https://www.imdb.com/title/tt0848228/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" The Avengers (2012) on IMDb" /></a></span>')
    const imdbOSItem47 = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt2247732" data-style="p2"><a href="https://www.imdb.com/title/tt2247732/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Marvel One-Shot: Item 47 (2012) on IMDb" /></a></span>')
    const imdbIronMan3 = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt1300854" data-style="p2"><a href="https://www.imdb.com/title/tt1300854/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Iron Man Three (2013) on IMDb" /></a></span>')
    const imdbOSKing = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt3438640" data-style="p2"><a href="https://www.imdb.com/title/tt3438640/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Marvel One-Shot: All Hail the King (2014) on IMDb" /></a></span>')
    const imdbThorDark = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt1981115" data-style="p2"><a href="https://www.imdb.com/title/tt1981115/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Thor: The Dark World (2013) on IMDb" /></a></span>')
    const imdbWinterSolider = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt1843866" data-style="p2"><a href="https://www.imdb.com/title/tt1843866/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Captain America: The Winter Soldier (2014) on IMDb" /></a></span>')
    const imdbDaredevil = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt3322312" data-style="p2"><a href="https://www.imdb.com/title/tt3322312/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Daredevil (2015) on IMDb" /></a></span>')
    const imdbGOG = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt2015381" data-style="p2"><a href="https://www.imdb.com/title/tt2015381/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Guardians of the Galaxy (2014) on IMDb" /></a></span>')
    const imdbGOG2 = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt3896198" data-style="p2"><a href="https://www.imdb.com/title/tt3896198/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Guardians of the Galaxy Vol. 2 (2017) on IMDb" /></a></span>')
    const imdbAvengersUltron = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt2395427" data-style="p2"><a href="https://www.imdb.com/title/tt2395427/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Avengers: Age of Ultron (2015) on IMDb" /></a></span>')
    const imdbAntMan = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt0478970" data-style="p2"><a href="https://www.imdb.com/title/tt0478970/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Ant-Man (2015) on IMDb" /></a></span>')
    const imdbJessicaJones = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt2357547" data-style="p2"><a href="https://www.imdb.com/title/tt2357547/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Jessica Jones (2015) on IMDb" /></a></span>')
    const imdbLukeCage = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt3322314" data-style="p2"><a href="https://www.imdb.com/title/tt3322314/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Luke Cage (2016) on IMDb" /></a></span>')
    const imdbCivilWar = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt3498820" data-style="p2"><a href="https://www.imdb.com/title/tt3498820/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Captain America: Civil War (2016) on IMDb" /></a></span>')
    const imdbIronFist = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt3322310" data-style="p2"><a href="https://www.imdb.com/title/tt3322310/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Iron Fist (2017) on IMDb" /></a></span>')
    const imdbDefenders = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt4230076" data-style="p2"><a href="https://www.imdb.com/title/tt4230076/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" The Defenders (2017) on IMDb" /></a></span>')
    const imdbHomecoming = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt2250912" data-style="p2"><a href="https://www.imdb.com/title/tt2250912/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Spider-Man: Homecoming (2017) on IMDb" /></a></span>')
    const imdbPunisher = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt5675620" data-style="p2"><a href="https://www.imdb.com/title/tt5675620/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" The Punisher (2017) on IMDb" /></a></span>')
    const imdbDrStrange = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt1211837" data-style="p2"><a href="https://www.imdb.com/title/tt1211837/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Doctor Strange (2016) on IMDb" /></a></span>')
    const imdbBlackPanther = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt1825683" data-style="p2"><a href="https://www.imdb.com/title/tt1825683/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Black Panther (2018) on IMDb" /></a></span>')
    const imdbBlackWidow = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt3480822" data-style="p2"><a href="https://www.imdb.com/title/tt3480822/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Black Widow (2021) on IMDb" /></a></span>')
    const imdbInhumans = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt4154858" data-style="p2"><a href="https://www.imdb.com/title/tt4154858/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Inhumans (2017) on IMDb" /></a></span>')
    const imdbRunaways = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt1236246" data-style="p2"><a href="https://www.imdb.com/title/tt1236246/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Runaways (2017) on IMDb" /></a></span>')
    const imdbCloakDagger = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt5614844" data-style="p2"><a href="https://www.imdb.com/title/tt5614844/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Cloak &amp; Dagger (2018) on IMDb" /></a></span>')
    const imdbRagnarok = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt3501632" data-style="p2"><a href="https://www.imdb.com/title/tt3501632/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Thor: Ragnarok (2017) on IMDb" /></a></span>')
    const imdbAntManWasp = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt5095030" data-style="p2"><a href="https://www.imdb.com/title/tt5095030/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Ant-Man and the Wasp (2018) on IMDb" /></a></span>')
    const imdbInfinityWar = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt4154756" data-style="p2"><a href="https://www.imdb.com/title/tt4154756/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Avengers: Infinity War (2018) on IMDb" /></a></span>')
    const imdbEndgame = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt4154796" data-style="p2"><a href="https://www.imdb.com/title/tt4154796/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Avengers: Endgame (2019) on IMDb" /></a></span>')
    const imdbWandaVision = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt9140560" data-style="p2"><a href="https://www.imdb.com/title/tt9140560/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" WandaVision (2021) on IMDb" /></a></span>')
    const imdbLoki = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt9140554" data-style="p2"><a href="https://www.imdb.com/title/tt9140554/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Loki (2021) on IMDb" /></a></span>')
    const imdbShangChi = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt9376612" data-style="p2"><a href="https://www.imdb.com/title/tt9376612/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Shang-Chi and the Legend of the Ten Rings (2021) on IMDb" /></a></span>')
    const imdbFalcon = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt9208876" data-style="p2"><a href="https://www.imdb.com/title/tt9208876/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" The Falcon and the Winter Soldier (2021) on IMDb" /></a></span>')
    const imdbEternals = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt9032400" data-style="p2"><a href="https://www.imdb.com/title/tt9032400/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Eternals (2021) on IMDb" /></a></span>')
    const imdbHawkeye = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt10160804" data-style="p2"><a href="https://www.imdb.com/title/tt10160804/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Hawkeye (2021) on IMDb" /></a></span>')
    const imdbFarFromHome = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt6320628" data-style="p2"><a href="https://www.imdb.com/title/tt6320628/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Spider-Man: Far from Home (2019) on IMDb" /></a></span>')
    const imdbNoWayHome = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt10872600" data-style="p2"><a href="https://www.imdb.com/title/tt10872600/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Spider-Man: No Way Home (2021) on IMDb" /></a></span>')
    const imdbSlingshot = ReactHtmlParser('<span class="imdbRatingPlugin" data-user="ur57394666" data-title="tt6313900" data-style="p2"><a href="https://www.imdb.com/title/tt6313900/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Agents of S.H.I.E.L.D.: Slingshot (2016) on IMDb" /></a></span>')

    function get(d, s, id) {
        var js, stags = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/js/rating.js";
        stags.parentNode.insertBefore(js, stags);
    }

    function capture(id) {

        let els = document.getElementsByClassName("vertical-timeline-element");
        Array.prototype.forEach.call(els, function (el) {
            for (let i = 0; i < el.children.length; i++) {
                el.children[i].classList.remove("is-hidden");
                el.children[i].classList.add("bounce-in");
            }
        });

        var el = document.querySelector("#" + id);

        DomToImage.toJpeg(el, { quality: 0.95 })
            .then(function (dataUrl) {
                DomToImage.toJpeg(el, { quality: 0.95 })
                    .then(function (dataUrl) {
                        var link = document.createElement('a');
                        link.download = 'my-image-name.jpeg';
                        link.href = dataUrl;
                        link.click();
                    });
            });

    }

    useEffect(() => {
        get(document, "script", "imdb-rating-api");
        setTimeout(() => {

            //Agents of S.H.I.E.L.D.
            let tmp = document.getElementById("copy-shield");
            var els = document.getElementsByClassName("paste-shield");
            Array.prototype.forEach.call(els, function (el) {
                el.innerHTML = tmp.innerHTML;
            });
            //Agent Carter
            tmp = document.getElementById("copy-agent-carter");
            var els = document.getElementsByClassName("paste-agent-carter");
            Array.prototype.forEach.call(els, function (el) {
                el.innerHTML = tmp.innerHTML;
            });
            //Daredevil
            tmp = document.getElementById("copy-daredevil");
            var els = document.getElementsByClassName("paste-daredevil");
            Array.prototype.forEach.call(els, function (el) {
                el.innerHTML = tmp.innerHTML;
            });
            //Jessica Jones
            tmp = document.getElementById("copy-jessica-jones");
            var els = document.getElementsByClassName("paste-jessica-jones");
            Array.prototype.forEach.call(els, function (el) {
                el.innerHTML = tmp.innerHTML;
            });
            //Luke Cage
            tmp = document.getElementById("copy-luke-cage");
            var els = document.getElementsByClassName("paste-luke-cage");
            Array.prototype.forEach.call(els, function (el) {
                el.innerHTML = tmp.innerHTML;
            });
            //Iron Fist
            tmp = document.getElementById("copy-iron-fist");
            var els = document.getElementsByClassName("paste-iron-fist");
            Array.prototype.forEach.call(els, function (el) {
                el.innerHTML = tmp.innerHTML;
            });
            //The Punisher
            tmp = document.getElementById("copy-punisher");
            var els = document.getElementsByClassName("paste-punisher");
            Array.prototype.forEach.call(els, function (el) {
                el.innerHTML = tmp.innerHTML;
            });
            //Runaways
            tmp = document.getElementById("copy-runaways");
            var els = document.getElementsByClassName("paste-runaways");
            Array.prototype.forEach.call(els, function (el) {
                el.innerHTML = tmp.innerHTML;
            });

        }, 2500);
    }, [])

    const customIconStyle = { background: 'white', color: '#fff' }
    const customIconStyleRed = { background: 'red', color: '#fff' }
    const customIconStyleBlack = { background: 'black', color: '#fff' }

    const customStyleMovie = { background: 'rgb(226,54,54)', color: '#fff' };
    const customStyleShow = { background: 'rgb(247,143,63)', color: '#fff' };
    const customStyleWhite = { background: 'white', color: 'black' };

    const customContentArrowStyleMovie = { borderRight: '7px solid rgb(226,54,54)' };
    const customContentArrowStyleShow = { borderRight: '7px solid rgb(247,143,63)' };
    const customContentArrowStyleWhite = { borderRight: '7px solid white' };

    return (
        <div className="container">
            <HeadNav title={"COMPLETE MARVEL TIMELINE"} />
            
            <div className="col-12 text-center">

                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <h5>Complete Marvel Cinematic Universe</h5>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <span>
                        <span>
                            A * means multiverse or timeline shenanigans, which might not be part of the main Marvel timeline.
                        </span>
                        <br />
                    </span>
                </div>
                <br />
            </div>


            <div id="section-to-print">
                <VerticalTimeline className="marvel-timeline">

                    <BrowserView>
                        <div className="row justify-content-center">
                            <div className="col-6 text-center">
                                <h4>MOVIES</h4>
                            </div>
                            <div className="col-6 text-center">
                                <h4>TV SHOWS</h4>
                            </div>
                        </div>
                    </BrowserView>

                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        date="1943-1995"
                        contentArrowStyle={{ borderRight: '7px solid  rgb(80,74,74)' }}
                        iconStyle={{ background: 'white', color: 'black' }}
                        icon={<img className="img-fluid icon" src={time} />}>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="1943 - 45"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={captainAmerica} />}>
                        <h3 className="vertical-timeline-element-title">Captain America: The First Avenger</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2011)</h4>
                        <span>
                            <Stream imdb={imdbFirstAvenger} />
                            <span>The tale of Steve Rogers does, admittedly, take place partly in 2011 thanks to the First Avenger's post-credits scene. Yet the vast majority of the story takes place during World War 2 in 1943-1945, so we've included it here for clarity's sake.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="1946"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={agentCarter} />}>
                        <h3 className="vertical-timeline-element-title">Agent Carter</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 1 (2015)</h4>
                        <span>
                            <span id="copy-agent-carter">
                                <Stream imdb={imdbAgentCarter} />
                            </span>
                            <span>The Agent Carter TV Show starts in 1946, sort of in the middle of the timeline of the One Shot.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="1947"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={agentCarter} />}>
                        <h3 className="vertical-timeline-element-title">Agent Carter</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 2 (2016)</h4>
                        <span>
                            <span className="paste-agent-carter" />
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleWhite}
                        contentArrowStyle={customContentArrowStyleWhite}
                        date="1946*"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={oneshot} />}>
                        <h3 className="vertical-timeline-element-title">One Shot: Agent Carter</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2013)</h4>
                        <span>
                            <Stream imdb={imdbOSAgentCarter} />
                            <span>One Shot could go either before or after the Agent Carter TV Show. However, we placed it after, since One Shot is the epilogue of the TV Show.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="1995"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={captainMarvel} />}>
                        <h3 className="vertical-timeline-element-title">Captain Marvel</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2019)</h4>
                        <span>
                            <Stream imdb={imdbCaptainMarvel} />
                            <span>Some 50 years later, Captain Marvel crashes into Blackbuster and meets Nick Fury. After that, there’s a big time gap until a certain Iron Man shows up.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentArrowStyle={{ borderRight: '7px solid  rgb(80,74,74)' }}
                        date="2010 - 2012"
                        iconStyle={{ background: 'white' }}
                        icon={<img className="img-fluid icon" src={time} />}>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="2010"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={ironMan} />}>
                        <h3 className="vertical-timeline-element-title">Iron Man</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2008)</h4>
                        <span>
                            <Stream imdb={imdbIronMan} />
                            <span>Iron Man, according to Marvel’s 10 Years of Marvel Studios book, actually takes place in 2010, not 2008.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="2011"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={ironMan} />}>
                        <h3 className="vertical-timeline-element-title">Iron Man 2</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2010)</h4>
                        <span>
                            <Stream imdb={imdbIronMan2} />
                            <span>Iron Man 2 comes a year later, as do The Incredible Hulk and Thor, which both, incredibly, take place that same week.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="2011"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={hulk} />}>
                        <h3 className="vertical-timeline-element-title">The Incredible Hulk</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2008)</h4>
                        <span>
                            <Stream imdb={imdbHulk} />
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleWhite}
                        contentArrowStyle={customContentArrowStyleWhite}
                        date="2011"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={oneshot} />}>
                        <h3 className="vertical-timeline-element-title">One Shot: The Consultant</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2011)</h4>
                        <span>
                            <Stream imdb={imdbOSConsultant} />
                            <span>Tucked in-between the Jade Giant’s solo movie and Thor’s arrival on Earth, however, are a pair of One Shots.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleWhite}
                        contentArrowStyle={customContentArrowStyleWhite}
                        date="2011"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={oneshot} />}>
                        <h3 className="vertical-timeline-element-title">One Shot: A Funny Thing Happened on the Way to Thor’s Hammer</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2011)</h4>
                        <span>
                            <Stream imdb={imdbOSThor} />
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="2011"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={thor} />}>
                        <h3 className="vertical-timeline-element-title">Thor</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2011)</h4>
                        <span>
                            <Stream imdb={imdbThor} />
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="2012"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={avengers} />}>
                        <h3 className="vertical-timeline-element-title">Avengers</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2012)</h4>
                        <span>
                            <Stream imdb={imdbAvengers} />
                            <span>Avengers tops it all off with the Battle of New York in 2012.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleWhite}
                        contentArrowStyle={customContentArrowStyleWhite}
                        date="2012"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={oneshot} />}>
                        <h3 className="vertical-timeline-element-title">One Shot: Item 47</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2012)</h4>
                        <span>
                            <Stream imdb={imdbOSItem47} />
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="2012"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={ironMan} />}>
                        <h3 className="vertical-timeline-element-title">Iron Man 3</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2013)</h4>
                        <span>
                            <Stream imdb={imdbIronMan3} />
                            <span>Then comes Iron Man 3, which, despite being a Phase 2 film, takes place later that same year.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        date="2013 - 2015"
                        contentArrowStyle={{ borderRight: '7px solid  rgb(80,74,74)' }}
                        iconStyle={{ background: 'white', color: 'black' }}
                        icon={<img className="img-fluid icon" src={time} />}>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleWhite}
                        contentArrowStyle={customContentArrowStyleWhite}
                        date="2013"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={oneshot} />}>
                        <h3 className="vertical-timeline-element-title">One Shot: All Hail the King </h3>
                        <h4 className="vertical-timeline-element-subtitle">(2014)</h4>
                        <span>
                            <Stream imdb={imdbOSKing} />
                            <span>The All Hail the King One Shot comes several months after the events of Iron Man 3, firmly placing it in 2013.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2013"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={agentsShield} />}>
                        <h3 className="vertical-timeline-element-title">Agents of S.H.I.E.L.D.</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 1, Episodes 1-7 (2013/2014)</h4>
                        <span>
                            <span className="paste-shield" />
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="2013"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={thor} />}>
                        <h3 className="vertical-timeline-element-title">Thor: The Dark World</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2013)</h4>
                        <span>
                            <Stream imdb={imdbThorDark} />
                            <span>Thor: The Dark World is directly mentioned after the eighth episode of the first Agents of S.H.I.E.L.D. season.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2014"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={agentsShield} />}>
                        <h3 className="vertical-timeline-element-title">Agents of S.H.I.E.L.D.</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 1, episodes 8-16 (2013/2014)</h4>
                        <span>
                            <span className="paste-shield" />
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="2014"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={captainAmerica} />}>
                        <h3 className="vertical-timeline-element-title">Captain America: The Winter Soldier</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2014)</h4>
                        <span>
                            <Stream imdb={imdbWinterSolider} />
                            <span>A similar thing happens with The Winter Solder (this was when Marvel TV were trying to tie their series into the movie events, something they later stopped doing).</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2014"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={agentsShield} />}>
                        <h3 className="vertical-timeline-element-title">Agents of S.H.I.E.L.D. </h3>
                        <h4 className="vertical-timeline-element-subtitle">season 1, episodes 17-22 (2013/2014)</h4>
                        <span>
                            <span className="paste-shield" />
                            <span>Everything from episode 17 right through to the end of the first season takes place after Hydra’s plan is uncovered in Winter Soldier.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2014"
                        iconStyle={customIconStyleBlack}
                        icon={<img className="img-fluid icon" src={daredevil} />}>
                        <h3 className="vertical-timeline-element-title">Daredevil</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 1 (2015)</h4>
                        <span>
                            <span id="copy-daredevil">
                                <Stream imdb={imdbDaredevil} />
                            </span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="2014"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={guardians} />}>
                        <h3 className="vertical-timeline-element-title">Guardians of the Galaxy</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2014)</h4>
                        <span>
                            <Stream imdb={imdbGOG} />
                            <span>Guardians of the Galaxy and its sequel, Vol. 2, take place in 2014, immediately after each other. Daredevil Season 1 also takes place that year.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="2014"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={guardians} />}>
                        <h3 className="vertical-timeline-element-title">Guardians of the Galaxy 2</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2017)</h4>
                        <span>
                            <Stream imdb={imdbGOG2} />
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2015"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={agentsShield} />}>
                        <h3 className="vertical-timeline-element-title">Agents of S.H.I.E.L.D.</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 2, episodes 1-19 (2014/2015)</h4>
                        <span>
                            <span className="paste-shield" />
                            <span>In 2015, Agents of Shield season 2 deals with the fallout from Age of Ultron post-episode 19.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="2015"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={avengers} />}>
                        <h3 className="vertical-timeline-element-title">Avengers: Age of Ultron</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2015)</h4>
                        <span>
                            <Stream imdb={imdbAvengersUltron} />
                        </span>
                        <br />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2015"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={agentsShield} />}>
                        <h3 className="vertical-timeline-element-title">Agents of S.H.I.E.L.D.</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 2, Episodes 20-22 (2014/2015)</h4>
                        <span>
                            <span className="paste-shield" />
                        </span>
                        <br />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="2015"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={antMan} />}>
                        <h3 className="vertical-timeline-element-title">Ant-Man</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2015)</h4>
                        <span>
                            <Stream imdb={imdbAntMan} />
                        </span>
                        <br />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2015"
                        iconStyle={customIconStyleBlack}
                        icon={<img className="img-fluid icon" src={jessicaJones} />}>
                        <h3 className="vertical-timeline-element-title">Jessica Jones</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 1 (2015)</h4>
                        <span>
                            <span id="copy-jessica-jones">
                                <Stream imdb={imdbJessicaJones} />
                            </span>
                        </span>
                        <br />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2015"
                        iconStyle={customIconStyleBlack}
                        icon={<img className="img-fluid icon" src={daredevil} />}>
                        <h3 className="vertical-timeline-element-title">Daredevil</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 2 (2016)</h4>
                        <span>
                            <span className="paste-daredevil" />
                        </span>
                        <br />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2015"
                        iconStyle={customIconStyleBlack}
                        icon={<img className="img-fluid icon" src={lukeCage} />}>
                        <h3 className="vertical-timeline-element-title">Luke Cage</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 1 (2016)</h4>
                        <span>
                            <span id="copy-luke-cage">
                                <Stream imdb={imdbLukeCage} />
                            </span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2015"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={agentsShield} />}>
                        <h3 className="vertical-timeline-element-title">Agents of S.H.I.E.L.D.</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 3, Episodes 1-10 (2015/2016)</h4>
                        <span>
                            <span className="paste-shield" />
                            <span>First 10 episodes of Agents of Shield Season 3 – because there’s a slight time-jump after that.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        date="2016"
                        contentArrowStyle={{ borderRight: '7px solid  rgb(80,74,74)' }}
                        iconStyle={{ background: 'white', color: 'black' }}
                        icon={<img className="img-fluid icon" src={time} />}>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2016"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={agentsShield} />}>
                        <h3 className="vertical-timeline-element-title">Agents of S.H.I.E.L.D.</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 3, Episodes 11-19 (2015/2016)</h4>
                        <span>
                            <span className="paste-shield" />
                            <span>Agents of Shield Season 3’s eleventh episode has a bit of a jump, and Civil War is dealt with from episode 20 onward.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="2016"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={captainAmerica} />}>
                        <h3 className="vertical-timeline-element-title">Captain America: Civil War</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2016)</h4>
                        <span>
                            <Stream imdb={imdbCivilWar} />
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2016"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={agentsShield} />}>
                        <h3 className="vertical-timeline-element-title">Agents of S.H.I.E.L.D.</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 3, Episodes 20-22 (2015/2016)</h4>
                        <span>
                            <span className="paste-shield" />
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2016"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={agentsShield} />}>
                        <h3 className="vertical-timeline-element-title">Agents of S.H.I.E.L.D.</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 4, Episodes 1-8 (2016/2017)</h4>
                        <span>
                            <span className="paste-shield" />
                            <span>Agents of Shield season 4 is only interrupted by the Slingshot web series (which is non-essential).</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2016"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={agentsShield} />}>
                        <h3 className="vertical-timeline-element-title">Agents of S.H.I.E.L.D.: Slingshot</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 1 (2016)</h4>
                        <span>
                            <Stream imdb={imdbSlingshot} />
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2016"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={agentsShield} />}>
                        <h3 className="vertical-timeline-element-title">Agents of S.H.I.E.L.D.</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 4, Episodes 9-22 (2016/2017)</h4>
                        <span>
                            <span className="paste-shield" />
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2016"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={ironFist} />}>
                        <h3 className="vertical-timeline-element-title">Iron Fist</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 1 (2017)</h4>
                        <span>
                            <span id="copy-iron-fist">
                                <Stream imdb={imdbIronFist} />
                            </span>
                            <span>Iron Fist season 1 introduces the last of the Defenders, who then team up later that year in The Defenders.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2016"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={defenders} />}>
                        <h3 className="vertical-timeline-element-title">The Defenders</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 1 (2017)</h4>
                        <span>
                            <span id="copy-defenders">
                                <Stream imdb={imdbDefenders} />
                            </span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="2016"
                        iconStyle={customIconStyleRed}
                        icon={<img className="img-fluid icon" src={spiderman} />}>
                        <h3 className="vertical-timeline-element-title">Spider-Man: Homecoming</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 1 (2017)</h4>
                        <span>
                            <Stream imdb={imdbHomecoming} />
                            <span>Spider-Man: Homecoming did its level best to mess up the MCU timeline, but it’s definitely in 2016, as explained by the director.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2016"
                        iconStyle={customIconStyleBlack}
                        icon={<img className="img-fluid icon" src={punisher} />}>
                        <h3 className="vertical-timeline-element-title">The Punisher</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 1 (2017)</h4>
                        <span>
                            <span id="copy-punisher">
                                <Stream imdb={imdbPunisher} />
                            </span>
                            <span>The Punisher season 1 takes place after all of those street-level shenanigans have concluded.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="2016-2017"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={doctorStrange} />}>
                        <h3 className="vertical-timeline-element-title">Doctor Strange</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2016)</h4>
                        <span>
                            <Stream imdb={imdbDrStrange} />
                            <span>Doctor Strange, of course, isn’t bound by time. His story starts in 2016 and continues into 2017.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        date="2017-2018"
                        contentArrowStyle={{ borderRight: '7px solid  rgb(80,74,74)' }}
                        iconStyle={{ background: 'white', color: 'black' }}
                        icon={<img className="img-fluid icon" src={time} />}>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2017"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={agentsShield} />}>
                        <h3 className="vertical-timeline-element-title">Agents of S.H.I.E.L.D.</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 5, Episodes 1-19 (2017/2018)</h4>
                        <span>
                            <span className="paste-shield" />
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="2017"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={blackPanther} />}>
                        <h3 className="vertical-timeline-element-title">Black Panther</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2018)</h4>
                        <span>
                            <Stream imdb={imdbBlackPanther} />
                            <span>Black Panther is perhaps the hardest to place. The death of T'Challa's father in Civil War is still raw by the time his movie rolls around but, according to Marvel's own official timeline to mark the ten-year anniversary of the MCU, Black Panther is set in 2017, not 2016.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="2017"
                        iconStyle={customIconStyleBlack}
                        icon={<img className="img-fluid icon" src={blackWidow} />}>
                        <h3 className="vertical-timeline-element-title">Black Widow</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2021)</h4>
                        <span>
                            <Stream imdb={imdbBlackWidow} />
                            <span>The Black Widow movie may be part of Marvel Phase 4, but it's actually tucked in-between Civil War and Infinity War.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2017"
                        iconStyle={customIconStyleBlack}
                        icon={<img className="img-fluid icon" src={jessicaJones} />}>
                        <h3 className="vertical-timeline-element-title">Jessica Jones</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 2(2018)</h4>
                        <span>
                            <span className="paste-jessica-jones" />
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2017"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={inhumans} />}>
                        <h3 className="vertical-timeline-element-title">Inhumans</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 1 (2017)</h4>
                        <span>
                            <span id="copy-inhumans">
                                <Stream imdb={imdbInhumans} />
                            </span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2017"
                        iconStyle={customIconStyleBlack}
                        icon={<img className="img-fluid icon" src={lukeCage} />}>
                        <h3 className="vertical-timeline-element-title">Luke Cage</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 2 (2018)</h4>
                        <span>
                            <span className="paste-luke-cage" />
                            <span>Luke Cage season 2 definitely comes before Iron Fist season 2</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2017"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={ironFist} />}>
                        <h3 className="vertical-timeline-element-title">Iron Fist</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 2 (2018)</h4>
                        <span>
                            <span className="paste-iron-fist" />
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2017"
                        iconStyle={customIconStyleBlack}
                        icon={<img className="img-fluid icon" src={daredevil} />}>
                        <h3 className="vertical-timeline-element-title">Daredevil</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 3 (2018)</h4>
                        <span>
                            <span className="paste-daredevil" />
                            <span>Daredevil Season 3 landing a little later on the timeline makes a bit more sense thematically.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2017"
                        iconStyle={customIconStyleBlack}
                        icon={<img className="img-fluid icon" src={punisher} />}>
                        <h3 className="vertical-timeline-element-title">The Punisher</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 2 (2019)</h4>
                        <span>
                            <span className="paste-punisher" />
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2017"
                        iconStyle={customIconStyleBlack}
                        icon={<img className="img-fluid icon" src={jessicaJones} />}>
                        <h3 className="vertical-timeline-element-title">Jessica Jones</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 3 (2019)</h4>
                        <span>
                            <span className="paste-jessica-jones" />
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2017"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={runaways} />}>
                        <h3 className="vertical-timeline-element-title">Runaways</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 1-2 (2017/2018)</h4>
                        <span>
                            <span id="copy-runaways">
                                <Stream imdb={imdbRunaways} />
                            </span>
                            <span>Freeform shows, Cloak and Dagger along with Runaways, which also take place pre-Snap. Or, at least, they have not dealt with Thanos's reign of terror properly yet, so there remains some question over when exactly they take place.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2017"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={cloakDagger} />}>
                        <h3 className="vertical-timeline-element-title">Cloak &amp; Dagger</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 1-2 (2018/2019)</h4>
                        <span>
                            <Stream imdb={imdbCloakDagger} />
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2017"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={runaways} />}>
                        <h3 className="vertical-timeline-element-title">Runaways</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 3 (2019)</h4>
                        <span>
                            <span className="paste-runaways" />
                            <span>Cloak &amp; Dagger appear in the third season of Runaways.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="2017-2018"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={thor} />}>
                        <h3 className="vertical-timeline-element-title">Thor: Ragnarok</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2017)</h4>
                        <span>
                            <Stream imdb={imdbRagnarok} />
                            <span>Ragnarok’s post-credits only take us to the beginning of Infinity War.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2018"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={agentsShield} />}>
                        <h3 className="vertical-timeline-element-title">Agents of S.H.I.E.L.D.</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 5, Episodes 19-22 (2017/2018)</h4>
                        <span>
                            <span className="paste-shield" />
                            <span>Season 5 explicitly leading into Thanos' big moment.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="2018"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={antMan} />}>
                        <h3 className="vertical-timeline-element-title">Ant-Man and the Wasp</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2018)</h4>
                        <span>
                            <Stream imdb={imdbAntManWasp} />
                            <span>Ant-Man and the Wasp’s post-credits scene, though, runs simultaneously alongside Thanos’ Snap,</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="2017-2018"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={avengers} />}>
                        <h3 className="vertical-timeline-element-title">Avengers: Infinity War</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2018)</h4>
                        <span>
                            <Stream imdb={imdbInfinityWar} />
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2018*"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={agentsShield} />}>
                        <h3 className="vertical-timeline-element-title">Agents of S.H.I.E.L.D.</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 6 (2019)</h4>
                        <span>
                            <span className="paste-shield" />
                            <span>With season 5 explicitly leading into Thanos' big moment, fans were slightly confused when season 6 failed to feature half the world disappearing. The showrunners have since reasoned that they simply couldn't deal with the Snap as they – at the time of writing season 6 – were not aware of how Endgame and Spider-Man: Far From Home would deal with "the Blip". In-universe, the snap takes place in 2018 even though there's absolutely no reference to Thanos wiping out half the world in Agents of Shield season 6.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        date="2018 - 2024"
                        contentArrowStyle={{ borderRight: '7px solid  rgb(80,74,74)' }}
                        iconStyle={{ background: 'white', color: 'black' }}
                        icon={<img className="img-fluid icon" src={time} />}>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="2018-2023"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={avengers} />}>
                        <h3 className="vertical-timeline-element-title">Avengers: Endgame</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2019)</h4>
                        <span>
                            <Stream imdb={imdbEndgame} />
                            <span>Avengers: Endgame has a clear five-year-jump after the Snap (dubbed "The Blip" in Far From Home), meaning much of the movie takes place in October of 2023, five years after the end of Infinity War. The snap takes place at the end of the October of 2023.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="1931 - 2019*"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={agentsShield} />}>
                        <h3 className="vertical-timeline-element-title">Agents of S.H.I.E.L.D.</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 7 (2020)</h4>
                        <span>
                            <span id="copy-shield">
                                <Stream imdb={imdbAgentsOfShield} />
                            </span>
                            <span>Confusingly, Agents of Shield season 7 saw the team travel back to 1931 and then eventually work their way back to 2019, via some pitstops in decades along the way. It still hasn't been canonically confirmed whether that's now part of the Marvel timeline or one from the multiverse, though the show seemingly cut all ties with the wider MCU in favor of a more streamlined storytelling approach. For all intents and purposes, it's essentially another multiverse running parallel to the main timeline.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2019*"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={agentsShield} />}>
                        <h3 className="vertical-timeline-element-title">Agents of S.H.I.E.L.D.</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 7 Finale (2020)</h4>
                        <span>
                            <span className="paste-shield" />
                            <span>Season 7 goes on a mad trip through time, heading back into the 40s, 50s, and 60s. The team then pop back into 2018, and it appears the finale ends in 2019, one year after the events of the sixth season (a time they're eventually able to return to). This all happens, seemingly, on a different timeline, one where Thanos never fully invaded Earth.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2023"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={wandaVision} />}>
                        <h3 className="vertical-timeline-element-title">WandaVision</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 1 (2021)</h4>
                        <span>
                            <Stream imdb={imdbWandaVision} />
                            <span>WandaVision sees Scarlet Witch trap an entire town in a force field following the death of Vision. Despite the sitcom antics taking place seemingly in multiple time periods, this all happens post-Endgame. </span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2023 (2012)"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={loki} />}>
                        <h3 className="vertical-timeline-element-title">Loki</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 1 (2021)</h4>
                        <span>
                            <Stream imdb={imdbLoki} />
                            <span>Loki, meanwhile, takes place outside of our conception of time. The primary Loki Variant of the show is technically snatched from 2012. But theorists hold that Kang the Conqueror witnesses the timeline being broken – therefore unleashing the multiverse – just as Wanda looks into the Darkhold during the WandaVision finale. </span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="2024"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={shangChi} />}>
                        <h3 className="vertical-timeline-element-title">Shang-Chi and The Legend of the Ten Rings</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2021)</h4>
                        <span>
                            <Stream imdb={imdbShangChi} />
                            <span>The Battle of Ta Lo concludes on Qingming (a Chinese holiday of celebrating the dead), which sets the main events of the film in the week leading up to it on 4th of April 2024.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2024"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={captainAmerica} />}>
                        <h3 className="vertical-timeline-element-title">The Falcon and the Winter Soldier</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 1 (2021)</h4>
                        <span>
                            <Stream imdb={imdbFalcon} />
                            <span>The Falcon and the Winter Soldier takes place six months after Endgame, which puts this Captain America spin-off in the April of 2024.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="2023-2024"
                        iconStyle={customIconStyleBlack}
                        icon={<img className="img-fluid icon" src={eternals} />}>
                        <h3 className="vertical-timeline-element-title">Eternals</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2021)</h4>
                        <span>
                            <Stream imdb={imdbEternals} />
                            <span>Eternals is also set to take place sometime after Avengers: Endgame, as revealed in the trailer, and a reference to Captain Rogers suggests it takes place post-The Falcon and the Winter Soldier.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="2024"
                        iconStyle={customIconStyleRed}
                        icon={<img className="img-fluid icon" src={spiderman} />}>
                        <h3 className="vertical-timeline-element-title">Spider-Man: Far From Home</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2019)</h4>
                        <span>
                            <Stream imdb={imdbFarFromHome} />
                            <span> Spider-Man: Far From Home is set eight months after Endgame with Peter Parker mourning the loss of Tony Stark. That places it at just around the 2024 summer holidays, hence the European vacation.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="left"
                        contentStyle={customStyleMovie}
                        contentArrowStyle={customContentArrowStyleMovie}
                        date="2024"
                        iconStyle={customIconStyleRed}
                        icon={<img className="img-fluid icon" src={spiderman} />}>
                        <h3 className="vertical-timeline-element-title">Spider-Man: No Way Home</h3>
                        <h4 className="vertical-timeline-element-subtitle">(2021)</h4>
                        <span>
                            <Stream imdb={imdbNoWayHome} />
                            <span>Spider-Man: No Way Home picks up directly after the events of Far From Home, which means it also takes place in 2024, though heading into the start-of-school/fall season.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        position="right"
                        contentStyle={customStyleShow}
                        contentArrowStyle={customContentArrowStyleShow}
                        date="2024"
                        iconStyle={customIconStyle}
                        icon={<img className="img-fluid icon" src={hawkeye} />}>
                        <h3 className="vertical-timeline-element-title">Hawkeye</h3>
                        <h4 className="vertical-timeline-element-subtitle">Season 1 (2021)</h4>
                        <span>
                            <Stream imdb={imdbHawkeye} />
                            <span>On the time stamp 29:13, episode 3, you can see a Chinese New Years poster on the right of the screen with a picture of a snake zodiac. The snake zodiac won’t be until 2025. This makes it the holiday season of 2024. This would place Hawkeye after Spider-Man: Far from home and Spider-Man: No Way Home.</span>
                        </span>
                        <br />
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
            <br /><br />
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <button className="btn btn-warning" onClick={() => capture("section-to-print")}>Export as Image</button>
                </div>
                <br /><br />
            </div>
        </div>
    )
}

export default Marvel