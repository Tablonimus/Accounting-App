import React from "react";
import NavBarHome from "../Bars/NavBarHome";
import { Card } from "flowbite-react";
import plaza1 from "../../assets/images/plaza1.jpg";
export default function Home() {
  return (
    <div className="w-full h-full flex flex-col bg-gray-900">
      <div>
        <NavBarHome />
      </div>
      <div className="flex flex-row">
        <div className="grid grid-cols-2 border ">
          <div className="max-w-sm m-2  ">
            <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
          <div className="max-w-sm m-2  ">
            <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
          <div className="max-w-sm m-2  ">
            <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
          <div className="max-w-sm m-2  ">
            <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0">
    
      </div>
    </div>
  );
}
