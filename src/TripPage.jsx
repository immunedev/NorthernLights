import React from "react";
import { ReactComponent as LocationIcon } from "./assets/location.svg";
import { ReactComponent as DateIcon } from "./assets/date.svg";
import { ReactComponent as PriceIcon } from "./assets/price.svg";
import { ReactComponent as BackIcon } from "./assets/backarrow.svg";


export default function TripPage({tripData, onBackClick, onShowFinalPage  }){


    return(
        <div className="trip-container">
            <div className="trip-box">
                <div className="trip-photo">
                    <button onClick={onBackClick} className="back-button">
                        <BackIcon className='back-arrow'></BackIcon>                    
                    </button>
                </div>
                <div className="trip-rows">
                    <div className="trip-left-col">
                        <div className="trip-title">{tripData.title}</div>
                        <div className="trip-icons">
                            <div className="trip-cell">
                                <LocationIcon></LocationIcon>
                                <div className="trip-cell-text">{tripData.location}</div>
                            </div>
                            <div className="trip-cell">
                                <DateIcon></DateIcon>
                                <div className="trip-cell-text">{tripData.length}</div>
                            </div>
                            <div className="trip-cell">
                                <PriceIcon></PriceIcon>
                                <div className="trip-cell-text">{tripData.price}</div>
                            </div>
                        </div>
                        <div className="trip-desc-subtitle">Opis wycieczki</div>
                        <div className="trip-desc">Wyrusz na niezapomnianą przygodę do norweskiej Laponii, gdzie będziesz miał/a okazję podziwiać spektakularne zorze polarną. Zatrzymamy się w urokliwym miasteczku Tromsø, które jest jednym z najlepszych miejsc na świecie do obserwacji zjawiska zorzy polarnej. Naszym doświadczonym przewodnikiem będzie lokalny ekspert od zorzy polarnych, co zapewni nam największe szanse na obserwację tego niezwykłego zjawiska.    
                        </div>

                        <div className="trip-desc-subtitle">Cena</div>
                        <div className="trip-desc">5000 PLN (obejmuje przeloty, zakwaterowanie, wyżywienie i wycieczki lokalne- przejazd w wyznaczone miejsce, aby obserwować zorzę)
                        </div>

                        <div className="trip-desc-subtitle">Co zabrać</div>
                        <div className="trip-desc">
                            <ul className="trip-list">
                                <li className="trip-list-element">Ważny dokument tożsamości ( paszport lub/i dowód)</li>
                                <li className="trip-list-element">Ciepłe ubrania i obuwie (termoaktywna bielizna, kurtka z puchu, rękawiczki,czapka)</li>
                                <li className="trip-list-element">Aparat fotograficzny z trybem długiej ekspozycji, statyw</li>
                                <li className="trip-list-element">Termos z gorącym napojem, np. herbatą lub kawą</li>
                                <li className="trip-list-element">Notatnik do zapisków i rysunków</li>
                                <li className="trip-list-element">Środki przeciwbólowe na wypadek zmęczenia</li>
                            </ul>
                        </div>
                        <div className="trip-desc-subtitle">Zakwaterowanie</div>
                        <div className="trip-desc">Nocleg w komfortowym hotelu w centrum Tromsø, z wygodnymi pokojami i dostępem do restauracji i atrakcji.
                        </div>
                    </div>
                    <div className="trip-right-col">
                        <div className="trip-grid-large-photo">Test</div>
                        <div className="trip-grid">
                            <div className="trip-grid-element-1">p</div>
                            <div className="trip-grid-element-2">p</div>
                            <div className="trip-grid-element-3">p</div>
                            <div className="trip-grid-element-4">p</div>
                            <div className="trip-grid-element-5">p</div>
                            <div className="trip-grid-element-6">p</div>
                        </div>
                        <div onClick={onShowFinalPage} className="trip-button">Book the trip</div>
                    </div>
                </div>
            </div>
        </div>
    )
}