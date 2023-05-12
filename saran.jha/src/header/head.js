import { useEffect, useRef } from "react";
import './head.css'
const Head = () => {
    const ref = useRef();
return (
    <nav className="grid grid-cols-2 sticky top-0 w-full bg-black">
        <div ref = {ref} className="p-8 flex flex-col items-start text-3xl font-extrabold" id="nameLogo">saran.jha</div>
        <div className="p-8 flex flex-col items-end" id="buttonContainer">
            <button>reach out</button>
        </div>
    </nav>
);
}

export default Head;
