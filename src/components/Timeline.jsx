import React from "react";

function Timeline() {
    return (
        <div className="row mt-5">
            <div class="timeline">
                <div class="timeline-item right">
                    <div class="timeline-content">
                        <h3>Событие 1</h3>
                        <p>Описание события 1</p>
                    </div>
                </div>
                <div class="timeline-item left">
                    <div class="timeline-content">
                        <h3>Событие 2</h3>
                        <p>Описание события 2</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Timeline };