import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full  bg-black text-white">
        <div className="w-full  bg-black text-white">
          <div className="flex flex-wrap gap-10 bg-black px-10 py-10 shadow-lg">
            <div className="flex flex-1 bg-black flex-col gap-4">
              <h2 className="font-semibold text-xl text-white">
                Why MakeMyTrip?
              </h2>
              <p className="text-sm text-justify text-gray-400 leading-relaxed">
                Established in 2000, MakeMyTrip has since positioned itself as
                one of the leading companies, providing great offers,
                competitive airfares, exclusive discounts, and a seamless online
                booking experience to many of its customers. The experience of
                booking your flight tickets, hotel stay, and holiday package
                through our desktop site or mobile app can be done with complete
                ease and no hassles at all. We also deliver amazing offers, such
                as Instant Discounts, Fare Calendar, MyRewardsProgram, MyWallet,
                and many more while updating them from time to time to better
                suit our customers’ evolving needs and demands.
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <h2 className="font-semibold text-xl text-white">
                Booking Flights with MakeMyTrip
              </h2>
              <p className="text-sm text-justify text-gray-400 leading-relaxed">
                At MakeMyTrip, you can find the best of deals and cheap air
                tickets to any place you want by booking your tickets on our
                website or app. Being India’s leading website for hotel, flight,
                and holiday bookings, MakeMyTrip helps you book flight tickets
                that are affordable and customized to your convenience. With
                customer satisfaction being our ultimate goal, we also have a
                24/7 dedicated helpline to cater to our customer’s queries and
                concerns. Serving over 5 million happy customers, we at
                MakeMyTrip are glad to fulfill the dreams of folks who need a
                quick and easy means to find air tickets. You can get a hold of
                the cheapest flight of your choice today while also enjoying the
                other available options for your travel needs with us.
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <h2 className="font-semibold text-xl text-white">
                Domestic Flights with MakeMyTrip
              </h2>
              <p className="text-sm text-justify text-gray-400 leading-relaxed">
                MakeMyTrip is India's leading player for flight bookings. With
                the cheapest fare guarantee, experience great value at the
                lowest price. Instant notifications ensure current flight
                status, instant fare drops, amazing discounts, instant refunds
                and rebook options, price comparisons and many more interesting
                features.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-black text-white py-8 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="#" className="flex items-center mb-4" prefetch={false}>
              <PlaneIcon className="w-8 text-white h-8 text-primary" />
              <span className="ml-2 text-lg font-bold">Make My Trip </span>
            </Link>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-white"
                prefetch={false}
              >
                <FacebookIcon className="w-6  text-white h-6" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-white"
                prefetch={false}
              >
                <TwitterIcon className="w-6  text-white h-6" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-white"
                prefetch={false}
              >
                <InstagramIcon className="w-6  text-white h-6" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="grid gap-2">
              <Link
                href="#"
                className="text-muted-foreground hover:text-white"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-white"
                prefetch={false}
              >
                Trips
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-white"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-white"
                prefetch={false}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4"> Destinations</h3>
            <div className="grid gap-2">
              <Link
                href="#"
                className="text-muted-foreground hover:text-white"
                prefetch={false}
              >
                Paris
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-white"
                prefetch={false}
              >
                New York
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-white"
                prefetch={false}
              >
                Tokyo
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-white"
                prefetch={false}
              >
                Sydney
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="grid gap-2">
              <div className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <MailIcon className="w-5 h-5 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">
                  info@travelbuddy.com
                </span>
              </div>
              <div className="flex items-center">
                <LocateIcon className="w-5 h-5 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">
                  123 Main St, Anytown USA
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container max-w-7xl mt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; 2024 Travel Buddy. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              to="#"
              className="text-xs text-muted-foreground hover:text-white"
              prefetch={false}
            >
              Terms of Service
            </Link>
            <Link
              to="#"
              className="text-xs text-muted-foreground hover:text-white"
              prefetch={false}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function PlaneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}
