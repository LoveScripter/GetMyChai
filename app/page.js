import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
   <div className="flex justify-center flex-col text-white items-center h-[42vh] gap-4">
    <div className="flex items-center gap-2 justify-center font-bold text-4xl md:text-5xl">Get Me A Chai <span><img src="/tea.gif" className="rounded-full" width={62} height={62} alt="" /></span></div>
    <p className="text-center px-2 md:px-0">
      A crowdfounding platform for creators. Get founded by your fans and followers. Start now!
    </p>
    <div>
      <Link href={"/login"}>
    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
    </Link>
    <Link href={"/about"}>
    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
    </Link>
    </div>
   </div>
   <div className="bg-white h-1 opacity-10"></div>

    <div className="text-white container mx-auto py-6">
      <h2 className="text-2xl font-bold text-center my-6">Your fans can buy you a Chai</h2>
      <div className="flex gap-5 justify-around px-4 md:px-0">
        <div className="item space-y-5 md:space-y-3 flex justify-center items-center flex-col">
          <img className="bg-slate-400 rounded-full  text-black " width={88} src="/man.gif" alt="" />
          <p className="font-bold text-center">Fund yourself</p>
          <p className=" text-center">Your fans are available for you to help</p>
        </div>
        <div className="item space-y-5 md:space-y-3 flex justify-center items-center flex-col">
          <img className="bg-slate-400 rounded-full  text-black " width={88} src="/coin.gif" alt="" />
          <p className="font-bold text-center">Fund yourself</p>
          <p className=" text-center">Your fans are available for you to help</p>
        </div>
        <div className="item space-y-5 md:space-y-3 flex justify-center items-center flex-col">
          <img className="bg-slate-400 rounded-full  text-black " width={88} src="/group.gif" alt="" />
          <p className="font-bold text-center">Your fans want to help</p>
          <p className=" text-center">Your fans are available for you to help</p>
        </div>
      </div>
    </div>
   <div className="bg-white h-1 opacity-10"></div>
  
    <div className="text-white container mx-auto py-6">
      <h2 className="text-2xl font-bold text-center my-6">Learn more about us</h2>
      <div className="flex gap-5 justify-around px-4 md:px-0">
        <div className="item space-y-5 md:space-y-3 flex justify-center items-center flex-col">
          <img className="bg-slate-400 rounded-full  text-black " width={88} src="/man.gif" alt="" />
          <p className="font-bold text-center">Fund yourself</p>
          <p className=" text-center">Your fans are available for you to help</p>
        </div>
        <div className="item space-y-5 md:space-y-3 flex justify-center items-center flex-col">
          <img className="bg-slate-400 rounded-full  text-black " width={88} src="/coin.gif" alt="" />
          <p className="font-bold text-center">Fund yourself</p>
          <p className=" text-center">Your fans are available for you to help</p>
        </div>
        <div className="item space-y-5 md:space-y-3 flex justify-center items-center flex-col">
          <img className="bg-slate-400 rounded-full  text-black " width={88} src="/group.gif" alt="" />
          <p className="font-bold text-center">Your fans want to help</p>
          <p className=" text-center">Your fans are available for you to help</p>
        </div>
      </div>
    </div>
   <div className="bg-white h-1 opacity-10"></div>
  

  
   </>
  );
}
