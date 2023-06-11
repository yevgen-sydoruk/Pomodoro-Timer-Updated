import { minutesToDuration } from "../../utils/duration";
import React from "react";

function BreakDurationControl({
    breakDuration,
    handleBreakDurationClick,
    session,
}) {
    return (
        <div className="col">
            <div className="float-right">
                <div className="input-group input-group-lg mb-2">
                    <span
                        className="input-group-text"
                        data-testid="duration-break"
                    >
                        {/* TODO: Update this text to display the current break session duration DONE*/}
                        Break Duration: {minutesToDuration(breakDuration)}
                    </span>
                    <div className="input-group-append">
                        {/* TODO: Implement decreasing break duration and disable during a focus or break session DONE*/}
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-testid="decrease-break"
                            disabled={session}
                            onClick={() =>
                                handleBreakDurationClick(
                                    (breakDuration) =>
                                        Math.max(breakDuration - 1, 1)
                                    // breakDuration > 1
                                    //     ? breakDuration - 1
                                    //     : breakDuration
                                )
                            }
                        >
                            <span className="oi oi-minus" />
                        </button>
                        {/* TODO: Implement increasing break duration and disable during a focus or break session DONE*/}
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-testid="increase-break"
                            disabled={session}
                            onClick={() =>
                                handleBreakDurationClick(
                                    (breakDuration) =>
                                        Math.min(breakDuration + 1, 15)
                                    // breakDuration < 15
                                    //     ? breakDuration + 1
                                    //     : breakDuration
                                )
                            }
                        >
                            <span className="oi oi-plus" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreakDurationControl;
