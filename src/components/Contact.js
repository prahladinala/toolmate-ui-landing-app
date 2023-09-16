"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="overflow-hidden bg-gray-900 py-16 px-6 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            Contact Us 🚀
          </h2>
        </div>
        <div className="mt-12">
          <form
            action="https://getform.io/f/783088b2-f8ef-4eb8-b058-bd4b793d5aef"
            method="POST"
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="organization"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium text-gray-400"
              >
                Phone Number
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full rounded-md border-transparent bg-transparent py-0 pl-4 pr-8 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option>IN</option>
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                </div>
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 pl-20 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="+1 (555) 987-6543"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Let's talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
