import React from "react";
import "./Home.css"

const Homepage = () => {
  return (
    <>
      <div class="relative isolate px-6 pt-14 lg:px-8">
        <div
          class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <div class="mx-auto max-w-2xl py-10 sm:py-48 lg:py-10">
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Efficient Energy Management System for Industries
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Optimize your energy consumption and reduce costs with our
              advanced energy management system designed specifically for
              industries. Our services section provides comprehensive solutions
              tailored to your business needs.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/auth"
                class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </a>
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
                Learn More<span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-indigo-600 py-10 sm:py-10">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-base font-semibold leading-7 text-indigo-200">
              Optimize Efficiency
            </h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Maximize energy efficiency and reduce costs
            </p>
            <p class="mt-6 text-lg leading-8 text-indigo-200">
              Feature section description
            </p>
          </div>
          <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div class="flex flex-col">
                <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  Real-time Monitoring
                </dt>
                <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-indigo-200">
                  <p class="flex-auto">
                    Monitor energy consumption in real-time to identify
                    inefficiencies and optimize usage
                  </p>
                  <p class="mt-6">
                    <a
                      href="#"
                      class="text-sm font-semibold leading-6 text-white"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
              <div class="flex flex-col">
                <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  Energy Analytics
                </dt>
                <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-indigo-200">
                  <p class="flex-auto">
                    Leverage advanced analytics to gain insights into energy
                    usage patterns and make data-driven decisions
                  </p>
                  <p class="mt-6">
                    <a
                      href="#"
                      class="text-sm font-semibold leading-6 text-white"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
              <div class="flex flex-col">
                <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  Fault Detection and Diagnostics
                </dt>
                <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-indigo-200">
                  <p class="flex-auto">
                    Detect and diagnose energy-related faults to prevent
                    equipment failures and reduce downtime
                  </p>
                  <p class="mt-6">
                    <a
                      href="#"
                      class="text-sm font-semibold leading-6 text-white"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div class="bg-white py-24 sm:py-32" id="targetDiv">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-4xl sm:text-center">
            <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Services
            </p>
          </div>
          <div class="mt-20 flow-root" >
            <div class="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
              <div class="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                <p class="mt-6 flex items-baseline gap-x-1">
                  <span class="text-3xl font-bold tracking-tight text-gray-900">
                    Energy-Management
                  </span>
                </p>
                <a
                  href="/dashboard"
                  class="mt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <p class="mt-10 text-sm font-semibold leading-6 text-gray-900">
                  Ideal for small industries
                </p>
                <ul
                  role="list"
                  class="mt-6 space-y-3 text-sm leading-6 text-gray-600"
                >
                  <li class="flex gap-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Real-time energy monitoring
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Energy consumption analysis
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Alerts and notifications
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Monthly reports
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    24/7 customer support
                  </li>
                </ul>
              </div>
              <div class="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                {/* <h3 class="text-base font-semibold leading-7 text-gray-900">Pro Plan</h3> */}
                <p class="mt-6 flex items-baseline gap-x-1">
                  <span class="text-3xl font-bold tracking-tight text-gray-900">
                    Carbon-Emission Management
                  </span>
                </p>
                <a
                  href="/C02-dashboard"
                  class="mt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <p class="mt-10 text-sm font-semibold leading-6 text-gray-900">
                  Perfect for medium-sized industries
                </p>
                <ul
                  role="list"
                  class="mt-6 space-y-3 text-sm leading-6 text-gray-600"
                >
                  <li class="flex gap-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Emission Monitoring and Tracking:
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Data Collection and Integration
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Emission Reduction Strategies
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Carbon Footprint Labeling
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Alerts and Notifications
                  </li>
                </ul>
              </div>
              <div class="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                {/* <h3 class="text-base font-semibold leading-7 text-gray-900">Advanced Plan</h3> */}
                <p class="mt-6 flex items-baseline gap-x-1">
                  <span class="text-3xl font-bold tracking-tight text-gray-900">
                    COST MANAGEMENT
                  </span>
                </p>
                <a
                  href="/Cost-dashboard"
                  class="mt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <p class="mt-10 text-sm font-semibold leading-6 text-gray-900">
                Designed for cost management in enterprises
                </p>
                <ul
                  role="list"
                  class="mt-6 space-y-3 text-sm leading-6 text-gray-600"
                >
                  <li class="flex gap-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Analysis for cost optimization
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Automated Cost Configuration Deployment
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Cross-platform Support
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Cost monitoring on various devices
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Integration with Network Management Tools
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-indigo-600" id="targetDiv2">
        <div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <br />
              Take control of your energy usage
            </h2>
            <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
              Discover how our energy management system can help your industry
              reduce costs and improve efficiency.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/dashboard"
                class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View Sample Dashboard
              </a>
              <a href="#" class="text-sm font-semibold leading-6 text-white">
                Learn more
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
