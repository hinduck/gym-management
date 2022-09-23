import React from 'react'

function Contact() {
  return (
    <div id="contact">
        <h1>CONTACT US</h1>
        <form action="">
            <input type="text" placeholder="Full Name" required/>
            <input type="email" placeholder="Your Email" required/>
            <input type="telephone" placeholder="Telephone" required/>
            <textarea placeholder="Write here........." name="message"></textarea>
            <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}

export default Contact