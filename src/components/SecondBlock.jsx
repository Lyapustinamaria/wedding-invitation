import React from "react";

function SecondBlock () {
    return (
        <div class="row mb-5">
            <div class="col-sm-6">
                <div class="row">
                    <img class='first-img' src="images/udachi.png" alt="Image" />
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <button class='image-button' onclick="handleImageClick()">
                            <img class='img-in-button' src="images/transfer.png" alt="Image" />
                        </button>
                    </div>
                    <div class="col-sm-6">
                        <button class='image-button' onclick="handleImageClick()">
                            <img class='img-in-button' src="images/package.png" alt="Image" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 mx-auto">
                <p>
                    Это то, что мы чаще всего желаем друг другу 
                    и то, чего, в последние годы нам явно недостает.
                    Однако то, что мы находимся в безопасности и продолжаем общаться – огромная удача! 
                    И именно она свела вместе Машу и Митю. Мы приглашаем наших близких и друзей встретиться с нами в августе, чтобы обняться и пожелать друг другу удачи.<br/>
                    <br/>
                    Вспомните, где происходили самые теплые вечера вашего детства? Место, куда так приятно поехать с друзьями, и где всегда ждут с пирожками, компотом и сказками на ночь. Сегодня большинство из нас его лишены, ведь мы далеко от дома. Это место – дача.<br/> 
                    <br/>
                    Мы подарим вам теплый вечер на самой настоящей даче – с домашней едой, песнями, танцами и самыми близкими людьми.<br/>
                    <br/>
                    Но сначала нам нужно узнать, 
                    готовы ли вы к приключениям?
                </p>
            </div>
        </div>
    )
}

export {SecondBlock}