import React from "react";
import { InformationAboutGuests } from "../components/InformationAboutGuests";
import { FirstBlock } from "../components/FirstBlock";
import { EventBlock } from "../components/EventBlock";


function Content() {

    // const eventsData = [
    //     { date: '25.08.2024', title: 'Заголовок события 1', text: 'Текст события 1' },
    //     { date: '26.08.2024', title: 'Заголовок события 2', text: 'Текст события 2' },
    //     { date: '27.08.2024', title: 'Заголовок события 3', text: 'Текст события 3' },
    // ];
    
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-1"></div>
                <div class="col-10">
                    <React.Fragment>
                        <FirstBlock/>
                            {/* {eventsData.map((event, index) => (
                            <EventBlock
                                key={index}
                                date={event.date}
                                title={event.title}
                                text={event.text}
                            />
                             ))} */}
                        <InformationAboutGuests/>
                    </React.Fragment>
                </div>
                <div class="col-1"></div>
            </div>
        </div>   
    )
}

export {Content}