import React, { useEffect } from "react";
import HeadNav from "../../components/HeadNav";

import './Dice.css'

import netflix from '../../assets/dice/netflix.png'
import disney from '../../assets/dice/disney.png'
import hbo from '../../assets/dice/hbo.png'
import prime from '../../assets/dice/prime.png'
import hulu from '../../assets/dice/hulu.png'
import showtime from '../../assets/dice/showtime.png'

const Dice = () => {


    useEffect(() => {

        var elDiceOne = document.getElementById('dice1');
        var elDiceTwo = document.getElementById('dice2');
        var elDiceThree = document.getElementById('dice3');
        var elDiceFour = document.getElementById('dice4');
        var elComeOut = document.getElementById('roll');

        elComeOut.onclick = function () { rollDice(); };

        function rollDice() {

            var diceOne = Math.floor((Math.random() * 6) + 1);
            var diceTwo = Math.floor((Math.random() * 6) + 1);
            var diceThree = Math.floor((Math.random() * 6) + 1);
            var diceFour = Math.floor((Math.random() * 6) + 1);

            for (var i = 1; i <= 6; i++) {
                elDiceOne.classList.remove('show-' + i);
                if (diceOne === i) {
                    elDiceOne.classList.add('show-' + i);
                }
            }

            for (var k = 1; k <= 6; k++) {
                elDiceTwo.classList.remove('show-' + k);
                if (diceTwo === k) {
                    elDiceTwo.classList.add('show-' + k);
                }
            }

            for (var k = 1; k <= 6; k++) {
                elDiceThree.classList.remove('show-' + k);
                if (diceThree === k) {
                    elDiceThree.classList.add('show-' + k);
                }
            }

            for (var k = 1; k <= 6; k++) {
                elDiceFour.classList.remove('show-' + k);
                if (diceFour === k) {
                    elDiceFour.classList.add('show-' + k);
                }
            }
        }

    }, [])

    return (
        <div class="game container-fluid">
            <HeadNav title={"STREAMING ROULETTE"} />
            <br /><br />

            <div class="row justify-content-center text-center">
                <span>Let the fate decide 👀 </span>
            </div>
            
            <div class="row justify-content-center">
                <div id='dice1' class="dice col-3">
                    <div class='side one d-flex justify-content-center'>
                        <div className="align-self-center">
                            <img className="img-fluid" src={netflix} />
                        </div>
                    </div>
                    <div class='side two d-flex justify-content-center'>
                        <div className="align-self-center">
                            <img className="img-fluid" src={hbo} />
                        </div>
                    </div>
                    <div class='side three d-flex justify-content-center'>
                        <div className="align-self-center">
                            <img className="img-fluid" src={prime} />
                        </div>
                    </div>
                    <div class='side four d-flex justify-content-center'>
                        <div className="align-self-center">
                            <img className="img-fluid" src={hulu} />
                        </div>
                    </div>
                    <div class='side five d-flex justify-content-center'>
                        <div className="align-self-center">
                            <img className="img-fluid" src={showtime} />
                        </div>
                    </div>
                    <div class='side six d-flex justify-content-center'>
                        <div className="align-self-center">
                            <img className="img-fluid" src={disney} />
                        </div>
                    </div>
                </div>

                <div id='dice2' class="dice col-3">
                    <div class='side one d-flex justify-content-center'>
                        <div className="align-self-center">TV SHOW</div>
                    </div>
                    <div class='side two d-flex justify-content-center'>
                        <div className="align-self-center">MOVIE</div>
                    </div>
                    <div class='side three d-flex justify-content-center'>
                        <div className="align-self-center">TV SHOW</div>
                    </div>
                    <div class='side four d-flex justify-content-center'>
                        <div className="align-self-center">MOVIE</div>
                    </div>
                    <div class='side five d-flex justify-content-center'>
                        <div className="align-self-center">TV SHOW</div>
                    </div>
                    <div class='side six d-flex justify-content-center'>
                        <div className="align-self-center">MOVIE</div>
                    </div>
                </div>

                <div id='dice3' class="dice col-3">
                    <div class='side one d-flex justify-content-center'>
                        <div className="align-self-center">ACTION</div>
                    </div>
                    <div class='side two d-flex justify-content-center'>
                        <div className="align-self-center">COMEDY</div>
                    </div>
                    <div class='side three d-flex justify-content-center'>
                        <div className="align-self-center">HORROR</div>
                    </div>
                    <div class='side four d-flex justify-content-center'>
                        <div className="align-self-center">DRAMA</div>
                    </div>
                    <div class='side five d-flex justify-content-center'>
                        <div className="align-self-center">ROMANCE</div>
                    </div>
                    <div class='side six d-flex justify-content-center'>
                        <div className="align-self-center">SCI-FI</div>
                    </div>
                </div>

                <div id='dice4' class="dice col-3">
                    <div class='side one d-flex justify-content-center'>
                        <div className="align-self-center">1st</div>
                    </div>
                    <div class='side two d-flex justify-content-center'>
                        <div className="align-self-center">2nd</div>
                    </div>
                    <div class='side three d-flex justify-content-center'>
                        <div className="align-self-center">3rd</div>
                    </div>
                    <div class='side four d-flex justify-content-center'>
                        <div className="align-self-center">4th</div>
                    </div>
                    <div class='side five d-flex justify-content-center'>
                        <div className="align-self-center">5th</div>
                    </div>
                    <div class='side six d-flex justify-content-center'>
                        <div className="align-self-center">6th</div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div className="col-12 text-center">
                    <button id='roll' class='btn btn-warning'>Roll the dices!</button>
                </div>
            </div>
        </div>
    )
}

export default Dice