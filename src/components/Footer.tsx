import React from "react";

const Footer = () => {
  return (
    <div className="bottom-0 h-96 -ml-20 text-white bg-black">
      <div className="pt-12 flex">
        <div className="my-2 mx-2 ml-20">
          
          <h1 className="  font-bold text-2xl ">
            Exclusive
          </h1>
          <p className=" text-1xl pt-5">Subscribe</p>
          <p className=" text-sm pt-5">Get 10% off on your First Order</p>
          
          <input
                        type="text"
                        className=" border border-gray-300 rounded py-2 pl-4 pr-10 text-sm  focus:outline-none focus:ring-2 focus:ring-gray-400 bg-black mt-6"
                        placeholder="Enter Your Email"
                    />
        </div>
        <div className="my-2 mx-2 ml-24">
         
          <h1 className=" font-bold text-1xl ">Support</h1>
          <p className="text-sm pt-5 font-light">111 bhijay sarani,dhaka, <br />
            DH 1515, Bangladesh.
          </p>
          <p className="text-sm pt-6 font-light">exclusive@gmail.com
          </p>
          <p className="text-sm pt-6 font-light">1111-2222-3333-4444
          </p>
        </div>
        <div className="my-2 mx-2 ml-24">
          
          <h1 className=" font-bold text-1xl ">Account</h1>
          <p className="text-sm pt-6 font-light">My Account
          </p>
          <p className="text-sm pt-5 font-light">Login/Register
          </p>
          <p className="text-sm pt-5 font-light">Cart
          </p>
          <p className="text-sm pt-5 font-light">Wishlist
          </p>
          <p className="text-sm pt-5 font-light">Shop
          </p>
        </div>
        <div className="my-2 mx-2 ml-24">
          
          <h1 className=" font-bold text-1xl ">Quick Link</h1>

          <p className="text-sm pt-5 font-light">Privacy Policy
          </p>
          <p className="text-sm pt-5 font-light">Terns of Use
          </p>
          <p className="text-sm pt-5 font-light">FAQ
          </p>
          <p className="text-sm pt-5 font-light">Contact
          </p>
        </div>
        <div className="my-2 mx-2 ml-24">
          
          <h1 className=" font-bold text-1xl ">Download App</h1>
          <p className="text-sm pt-5 pb-4 font-light">Score $3 with App Number Only
          </p>
          <img src="/images/Qr Code.png" alt="" className="inline" />
          <img src="/images/google.png" alt="" className="inline pl-1" />
          <img src="/images/icons.png" alt="" className="pt-4"/>
        </div>

        </div>
        <div className=" border-gray-600 w-full border-t-2 mt-8 ">
            <img src="/images/copyRight.png" alt="" className="m-auto pt-4" />
      </div>
    </div>
  );
};

export default Footer;
