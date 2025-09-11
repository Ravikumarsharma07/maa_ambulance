"use client"
import FloatingCallBtn from "@/components/FloatingCallBtn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter()
  return (
    <main>
        <Header />
        <FloatingCallBtn /> 
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 pt-20 md:pt-32 text-center ">
      
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">🚑 Coming Soon</h1>
      
      {/* Subheading */}
      <p className="sm:text-lg text-gray-700 max-w-lg text-center">
        We are building something important for you. Stay tuned — our advanced ambulance service features are arriving soon to help you in critical times.
      </p>
      
      
      
      <p onClick={() => router.back()} className="mt-4 font-semibold text-blue-600 hover:text-blue-700 cursor-pointer">Go back to the previous page.</p>
      
      <div className="mt-10 p-6 bg-white shadow rounded-lg max-w-md text-left">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Need urgent help?</h3>
        <a href="tel:+91-9654232540" className="text-gray-700">
          Call our emergency helpline now: <span className="font-bold text-red-600">+91-9654232540</span>
        </a>
      </div>
      
    </div>
    <Footer />
    </main>
  );
}
