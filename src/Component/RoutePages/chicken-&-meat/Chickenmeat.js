import React, { useContext } from "react";
import { Createcart } from "../../../Context/Context";
import { Link } from "react-router-dom";

const Chickenmeat = () => {

  const { chickenmeat } =
  useContext(Createcart);

  console.log("chickenmeat",chickenmeat)



  const people = [
    {
      name: 'Jane Cooper',
      title: 'Paradigm Representative',
      role: 'Admin',
      email: 'janecooper@example.com',
      telephone: '+1-202-555-0170',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    // More people...
  ]

  return (
    <div className=' pt-20 ' >
      <header className="bg-[#F8F9FA]">
        <p className="flex justify-start items-center px-2">
          <Link to="/" className="px-2 hover:text-[#00C851]" >Home</Link> /  <p className="px-2"> Chicken & Meat</p>
        </p>
      </header>
      <div>


      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {chickenmeat?.map((person) => (
        <li
          key={person.email}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <img alt="" src={person.data.image} className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" />
            <h3 className="mt-6 text-sm font-medium text-gray-900">{person.data.name}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{person.data.price}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {person.data.description}
                </span>
              </dd>
            </dl>
          </div>
          <div>
           
          </div>
        </li>
      ))}
    </ul>

      </div>


    </div>
  )
}

export default Chickenmeat