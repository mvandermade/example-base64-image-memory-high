import './App.css'
import {useEffect, useState} from "react"

function generateRandomBase64Image() {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions
    canvas.width = 200;
    canvas.height = 200;

    if(ctx == null) return ""

    // Fill the canvas with a random color
    ctx.fillStyle = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw some random shapes
    for (let i = 0; i < 10; i++) {
        ctx.fillStyle = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        ctx.beginPath();
        ctx.arc(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            Math.random() * 50,
            0,
            Math.PI * 2
        );
        ctx.fill();
    }

    // Convert the canvas to a Base64 string
    return canvas.toDataURL('image/png');
}

function App() {

    const [testSrc, setTestSrc] = useState<string>("")

    useEffect(() => {
        setInterval(() => {
            setTestSrc(`${generateRandomBase64Image()}`)
        }, 50)
    }, [])


  return (<img src={testSrc} alt={"123"}/>)
}

export default App
