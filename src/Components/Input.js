import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Input() {
    let [inputValue, setInputValue] = useState("");
    let [noteID, setnoteID] = useState(101);
    let [divId, setId] = useState(1);
    const inputBox = document.getElementById("inputNote");
    const notebox = document.getElementById(divId);
    const note = document.getElementById(noteID);

    // Take the note as input -->
    const inputNote = (event) => {
        setInputValue(event.target.value);
    }


    // Deletes a note -->
    const deleteNote = () => {
        note.innerHTML = "";
        setnoteID(noteID + 1);
    }
    let cod1, cod2, cod3, cod4, cod5, cod6, cod7, cod8, cod9, cod10, cod11, cod12, cod13, cod14 = 0;
    {
        if (divId == 2) {
            cod1 = 1;
        }
        if (divId == 3) {
            cod1 = 1;
            cod2 = 1;
        }
        if (divId == 4) {
            cod1 = 1;
            cod2 = 1;
            cod3 = 1;
        }
        if (divId == 5) {
            cod1 = 1;
            cod2 = 1;
            cod3 = 1;
            cod4 = 1;
        }
        if (divId == 6) {
            cod1 = 1;
            cod2 = 1;
            cod3 = 1;
            cod4 = 1;
            cod5 = 1;
        }
        if (divId == 7) {
            cod1 = 1;
            cod2 = 1;
            cod3 = 1;
            cod4 = 1;
            cod5 = 1;
            cod6 = 1;
        }
        if (divId == 8) {
            cod1 = 1;
            cod2 = 1;
            cod3 = 1;
            cod4 = 1;
            cod5 = 1;
            cod6 = 1;
            cod7 = 1;
        }
        if (divId == 9) {
            cod1 = 1;
            cod2 = 1;
            cod3 = 1;
            cod4 = 1;
            cod5 = 1;
            cod6 = 1;
            cod7 = 1;
            cod8 = 1;
        }
        if (divId == 10) {
            cod1 = 1;
            cod2 = 1;
            cod3 = 1;
            cod4 = 1;
            cod5 = 1;
            cod6 = 1;
            cod7 = 1;
            cod8 = 1;
            cod9 = 1;
        }
        if (divId == 11) {
            cod1 = 1;
            cod2 = 1;
            cod3 = 1;
            cod4 = 1;
            cod5 = 1;
            cod6 = 1;
            cod7 = 1;
            cod8 = 1;
            cod9 = 1;
            cod10 = 1;
        }
        if (divId == 12) {
            cod1 = 1;
            cod2 = 1;
            cod3 = 1;
            cod4 = 1;
            cod5 = 1;
            cod6 = 1;
            cod7 = 1;
            cod8 = 1;
            cod9 = 1;
            cod10 = 1;
            cod11 = 1;
        }
        if (divId == 13) {
            cod1 = 1;
            cod2 = 1;
            cod3 = 1;
            cod4 = 1;
            cod5 = 1;
            cod6 = 1;
            cod7 = 1;
            cod8 = 1;
            cod9 = 1;
            cod10 = 1;
            cod11 = 1;
            cod12 = 1;
        }
        if (divId == 14) {
            cod1 = 1;
            cod2 = 1;
            cod3 = 1;
            cod4 = 1;
            cod5 = 1;
            cod6 = 1;
            cod7 = 1;
            cod8 = 1;
            cod9 = 1;
            cod10 = 1;
            cod11 = 1;
            cod12 = 1;
            cod13 = 1;
        }
        if (divId == 15) {
            cod1 = 1;
            cod2 = 1;
            cod3 = 1;
            cod4 = 1;
            cod5 = 1;
            cod6 = 1;
            cod7 = 1;
            cod8 = 1;
            cod9 = 1;
            cod10 = 1;
            cod11 = 1;
            cod12 = 1;
            cod13 = 1;
            cod14 = 1;
        }
    }

    // Make a note -->
    const makeNote = () => {
        // If there is no input, an alert will be generated
        if (`${inputValue}` == "") {
            alert("Note Cannot Be Blank")
            return 0;
        }
        // If there is an input, note will be made by using innerHTML
        notebox.innerHTML = `<p>${inputValue}</p> <br/>`;
        setId(divId + 1);
        inputBox.value = "";
        setInputValue("");
    }

    return (
        <div>
            <Container style={{ display: "flex", flexDirection: "column" }}>
                <Form.Control type="text" placeholder="Take a note..." className='mt-5 mx-auto shadow text-wrap' id="inputNote" style={{ height: "50px", fontSize: "18px", width: "70%", overflowWrap: "break-word" }} onChange={inputNote} />
                <button onClick={makeNote} id='create_button' className='btn btn-success shadow mx-auto mt-2'>Create Note</button>
            </Container>


            <div className="notes container-lg mx-auto shadow my-3" id="114" style={{ width: "60%", backgroundColor: "white" }}><div id="14"></div>{cod14 ? (<div><button className='btn btn-danger m-3 shadow mx-auto mt-2' onClick={deleteNote}>Delete </button></div>) : ""}</div>
            <div className="notes container-lg mx-auto shadow my-3" id="113" style={{ width: "60%", backgroundColor: "white" }}><div id="13"></div>{cod13 ? (<div><button className='btn btn-danger m-3 shadow mx-auto mt-2' onClick={deleteNote}>Delete </button></div>) : ""}</div>
            <div className="notes container-lg mx-auto shadow my-3" id="112" style={{ width: "60%", backgroundColor: "white" }}><div id="12"></div>{cod12 ? (<div><button className='btn btn-danger m-3 shadow mx-auto mt-2' onClick={deleteNote}>Delete </button></div>) : ""}</div>
            <div className="notes container-lg mx-auto shadow my-3" id="111" style={{ width: "60%", backgroundColor: "white" }}><div id="11"></div>{cod11 ? (<div><button className='btn btn-danger m-3 shadow mx-auto mt-2' onClick={deleteNote}>Delete </button></div>) : ""}</div>
            <div className="notes container-lg mx-auto shadow my-3" id="110" style={{ width: "60%", backgroundColor: "white" }}><div id="10"></div>{cod10 ? (<div><button className='btn btn-danger m-3 shadow mx-auto mt-2' onClick={deleteNote}>Delete </button></div>) : ""}</div>
            <div className="notes container-lg mx-auto shadow my-3" id="109" style={{ width: "60%", backgroundColor: "white" }}><div id="9"></div>{cod9 ? (<div><button className='btn btn-danger m-3 shadow mx-auto mt-2' onClick={deleteNote}>Delete </button></div>) : ""}</div>
            <div className="notes container-lg mx-auto shadow my-3" id="108" style={{ width: "60%", backgroundColor: "white" }}><div id="8"></div>{cod8 ? (<div><button className='btn btn-danger m-3 shadow mx-auto mt-2' onClick={deleteNote}>Delete </button></div>) : ""}</div>
            <div className="notes container-lg mx-auto shadow my-3" id="107" style={{ width: "60%", backgroundColor: "white" }}><div id="7"></div>{cod7 ? (<div><button className='btn btn-danger m-3 shadow mx-auto mt-2' onClick={deleteNote}>Delete </button></div>) : ""}</div>
            <div className="notes container-lg mx-auto shadow my-3" id="106" style={{ width: "60%", backgroundColor: "white" }}><div id="6"></div>{cod6 ? (<div><button className='btn btn-danger m-3 shadow mx-auto mt-2' onClick={deleteNote}>Delete </button></div>) : ""}</div>
            <div className="notes container-lg mx-auto shadow my-3" id="105" style={{ width: "60%", backgroundColor: "white" }}><div id="5"></div>{cod5 ? (<div><button className='btn btn-danger m-3 shadow mx-auto mt-2' onClick={deleteNote}>Delete </button></div>) : ""}</div>
            <div className="notes container-lg mx-auto shadow my-3" id="104" style={{ width: "60%", backgroundColor: "white" }}><div id="4"></div>{cod4 ? (<div><button className='btn btn-danger m-3 shadow mx-auto mt-2' onClick={deleteNote}>Delete </button></div>) : ""}</div>
            <div className="notes container-lg mx-auto shadow my-3" id="103" style={{ width: "60%", backgroundColor: "white" }}><div id="3"></div>{cod3 ? (<div><button className='btn btn-danger m-3 shadow mx-auto mt-2' onClick={deleteNote}>Delete </button></div>) : ""}</div>
            <div className="notes container-lg mx-auto shadow my-3" id="102" style={{ width: "60%", backgroundColor: "white" }}><div id="2"></div>{cod2 ? (<div><button className='btn btn-danger m-3 shadow mx-auto mt-2' onClick={deleteNote}>Delete </button></div>) : ""}</div>
            <div className="notes container-lg mx-auto shadow my-3" id="101" style={{ width: "60%", backgroundColor: "white" }}><div id="1"></div>{cod1 ? (<div><button className='btn btn-danger m-3 shadow mx-auto mt-2' onClick={deleteNote}>Delete </button></div>) : ""}</div>
        </div>
    )
}

export default Input
