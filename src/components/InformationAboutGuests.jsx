import React from "react";
import { useState } from "react";
import axios from "axios";

const InformationAboutGuests = () => {

    const [formData, setFormData] = useState({
        attendingWedding: "",
        fullName: "",
        attendingWithPartner: "",
        partnerName: "",
        armenia: false,
        georgia: false,
        allergy: "",
        hobby: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
    };  

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: checked,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }
    
        try {
            const response = await axios.post(
                "https://script.google.com/macros/s/AKfycbzaRgAfDP7HbKBNEWFugVAq0Yp0Qsd81O8fwpHYWOoLjh0D_HJkRHyp3QPvzB0bthLX/exec",
                formDataToSend
            );
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

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
                <div class="col-sm-12 mb-3">
                    <p>
                    Оставьте нам основную информацию о себе, чтобы мы могли лучше подготовиться к мероприятию. 
                    А также следите за нашим телеграм-ботом, он будет присылать вам информацию обо всех обновлениях.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <form 
                        onSubmit={handleSubmit}
                    >
                        <div class="mb-3 row">
                            <p class='user-form'>
                                Вы планируете к нам присоединиться?
                            </p>
                            <div class="form-check">
                                <input 
                                    class="form-check-input" 
                                    type="radio" 
                                    name="attendingWedding" 
                                    id="attendingWedding1"
                                    value="Да"
                                    checked={formData.attendingWedding === "Да"}
                                    onChange={handleChange}
                                />
                                <label class="form-check-label" for="attendingWedding1">
                                    Да
                                </label>
                            </div>
                            <div class="form-check">
                                <input 
                                    class="form-check-input" 
                                    type="radio" 
                                    name="attendingWedding" 
                                    id="attendingWedding2"
                                    value="Нет"
                                    checked={formData.attendingWedding === "Нет"}
                                    onChange={handleChange}
                                />
                                <label class="form-check-label" for="attendingWedding2">
                                    Нет
                                </label>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <p class='user-form'>
                                Укажите свои фамилию и имя
                            </p>
                            <div class="form">
                                <input
                                    type="text"
                                    class="form-control"
                                    name = "fullName"
                                    placeholder="Иванов Иван"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <p class='user-form'>
                                Вы будете один или с партнером?
                            </p>
                            <div class="form-check">
                                <input 
                                    class="form-check-input" 
                                    type="radio" 
                                    name="attendingWithPartner" 
                                    id="single"
                                    value="Один"
                                    checked={formData.attendingWithPartner === "Один"}
                                    onChange={handleChange}
                                />
                                <label class="form-check-label" for="single">
                                    Один
                                </label>
                            </div>
                            <div class="form-check">
                                <input 
                                    class="form-check-input" 
                                    type="radio" 
                                    name="attendingWithPartner" 
                                    id="withPartner"
                                    value="С партнером"
                                    checked={formData.attendingWithPartner === "С партнером"}
                                    onChange={handleChange}
                                />
                                <label class="form-check-label" for="withPartner">
                                    С партнером
                                </label>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <p class='user-form'>
                                Укажите имя партнера
                            </p>
                            <div class="form">
                                <input
                                    type="text"
                                    class="form-control"
                                    name = "partnerName"
                                    value={formData.partnerName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <p class='user-form'>
                                В каких странах вы будете с нами?
                            </p>
                            <p class="help-text">
                                Если вы планируете быть с нами в обеих странах, то выбирайте оба вариант.
                            </p>
                            <div class="form-check">
                                <input 
                                    class="form-check-input" 
                                    type="checkbox" 
                                    id="georgia" 
                                    name="georgia" 
                                    checked={formData.georgia} 
                                    onChange={handleCheckboxChange} 
                                />
                                <label class="form-check-label" for="georgia">
                                    Грузия
                                </label>
                            </div>
                            <div class="form-check">
                                <input 
                                    class="form-check-input" 
                                    type="checkbox" 
                                    id="armenia" 
                                    name="armenia" 
                                    checked={formData.armenia} 
                                    onChange={handleCheckboxChange}
                                />
                                <label class="form-check-label" for="armenia">
                                    Армения
                                </label>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <p class='user-form'>
                                Пожалуйста, расскажите нам побольше о себе и своем партнере
                            </p>
                            <p class='user-form'>
                                Есть ли у вас аллергия на какие-то продукты?
                            </p>
                            <div class="form">
                                <input
                                    type="text"
                                    class="form-control"
                                    name = "allergy"
                                    value={formData.allergy}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <p class='user-form'>
                                Какую музыку вы любите? Укажите три свои любимые песни
                            </p>
                            <div class="form">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="hobby"
                                    value={formData.hobby}
                                    onChange={handleChange}
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