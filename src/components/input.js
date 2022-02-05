import React from 'react'



export default function Input({input,setinput,findweather}) {
    
        const handlechange=(e)=>{
          setinput(e.target.value)
        }
        const handlesubmit=(e)=>{
              e.preventDefault()
        }

    return (
        <>
             <div class="text col-lg-6 col-md-6 col-sm-12">
                <div class="text">
              <h1>Different kind of weather</h1>
              <h1>inside of 24/7 hours</h1>
              <h3>Best way to know your city weather</h3>
              <form onSubmit={handlesubmit}>
              <input type="text"
                   placeholder="search city/place" 
                    id="input" 
                    onChange={handlechange}
                   value={input}
                   autocomplete="off"/>
              <button onClick={findweather} >Get update</button>
              </form>
            </div>
            </div>
        </>
    )
}
