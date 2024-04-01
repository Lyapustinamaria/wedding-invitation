import React from "react";
import { InformationAboutGuests } from "../components/InformationAboutGuests";
import { SecondBlock } from "../components/SecondBlock";
import { Timeline } from "../components/Timeline";


function Content() {
    return (
        <div class="container-fluid mt-5">
            <div class="row">
                <div class="col-1"></div>
                <div class="col-10">
                    <React.Fragment>
                        <SecondBlock/>
                        <Timeline/>
                        <InformationAboutGuests/>
                    </React.Fragment>
                </div>
                <div class="col-1"></div>
            </div>
        </div>   
    )
}

export {Content}