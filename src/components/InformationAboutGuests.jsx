import React from "react";
import { useState } from "react";
import axios from "axios";
import Modal from "react-modal";

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

    const [modalIsOpen, setModalIsOpen] = useState(false);

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

        setModalIsOpen(true);
    };

    return (
        <div class="container-fluid mt-5">
            <div class="row">
                <div class="col-sm-12">
                    <h2 class="mb-3 mt-3">
                        Заинтригованы?
                    </h2>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 mb-3">
                    <p>
                    Оставьте нам основную информацию о себе, чтобы мы могли лучше подготовиться к мероприятию.
                    А также следите за нашим <a href="https://t.me/+HheZe9_kjGQxNjUy" target="_blank">
                         телеграм-каналом
                    </a>
                    , где будет публикаться вся информация об обновлениях.
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
                            <p class='user-form before-help'>
                                В каких странах вы будете с нами?
                            </p>
                            <p class="help-text">
                                Если вы планируете быть с нами в обеих странах, то выбирайте оба варианта.
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
                                    Грузия (официальная часть)
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
                                    Армения (вечеринка)
                                </label>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <p class="more-info">
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
                                Какую музыку вы любите? Укажите 6 своих любимых песен: 3 – под которые вам нравится танцевать, и еще 3 – которым вам нравится подпевать.
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
                            <button className="btn btn-primary submit-button" type="submit">
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
                <div class="col-sm-3"></div>
                <Modal
                    isOpen={modalIsOpen}
                    class="modal-content"
                    overlayClassName="modal-overlay"
                    onRequestClose={() => setModalIsOpen(false)}
                    contentLabel="Успешная отправка"
                >
                    <h3 class="modal-text">Спасибо, что поделились информацией о себе.</h3>
                    <p class="modal-text">Мы будем с нетерпением ждать на нашей свадьбе!</p>
                    <button class="btn btn-light" onClick={() => setModalIsOpen(false)}>Закрыть</button>
                </Modal>
            </div>
        </div>
    )
}

export {InformationAboutGuests}