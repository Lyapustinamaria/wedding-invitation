import React from "react";
import { useState } from "react";
import axios from "axios";

const InformationAboutGuests = () => {
    const [attendingWedding, setAttendingWedding] = useState(false)
    const [fullName, setFullName] = useState('')
    const [attendingWithPartner, setAttendingWithPartner] = useState(false)
    const [partnerName, setPartnerName] = useState('')
    const [location, setLocation] = useState('')
    const [allergy, setAllergy] = useState('')
    const [hobby, setHobby] = useState('')
    const [isSend, setIsSend] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            attendingWedding,
            fullName,
            attendingWithPartner,
            partnerName,
            location,
            allergy,
            hobby
        };

        try {
            const response = await axios.post(
                "https://script.google.com/macros/s/AKfycbwP7t3FjH49r1kyvhtUc5swPWwMfORFOV_VEMJcGZgX3XfjR6nZCMrKqWyNHljOossC/exec",
                formData
            );
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleAttendingWeddingChange = (e) => {
        setAttendingWedding(e.target.value)
    }

    const handleFullNameChange = (e) => {
        setFullName(e.target.value)
    }

    const handleAttendingWithPartnerChange = (e) => {
        setAttendingWithPartner(e.target.value)
    }

    const handlePartnerNameChange = (e) => {
        setPartnerName(e.target.value)
    }

    const handleLocationChange = (e) => {
        setLocation(e.target.value)
    }

    const handleAllergyChange = (e) => {
        setAllergy(e.target.value)
    }

    const handleHobbyChange = (e) => {
        setHobby(e.target.value)
    }

    return (
        <div class="container-fluid mt-5">
            <div class="row">
                <div class="col-sm-12">
                    <h2 class="mb-3">
                        Заинтригованы?
                    </h2>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <p>
                    Оставьте нам основную информацию о себе, чтобы мы могли лучше подготовиться к мероприятию. 
                    А также следите за нашим телеграм-ботом, он будет присылать вам информацию обо всех обновлениях.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3 row">
                            <p>
                                Вы планируете к нам присоединиться?
                            </p>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Да
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Нет
                                </label>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <p>
                                Укажите свои фамилию и имя
                            </p>
                            <div class="form">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Иванов Иван"
                                    value={fullName}
                                    onChange={handleFullNameChange}
                                />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <p>
                                Вы будете один или с партнером?
                            </p>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Один
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    С партнером
                                </label>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <p>
                                Укажите имя партнера
                            </p>
                            <div class="form">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Иванов Иван"
                                    value={partnerName}
                                    onChange={handlePartnerNameChange}
                                />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <p>
                                В каких странах вы будете с нами?
                            </p>
                            <p class="help-text">
                                Если вы планируете быть с нами в обеих странах, то выбирайте оба вариант.
                            </p>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Грузия
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Армения
                                </label>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <p>
                                Пожалуйста, расскажите нам побольше о себе и своем партнере
                            </p>
                            <p>
                                Есть ли у вас аллергия на какие-то продукты?
                            </p>
                            <div class="form">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Иванов Иван"
                                    value={allergy}
                                    onChange={handleAllergyChange}
                                />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <p>
                                Какую музыку вы любите? Укажите три свои любимые песни
                            </p>
                            <div class="form">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Иванов Иван"
                                    value={hobby}
                                    onChange={handleHobbyChange}
                                />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <button type="submit" className="btn btn-primary">
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
                <div class="col-sm-3"></div>
            </div>
        </div>
    )
}

export {InformationAboutGuests}