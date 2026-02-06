

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
  const {id : doctorId}=useParams()

  const [data, setData] = useState([]);
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    fetch();
  });


  

  const fetch = async () => {
    try {
      const res = await axios.get(
        (`https://booking-project-backend-2.onrender.com/booking/doctor/${doctorId}`)
        

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
      
      await axios.post("https://booking-project-backend-2.onrender.com/booking/add", {
    ...state,
    doctorId
  })
    

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
          className="mt-6 w-full bg-yellow-500 py-3 rounded font-semibold hover:bg-yellow-400"
        >
          Book Appointment
        </button>
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
              <p><b>Doctor:</b> {el.doctorId?.doctorname}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
