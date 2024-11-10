import { useRef } from "react";

const Background = () => {
    const ref = useRef(null); // Initialize the ref to null
    const redClick = () => {
        if (ref.current) {
            ref.current.style.backgroundColor = "red";
        }
    };

    const blueClick = () => {
        if (ref.current) {
            ref.current.style.backgroundColor = "blue";
        }
    };

    const greenClick = () => {
        if (ref.current) {
            ref.current.style.backgroundColor = "green";
        }
    };

    return (
        <div ref={ref} className="BgChanger h-screen bg-red-800">
            <div className='absolute left-1/2 transform -translate-x-1/2 justify-between object-bottom bottom-5 flex bg-gray-800 rounded-full h-16 w-96 px-10'>
                <button className='bg-red-800 w-16 my-auto h-10 text-white rounded-full' onClick={redClick}>Red</button>
                <button className='bg-blue-800 w-16 my-auto h-10 text-white rounded-full' onClick={blueClick}>Blue</button>
                <button className='bg-green-800 w-16 my-auto h-10 text-white rounded-full' onClick={greenClick}>Green</button>
            </div>
        </div>
    );
};

export default Background;
