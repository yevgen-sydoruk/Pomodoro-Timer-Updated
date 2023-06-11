import { minutesToDuration } from "../../utils/duration";
import React from "react";

function FocusDurationControl({
    focusDuration,
    handleFocusDurationClick,
    session,
}) {
    return (
        <div className="col">
            <div className="input-group input-group-lg mb-2">
                <span className="input-group-text" data-testid="duration-focus">
                    {/* TODO: Update this text to display the current focus session duration DONE*/}
                    Focus Duration: {minutesToDuration(focusDuration)}
                </span>
                <div className="input-group-append">
                    {/* TODO: Implement decreasing focus duration and disable during a focus or break session DONE*/}
                    <button
                        type="button"
                        className="btn btn-secondary"
                        data-testid="decrease-focus"
                        disabled={session}
                        onClick={() =>
                            handleFocusDurationClick(
                                (focusDuration) =>
                                    Math.max(focusDuration - 5, 5)
                                // focusDuration > 5
                                //     ? focusDuration - 5
                                //     : focusDuration
                            )
                        }
                    >
                        <span className="oi oi-minus" />
                    </button>
                    {/* TODO: Implement increasing focus duration  and disable during a focus or break session DONE*/}
                    <button
                        type="button"
                        className="btn btn-secondary"
                        data-testid="increase-focus"
                        disabled={session}
                        onClick={() =>
                            handleFocusDurationClick(
                                (focusDuration) =>
                                    Math.min(focusDuration + 5, 60)
                                // focusDuration < 60
                                //     ? focusDuration + 5
                                //     : focusDuration
                            )
                        }
                    >
                        <span className="oi oi-plus" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FocusDurationControl;
