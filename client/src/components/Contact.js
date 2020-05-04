import React from "react"

const Contact = () => {
  return (
    <div className="mainbody">
      <div className="mainbodyheader">Contact</div>

      <form action="">
        Name:<br/>
        <input type="text" name="Name" value=""/>
        <br/>
        Email:
        <br/>
        <input type="text" name="Email" value=""/>
        <br/>
        Message:<br/>
        <input type="message" name="Message" value=""/>
        <br></br>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}
export default Contact