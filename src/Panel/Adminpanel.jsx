import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Adminpanel() {
  const [doctors, setDoctors] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://booking-project-backend-2.onrender.com/doctor/get")
      .then((res) =>
        setDoctors(res.data))
      .catch((err) =>
        console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("https://booking-project-backend-2.onrender.com/user/get")
      .then((res) =>
        setUsers(res.data))
      .catch((err) =>
        console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-serif">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Admin Dashboard
      </h1>

      <section className="mb-12 font-serif">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Doctors List
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {doctors.map((el, i) => (
            <div

              className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition"
            >

              <h3 className="text-lg font-semibold text-gray-800">
                {el.doctorname}
              </h3>
              <p className="text-gray-600">{el.specialist}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Users List
        </h2>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 font-semibold">Username:</th>
                <th className="p-3 font-semibold">Email Address:</th>
                <th className="p-3 font-semibold">Account Created</th>



              </tr>
            </thead>
            <tbody>
              {users.map((el, i) => (
                <tr

                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="p-3">{el.username}</td>
                  <td className="p-3">{el.email}</td>
                  {/* <td className="p-3">{el.createdAt}</td> */}
                  <td className="p-3">{new Date(el.createdAt).toLocaleString()}</td> 






                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
