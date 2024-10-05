import React from 'react'

export const Footer = () => {
  return (
    <footer className="block bg-black text-white">
      {/* Container */}
      <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
        {/* Component */}
        <div className="sm:flex-row flex justify-between flex-col">
          <h2 className="font-bold text-3xl md:text-5xl w-full max-w-xl">
            Lightning fast Webflow Dev made easy
          </h2>
          <div className="mt-8 md:mt-0">
            <div className="mb-4 flex max-w-72 items-start justify-start">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94bb99e6cf78_MapPin.svg"
                alt=""
                className="inline-block mr-3"
              />
              <p className="text-white text-sm sm:text-base">
                8502 Preston Rd. Inglewood, Maine 98380, USA
              </p>
            </div>
            <div className="mb-4 flex max-w-72 items-start justify-start">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a944119e6cf76_EnvelopeSimple-2.svg"
                alt=""
                className="inline-block mr-3"
              />
              <p className="text-white text-sm sm:text-base">
                support@flowspark.co
              </p>
            </div>
          </div>
        </div>
        <div className="mb-14 w-full border-b border-white mt-12"></div>
        <div className="md:flex-row flex justify-between sm:items-center sm:flex-col items-start flex-col-reverse">
          
          <p className="text-white text-sm sm:text-base">
            © Copyright 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
