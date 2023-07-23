'use client'
import Navbar from "@/components/Navbar/Navbar"


export default function Home() {
  return (
    <>
      <div className="main">
        <Navbar page={'home'} />
        <div className="min-h-full flex justify-center items-center">
          <div className=" text-white text-center">
            <h1 className="md:text-5xl font-semibold leading-normal">
              Discover Your Life, Travel <br /> Where You Want
            </h1>
            <p className="mt-10 leading-loose sm:text-sm md:text-base">
              Would you like to explore natural paradises around the world? Let&apos;s discover the best <br /> destinations together!
            </p>
          </div>
        </div>
      </div>
        <div className="flex justify-center mt-14">
          <h1 className="service text-customGray font-bold text-4xl">OUR SERVICES</h1>
        </div>
        <div className="container flex justify-center items-center mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl shadow-lg relative overflow-hidden text-center group m-5">
              <img
                src="https://www.flamingotravels.co.in/blog/wp-content/uploads/2022/01/Main_image3.jpg"
                alt=""
                className="transform scale-100 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-100 ">
                <h1 className="text-white text-xl font-bold">Flight Tickets</h1>
              </div>
            </div>
            <div className="rounded-xl shadow-lg relative overflow-hidden text-center group m-5">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/LT_471_%28LTZ_1471%29_Arriva_London_New_Routemaster_%2819522859218%29.jpg/1024px-LT_471_%28LTZ_1471%29_Arriva_London_New_Routemaster_%2819522859218%29.jpg"
                alt=""
                className="transform scale-100 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-100 ">
                <h1 className="text-white text-xl font-bold">Bus Tickets</h1>
              </div>
            </div>
            <div className="rounded-xl shadow-lg relative overflow-hidden text-center group m-5">
              <img
                src='/images/Train.jpg'
                alt=""
                className="transform scale-100 group-hover:scale-110 transition-transform duration-300 "
              />
              <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-100 ">
                <h1 className="text-white text-xl font-bold">Train Tickets</h1>
              </div>
            </div>
            <div className="rounded-xl shadow-lg relative overflow-hidden text-center group m-5">
              <img
                src="https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/passport-seva-kendra.jpg"
                alt=""
                className="transform scale-100 group-hover:scale-110 transition-transform duration-300 h-full"
              />
              <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-100 ">
                <h1 className="text-white text-xl font-bold">Passport</h1>
              </div>
            </div>
            <div className="rounded-xl shadow-lg relative overflow-hidden text-center group m-5">
              <img
                src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/01/14101943/New-Featured-1-3.jpg?tr=w-1366"
                alt=""
                className="transform scale-100 group-hover:scale-110 transition-transform duration-300 h-full"
              />
              <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-100 ">
                <h1 className="text-white text-xl font-bold">Tour Package</h1>
              </div>
            </div>
            <div className="rounded-xl shadow-lg relative overflow-hidden text-center group m-5">
              <img
                src="https://lh5.googleusercontent.com/ILzM0SqdZaMfMHdO6LMOQpmxaX8gULG4DBKW3zAuXpMNO6AMSQFa3MpTsB-_H2o9--hDlH0hO1YlABCTVUQFGamAUcLdSLqf8-05ZbnPjBw9kCDMyYpHvyo72e0Z29iJ1FriqE6K"
                alt=""
                className="transform scale-100 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-100 ">
                <h1 className="text-white text-xl font-bold">Hajj & Umra</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-5">
            {/* Text Column */}
            <div className="md:pr-8">
              <h2 className="text-4xl md:text-6xl text-gray-800 font-bold mb-4">
                Unlock a world of extraordinary experiences with Ticket Feed!
              </h2>
              <p className="text-lg mb-4">
                Prepare for unforgettable journeys, indulge in remarkable destinations, and let Ticket Feed curate your dream adventures into cherished memories that will stay with you forever.
              </p>
            </div>
            {/* Image Column */}
            <div className="md:pl-8">
              <img
                src="https://iotcdn.oss-ap-southeast-1.aliyuncs.com/Travel.jpg"
                alt="Ticket Feed Image"
                className="rounded-lg shadow-lg object-cover h-full"
              />
            </div>
          </div>
      </div>
      <div className="relative flex justify-center items-center">
        <img
          src="/images/about.jpg"
          alt="Background Image"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex items-center bg-black bg-opacity-40">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">About Us</h2>
            <p className="text-white">
              Ticket Feed is your ultimate travel companion, dedicated to providing an unparalleled booking experience that knows no bounds. From flights and accommodations to unforgettable adventures, our platform offers convenience, ease, and the best deals, making your travel dreams a reality with every click. Say goodbye to travel uncertainties and embrace a world of limitless possibilities with Ticket Feed by your side.
            </p>
            <div className="mt-4">
              <button className="bg-transparent border border-white text-white py-2 px-4 rounded-md hover:bg-white hover:text-black transition-colors duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-white py-8 mt-10">
        <div className="container mx-auto px-4">
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center mb-10">
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <h3 className="text-gray-800 text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="text-gray-600">
                <li className="mb-2"><a href="#">Home</a></li>
                <li className="mb-2"><a href="#">About</a></li>
                <li className="mb-2"><a href="#">Services</a></li>
                <li className="mb-2"><a href="#">Contact</a></li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <h3 className="text-gray-800 text-lg font-semibold mb-4">Connect</h3>
              <ul className="flex space-x-4 text-gray-600">
                <li><a href="#" className="hover:text-gray-800 transition duration-300 ease-in-out"><i className="fab fa-facebook"></i></a></li>
                <li><a href="#" className="hover:text-gray-800 transition duration-300 ease-in-out"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#" className="hover:text-gray-800 transition duration-300 ease-in-out"><i className="fab fa-instagram"></i></a></li>
                {/* Add other social media icons as needed */}
              </ul>
            </div>

            {/* Address */}
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0 text-center lg:text-left">
              <h3 className="text-gray-800 text-lg font-semibold mb-4">Address</h3>
              <p className="text-gray-600">
                123 Main Street, City, Country
              </p>
              <p className="text-gray-600">
                Phone: (123) 456-7890
              </p>
              <p className="text-gray-600">
                Email: info@example.com
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-600">
            &copy; {new Date().getFullYear()} Ticket Feed. All rights reserved.
          </div>
        </div>
      </footer>
    </>

  )
}
