import React, { useState, useRef } from 'react'
// import styled from 'styled-components'

const FormDev = () => {
    const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbzJxMMjS-ryN8o2PFbFIQXdH2KejLiE5-KZ-KV1ET4n7Z-qSUcsnNhYAK5UEFQQ-Fau/exec"
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        fetch(scriptUrl, {
            method: 'POST',
            body: new FormData(formRef.current),

        }).then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
            setLoading(false)
        })
            .catch(err => console.log(err))
    }

    return (
        // <FormStyle>
        <div className="container">
            <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
                <div className="input-style">
                    <label htmlFor='name'>
                        Name
                    </label>
                    <input type="text" id="name" name="name" placeholder='Your Name *' />
                </div>
                <div className="input-style">
                    <label htmlFor='name'>Email</label>
                    <input type="email" name="email" placeholder='Your Email *' />
                </div>
                <div className="input-style">
                    <label htmlFor='name'>Phone No</label>
                    <input type="number" name="phone" placeholder='Your Phone *' />
                </div>


                <button value={loading ? "Loading..." : "SEND MESSAGE"} ></button>

            </form>
        </div>
        // </FormStyle>
    )
}

export default FormDev

// const FormStyle = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     .container{
//         background-color: #F9CFF2;
//         margin-top: 10%;
//         padding: 10rem 10rem 10rem 10rem;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         @media(max-width: 610px){
//             padding: 4rem 4rem 4rem 4rem;
//         }

//         .input-style{
//             padding-top: 0.8em;
//             display: flex;
//             flex-direction: column;
//             gap: 0.8em;

//             label{
//                 font-family: 'Poppins', sans-serif;
//             }

//             input{
//                 outline: none;
//                 border: none;
//                 padding: 0.8em;
//                 border-radius: 2em;
//             }
//             input[type=submit]{
//                 background-color: #52154E;
//                 color: #FFFFFFFF;
//                 font-weight: bold;


//             }
//         }

//     }

// `