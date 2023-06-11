import React from "react";
import { minutesToDuration, secondsToDuration } from "../../utils/duration";

function SessionShowcase({ session, focusDuration, breakDuration }) {
    return (
        <div>
            {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused DONE*/}

            {session && (
                <>
                    <div className="row mb-2">
                        <div className="col">
                            {/* TODO: Update message below to include current session (Focusing or On Break) total duration DONE*/}
                            <h2 data-testid="session-title">
                                {session?.label} for{" "}
                                {session?.label === "Focusing"
                                    ? minutesToDuration(focusDuration)
                                    : minutesToDuration(breakDuration)}{" "}
                                minutes
                            </h2>
                            {/* TODO: Update message below correctly format the time remaining in the current session  DONE*/}
                            <p className="lead" data-testid="session-sub-title">
                                {secondsToDuration(session?.timeRemaining)}{" "}
                                remaining
                            </p>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col">
                            <div
                                className="progress"
                                style={{ height: "20px" }}
                            >
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    aria-valuenow={`${
                                        (1 -
                                            session.timeRemaining /
                                                ((session?.label === "Focusing"
                                                    ? focusDuration
                                                    : breakDuration) *
                                                    60)) *
                                        100
                                    }`} // TODO: Increase aria-valuenow as elapsed time increases DONE
                                    style={{
                                        width: `${
                                            (1 -
                                                session.timeRemaining /
                                                    ((session?.label ===
                                                    "Focusing"
                                                        ? focusDuration
                                                        : breakDuration) *
                                                        60)) *
                                            100
                                        }%`,
                                    }} // TODO: Increase width % as elapsed time increases DONE
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default SessionShowcase;
