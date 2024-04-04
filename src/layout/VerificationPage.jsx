import React from "react";
import { useState } from "react";
import {Main} from './Main'

const accessCode = process.env.REACT_APP_ACCESS_CODE;
console.log(process.env.REACT_APP_ACCESS_CODE);

const VerificationPage = () => {
    const [code, setCode] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    };

    const handleLogin = () => {
        if (code === accessCode) {
            setLoggedIn(true);
        } else {
            alert('К сожалению вы ввели некорректный код доступа. Попробуйсте еще раз.');
        }
    }

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <React.Fragment>
                        <Main />
                    </React.Fragment>
                </div>
            ) : (
                <div class="container-fluid mt-5">
                    <div class="row">
                        <div class="col-2"></div>
                        <div class="col-8">
                            <h3 class="mb-4">
                                Чтобы перейти на сайт, введите код, полученный в сообщении
                            </h3>
                            <form>
                                <div class="mb-3 row">
                                    <label
                                        htmlFor="exampleCode"
                                        class="col-sm-4 col-form-label"
                                    >
                                        Введите код под QR-кодом в сообщении
                                    </label>
                                    <div class="col-sm-8">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="1234567890"
                                            value={code}
                                            onChange={handleCodeChange}
                                        />
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <div class="col-sm-10 offset-sm">
                                        <button
                                            class="btn btn-primary submit-button"
                                            type="submit"
                                            onClick={handleLogin}
                                        >
                                            Перейти на сайт
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-2"></div>
                    </div>
                </div>
            )}  
        </div>
    )
}

export {VerificationPage}