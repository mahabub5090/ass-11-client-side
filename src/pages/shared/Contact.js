import React from "react";
import useTitle from "../../hooks/useTitle";

const Contact = () => {
  useTitle("Contact");
  return (
    <>
      <div className="w-full flex items-center mx-6 justify-center my-12">
        <div className="bg-white shadow rounded py-12 lg:px-28">
          <h4 className="text-2xl text-center text-sky-400 font-bold my-4">
            Contact Form
          </h4>
          <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
            Let's contract with us...
          </p>
          <div className="md:flex items-center mt-12">
            <div className="md:w-72 flex flex-col">
              <label className="text-base font-semibold leading-none text-gray-800">
                Name :
              </label>
              <input
                tabIndex={0}
                arial-label="Please input your name"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input  name"
              />
            </div>
            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Email Address :
              </label>
              <input
                tabIndex={0}
                arial-label="Please input your email address"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input email address"
              />
            </div>
          </div>
          <div className="md:flex items-center mt-8">
            <div className="md:w-72 flex flex-col">
              <label className="text-base font-semibold leading-none text-gray-800">
                Subject
              </label>
              <input
                tabIndex={0}
                arial-label="Please input your subject or topic"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                placeholder="Please input company name"
              />
            </div>
            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Country
              </label>
              <input
                tabIndex={0}
                arial-label="Please input yor country name"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input country name"
              />
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col mt-8">
              <label className="text-base font-semibold leading-none text-gray-800">
                Message
              </label>
              <textarea
                tabIndex={0}
                className="h-36 text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
              />
            </div>
          </div>
          <p className="text-xs leading-3 text-gray-600 mt-4">
            Remember: By clicking submit you agree to our terms of service, privacy policy
            and how we use data as stated.
          </p>
          <div className="flex items-center justify-center w-full">
            <button className="mt-9 text-base font-semibold leading-none hover:rounded-full text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
