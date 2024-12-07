import { CardDetails } from "@/components/CardDetails";


export default function Home() {
  return (
    <>
    <div className="flex">
    <div className="border-r-2 w-60 h-83 mt-9">
     <ul className="">
    <li className="">women fashion</li>
     <li className="pt-4">men fashion</li>
     <li className="pt-4">Electronics</li>
     <li className="pt-4">Home & Life style</li>
     <li className="pt-4">Medicine</li>
     <li className="pt-4">Sports and oudoors</li>
     <li className="pt-4">Baby's toys</li>
     <li className="pt-4">pets</li>
     <li className="pt-4">Health and Beauty</li></ul>
    </div>
    <img src="/images/main.png" alt="" className="mt-10 ml-12"/>
    </div>

    <div className="mt-40">
      
      <div className=" border-l-8 pl-5 rounded text-lg text-red-600 border-red-600 ">Today's</div>
      <div className="flex">
       <h1 className="text-4xl font-semibold mt-8 mr-7 inline-flex">Flash Sales</h1>
       <div className=" text-4xl font-semibold  ml-40 grid grid-rows-3">
        
       <div className=" text-sm mt-4"> Days  '&nbsp;&nbsp;': '&nbsp;&nbsp;' hours '&nbsp;&nbsp;&nbsp;':'&nbsp;&nbsp;&nbsp;' Mins 
         '&nbsp;&nbsp;&nbsp;': '&nbsp;&nbsp;&nbsp;'Secs </div>
       
        <div className="-mt-1">03 : 23 : 19 : 52</div></div>
        </div>
    </div>
    
    <CardDetails/>
    </>
  );
}
