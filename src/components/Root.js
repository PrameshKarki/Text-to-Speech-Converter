import { useState, useEffect } from "react";
import converter from "../utils/converter";



const Root = () => {
    const [values, setValues] = useState({
        text: "",
        voice: "English (Lancaster)"
    });

    const [options, setOptions] = useState([]);


    useEffect(() => {
        const voiceList = speechSynthesis.getVoices();
        setOptions(voiceList);
    }, [])

    const inputChangeHandler = (event) => {
        let { name, value } = event.target;
        setValues(latestValue => { return { ...latestValue, [name]: value } })
    }

    const convertHandler = () => {
        if (values.text !== "")
            converter(values, options);
    }

    return (
        <div className="bg-white shadow-md rounded-md p-3">
            <h1 className="text-2xl text-center my-2">Text to Speech Converter</h1>
            <div className="form-control flex flex-col">
                <label htmlFor="text" className=" text-lg my-2">Enter Text</label>
                <textarea name="text" id="text" cols="30" rows="8" className="block border border-gray-200 focus:border-gray-400 outline-none p-2 resize-none" onChange={(e) => { inputChangeHandler(e) }}></textarea>
            </div>
            <div className="form-control flex flex-col">
                <label htmlFor="voice" className="text-lg my-2">Select Voice</label>
                <div className="flex items-center border border-gray-200 ">
                    <select name="voice" id="voice" className="block w-full bg-transparent p-3 outline-none" value={values.voice} onChange={(e) => inputChangeHandler(e)}>
                        {options.map((voice) => { return <option key={voice.name} value={voice.name}>{voice.name} ({voice.lang})</option> })}
                    </select>
                </div>
            </div>
            <button className="bg-blue-800 text-white block w-full py-2 my-4 hover:bg-blue-900 hover:shadow-md" onClick={convertHandler}>Convert to Speech</button>
        </div>
    )
}

export default Root;