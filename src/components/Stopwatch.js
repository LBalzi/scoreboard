import React, {useState} from "react";

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    return(
        <div className="stopwatch">
            <h2>Stopwatch</h2>
            <span className="stopwatch-time">0</span>
            <button onClick={() => setIsRunning((prevValue) => !prevValue)}>{isRunning ? "Stop" : "Start"}</button>
            <button onClick={() => setElapsedTime(0)}>Reset</button>
        </div>
    );
}

export default Stopwatch;