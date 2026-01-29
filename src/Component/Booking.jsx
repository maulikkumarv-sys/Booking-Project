// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// export default function Booking() {

//   const bookslots=[
//         { start: "09:00", end: "10:00" }, 
//         { start: "10:00", end: "11:00" },
//         { start: "11:00", end: "12:00" },
//         { start: "12:00", end: "13:00" },
//         { start: "14:00", end: "15:00" },
//         { start: "15:00", end: "16:00" },
//         { start: "16:00", end: "17:00" },

//   ]


//     const[state,setState]=useState({
//         username:"",
//         email:"",
//         phone:"",
//         date:"",
//         startTime:"",
//         endTime:""
//     })
// const today = new Date().toISOString().split("T")[0];

//     const[data,setData]=useState([])

//     function selectslot(slot){
//       setState({
//         ...state,
//         startTime:slot.start,
//         endTime:slot.end
//       })
//     }

//     function selectedslot(slot){
//       return data.some(
//         (time)=>
//         time.date===state.date && 
//         time.startTime===slot.start && 
//         time.endTime===slot.end

//       )
//     }

//     useEffect(()=>{
//         fetchData()
//     },[])

//     const addData = async () => {
//     try {
//       await axios.post("http://localhost:8002/booking/add", state);
//       setState({
//         username: "",
//         date: "",
//         startTime: "",
//         endTime: "",
//       });
//       fetchData();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//     const fetchData = async () => {
//     try {
//       const res = await axios.get("http://localhost:8002/booking/get");
//       setData(res.data); 
//       console.log(res.data)
//     } catch (error) {
//       console.log(error);
//     }
//   };



//   return (

//       <>
//       <div className="w-full">

//         <p className='text-5xl font-serif'>Book your appointment</p>

//       </div>







//     <div>


//             <input type="text" value={state.username} placeholder='username' onChange={(e)=>setState({
//               ...state,
//               username:e.target.value
//             })} />
//             <input type="text" value={state.email} placeholder='email' onChange={(e)=>setState({
//               ...state,
//               email:e.target.value
//             })} />
//             <input type="text" value={state.phone} placeholder='phone' onChange={(e)=>setState({
//               ...state,
//               phone:e.target.value
//             })} />
//             <input type='textarea' />
//          <input
// type="date"
//   value={state.date}
//   min={today}
//   onChange={(e) =>
//     setState({ ...state, date: e.target.value })
//   }
//   className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
// />
//          <input type="text" value={state.startTime} placeholder='startTime'  onChange={(e)=>setState({
//            ...state,
//            startTime:e.target.value
//           })} />
//          <input type="text" value={state.endTime} placeholder='endtime' onChange={(e)=>setState({
//            ...state,
//            endTime:e.target.value
//           })} />

//                 {bookslots.map((slot,i)=>{
//                    const booked=selectedslot(slot) 
//                    return <>
//                    <button onClick={()=>selectslot(slot)}
//                     className={`p-2 border rounded 
//               ${booked ? "bg-gray-300 cursor-not-allowed" : "bg-green-200"}
//               ${state.startTime === slot.start ? "ring-2 ring-black" : ""}
//             `}

//                     >slots

//                     {slot.start} - {slot.end}
//                    </button>


//                    </>

//                 })}



//           <button onClick={addData}>Book Appotment</button>



//      {data.map((el,i)=>{
//        return <li>
//               {el.username} <br />
//               {el.email} <br /> 
//               {el.phone} <br />
//               {el.date} <br />
//               {el.startTime} <br />
//               {el.endTime} <br />

//         </li>
//      })}
//     </div>

//      </>
//   )
// }

import React, { useEffect, useState } from "react";
import axios from "axios";

const TIME_SLOTS = [
  { start: "09:00", end: "10:00" },
  { start: "10:00", end: "11:00" },
  { start: "11:00", end: "12:00" },
  { start: "12:00", end: "13:00" },
  { start: "14:00", end: "15:00" },
  { start: "15:00", end: "16:00" },
  { start: "16:00", end: "17:00" },
];

export default function Booking() {
  const [state, setState] = useState({
    username: "",
    email: "",
    phone: "",
    date: "",
    startTime: "",
    endTime: "",


  });

  const [data, setData] = useState([]);
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const res = await axios.get(
        // `https://booking-project-backend-4.onrender.com/booking/get`
        'http://localhost:8002/booking/get'
      );
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };


  const isSlotBooked = (slot) => {
    return data.some(
      (b) =>
        b.date === state.date &&
        b.startTime === slot.start &&
        b.endTime === slot.end
    );
  };

  const addBooking = async () => {
  const { username, email, phone } = state;

  if (!username || !email || !phone) {
    alert("All fields are required");
    return;
  }

  if(!state.email.includes("@")){
    alert("in the email @ must be allowed")
    return;
  }
if (state.phone.length !== 10) {
  alert("Phone number must be 10 digits");
  return;
}

  
  

  try {
    await axios.post(
      
      // "https://booking-project-backend-4.onrender.com/booking/add", state
      "http://localhost:8002/booking/add",state
    
    );

    alert("Appointment Booked");

    setState({
      username: "",
      email: "",
      phone: "",
      date: "",
      startTime: "",
      endTime: "",
    });
  } catch (err) {
    alert(err.response?.data?.message || "Error");
  }
};
// https://loquacious-queijadas-0fcf66.netlify.app/book

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-serif text-center mb-8">
        Book Appointment
      </h1>

      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            placeholder="Name"
            value={state.username}
            name="username"
            onChange={(e) =>
              setState({ ...state, username: e.target.value })
            }
            className="border p-3 rounded"
          />

          <input
            placeholder="Email"
            name="email"
            value={state.email}
            onChange={(e) =>
              setState({ ...state, email: e.target.value })
            }
            className="border p-3 rounded"
          />

          <input
            type="number"
            name="number"
            placeholder="Phone"
            value={state.phone}
            onChange={(e) =>
              setState({ ...state, phone: e.target.value })
            }
            className="border p-3 rounded"
          />

          <input
            type="date"
            value={state.date}
            min={today}
            onChange={(e) =>
              setState({ ...state, date: e.target.value })
            } className="border p-3 rounded" />
        </div>

        <div className="mt-6">
          <p className="font-semibold mb-2">Select Time Slot</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {TIME_SLOTS.map((slot, i) => {
              const booked = isSlotBooked(slot);

              return (
                <button
                  key={i}
                  disabled={booked}
                  onClick={() =>
                    setState({
                      ...state,
                      startTime: slot.start,
                      endTime: slot.end,
                    })
                  }
                  className={`py-2 rounded text-sm font-medium
                      ${booked
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : state.startTime === slot.start
                        ? "bg-yellow-500 text-black"
                        : "border hover:bg-yellow-100"
                    }`}
                >
                  {slot.start} - {slot.end}
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={addBooking}
          disabled={!state.startTime}
          className="mt-6 w-full bg-yellow-500 py-3 rounded font-semibold hover:bg-yellow-400"
        >
          Book Appointment
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 px-4">

        <div className="space-y-6">

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.themetechmount.com/medisat/dm3/wp-content/uploads/sites/3/2023/08/team-04-90x90.png"
              alt=""
            />
            <p className="text-xl font-serif">
              Dr. Natalia zox <br />
              <span className="text-gray-600 text-base">Dentist (BPT)</span>
            </p>
          </div>

          <hr />

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.themetechmount.com/medisat/dm3/wp-content/uploads/sites/3/2023/08/team-05-90x90.png"
              alt=""
            />
            <p className="text-xl font-serif">
              Dr. Sarah rose <br />
              <span className="text-gray-600 text-base">Dentist (BDS)</span>
            </p>
          </div>

          <hr />

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.themetechmount.com/medisat/dm3/wp-content/uploads/sites/3/2023/08/team-02-90x90.png"
              alt=""
            />
            <p className="text-xl font-serif">
              Dr. Broklyn simm <br />
              <span className="text-gray-600 text-base">Estetic dentist (M.S)</span>
            </p>
          </div>

        </div>

        <div className="space-y-6">

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.themetechmount.com/medisat/dm3/wp-content/uploads/sites/3/2023/08/team-01-90x90.png"
              alt=""
            />
            <p className="text-xl font-serif">
              Dr. Garreth mills <br />
              <span className="text-gray-600 text-base">Ortodontist (BDS)</span>
            </p>
          </div>

          <hr />

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.themetechmount.com/medisat/dm3/wp-content/uploads/sites/3/2023/08/team-03-90x90.png"
              alt=""
            />
            <p className="text-xl font-serif">
              Dr. Maria gordian <br />
              <span className="text-gray-600 text-base">Prosthodontist (BDS)</span>
            </p>
          </div>

          <hr />

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.themetechmount.com/medisat/dm3/wp-content/uploads/sites/3/2023/08/team-06-90x90.png"
              alt=""
            />
            <p className="text-xl font-serif">
              Dr. Howard Holmes <br />
              <span className="text-gray-600 text-base">Head dentist (M.D)</span>
            </p>
          </div>

        </div>
      </div>


      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-serif mb-6">Appointments</h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((el, i) => (
            <div
              className="bg-white p-6 rounded-lg shadow"
            >
              <p><b>Name:</b> {el.username}</p>
              <p><b>Email:</b> {el.email}</p>
              <p><b>Phone:</b> {el.phone}</p>
              <p><b>Date:</b> {el.date}</p>
              <p><b>Time:</b> {el.startTime} - {el.endTime}</p>
              <p><b>Status: </b>{el.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
