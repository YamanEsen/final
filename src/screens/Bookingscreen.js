import React, {useState, useEffect} from 'react'
import axios from 'axios'


function Bookingscreen(match) {
   const [loading, setloading] = useState(true)
   const [error, seterror] = useState()
   const [room, setroom] = useState()
   useEffect(() => {
    const fetchData = async () => {
      try {

         setloading(true)
        const response = await axios.get('/api/rooms/getroombyid', {roomid: match.params.roomid});
        setroom(response.data);
         setloading(false)

      } catch (error) {
         setloading(false)
         seterror(true)
         
      }
    };

    fetchData();
  }, []);
  return (
    <div>

      {loading ? (<h1>Loading...</h1>) : error ? (<h1>Error...</h1>) : (<div>
            
            <div className='row'>
               <div className='col-md-5'>
                  <h1>{room.name}</h1>
                  <img src={room.imageurls[0]} className='bigimg' />
               </div>
               <div className='col-md-5'>
                  <div>
                      <h1>Booking Details</h1>
                  <hr/>

                  <b>
                  <p>Name: </p>
                  <p>From Date:</p>
                  <p>To Date: </p>
                  <p>Max Count: {room.maxcount}</p>
                  </b>
                  </div>

                  <div>
                     <h1>Amount</h1>
                     <hr/>
                     <p>Total days:</p>
                     <p>Rent per day: {room.rentperday}</p>
                     <p>Total Amount:</p>

                  </div>

                  <div>
                     <button className='bn btn-primary'>Pay Now</button>
                  </div>
               </div>

            </div>
         </div>)}

    </div>
  )
}

export default Bookingscreen