"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { toast } from "sonner";

import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      formData.append("access_key", "54d757fb-41ef-4d49-b7d2-a01e37e7264d");

      const respons = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await respons.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send. Please try again.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="max-w-360 mx-auto mt-10 px-5">
      <div className="bg-[#050E20] border border-gray-800 px-5 py-4 rounded-2xl flex gap-5 max-[930px]:flex-col">
        <div className="w-[55%] max-[930px]:w-full">
          <p className="text-blue-500 text-sm font-bold max-[1160px]:text-[12px]">
            GET IN TOUCH
          </p>
          <h1 className="text-3xl font-semibold text-white mt-1 max-[1160px]:text-2xl">
            Let's work togrther!
          </h1>
          <p className="text-gray-400 mt-2 text-[15px] max-[1160px]:text-[13px]">
            Have a project in mind or just want to say hello? Feel free to reach
            out.
          </p>

          <form onSubmit={handleSubmit} className="mt-4 text-white">
            <div className="flex gap-2">
              <Input placeholder="Your Name" name="name" required />
              <Input placeholder="Your Email" name="email" required />
            </div>
            <Input placeholder="Subject" name="subject" className="mt-2" />
            <Textarea
              placeholder="Your message"
              name="message"
              required
              className="mt-2"
            />

            <Button
              type="submit"
              disabled={loading}
              className="cursor-pointer bg-blue-600 hover:bg-blue-500 w-full text-[16px] flex items-center py-5 mt-2 max-[470px]:text-[14px] max-[470px]:py-4"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <FaTelegramPlane />
                </>
              )}
            </Button>
          </form>
        </div>

        <div className="w-[45%] max-[930px]:w-full max-[930px]:gap-4 flex flex-col justify-between">
          <div className="bg-[#0c162a] border border-gray-800 rounded-xl px-5 py-2 flex items-center gap-5 max-[1160px]:gap-3 max-[1160px]:px-3">
            <div className="w-12.5 h-12.5 text-[35px] max-[1160px]:w-10 max-[1160px]:h-10 max-[1160px]:text-[25px] max-[1160px]:rounded-lg max-[470px]:w-7.5 max-[470px]:h-7.5 max-[470px]:text-[23px] max-[470px]:rounded-md rounded-xl bg-[#1f2d49] text-blue-600 flex justify-center items-center">
              <MdEmail />
            </div>
            <div className="text-gray-400 max-[1160px]:text-[14px] max-[470px]:text-[12px]">
              <p>Email:</p>
              <p>temurovalirizo5@gmail.com</p>
            </div>
          </div>

          <div className="bg-[#0c162a] border border-gray-800 rounded-xl px-5 py-2 flex items-center gap-5 max-[1160px]:gap-3 max-[1160px]:px-3">
            <div className="w-12.5 h-12.5 text-[35px] max-[1160px]:w-10 max-[1160px]:h-10 max-[1160px]:text-[25px] max-[1160px]:rounded-lg max-[470px]:w-7.5 max-[470px]:h-7.5 max-[470px]:text-[23px] max-[470px]:rounded-md rounded-xl bg-[#1f2d49] text-blue-600 flex justify-center items-center">
              <FaGithub />
            </div>
            <div className="text-gray-400 max-[1160px]:text-[14px]  max-[470px]:text-[12px]">
              <p>GitHub:</p>
              <a
                target="_blank"
                className="hover:text-blue-400"
                href="https://github.com/AlirizoTemirov"
              >
                github.com/AlirizoTemirov
              </a>
            </div>
          </div>

          <div className="bg-[#0c162a] border border-gray-800 rounded-xl px-5 py-2 flex items-center gap-5 max-[1160px]:gap-3 max-[1160px]:px-3">
            <div className="w-12.5 h-12.5 text-[35px] max-[1160px]:w-10 max-[1160px]:h-10 max-[1160px]:text-[25px] max-[1160px]:rounded-lg max-[470px]:w-7.5 max-[470px]:h-7.5 max-[470px]:text-[22px] max-[470px]:rounded-md rounded-xl bg-[#1f2d49] text-blue-600 flex justify-center items-center">
              <FaLinkedin />
            </div>
            <div className="text-gray-400 max-[1160px]:text-[14px]  max-[470px]:text-[12px]">
              <p>LinkedIn:</p>
              <a
                target="_blank"
                className="hover:text-blue-400"
                href="https://www.linkedin.com/in/alirizo-temurov-189769444"
              >
                linkedin.com/in/alirizo-temurov-189769444
              </a>
            </div>
          </div>

          <div className="bg-[#0c162a] border border-gray-800 rounded-xl px-5 py-2 flex items-center gap-5 max-[1160px]:gap-3 max-[1160px]:px-3">
            <div className="w-12.5 h-12.5 text-[35px] max-[1160px]:w-10 max-[1160px]:h-10 max-[1160px]:text-[25px] max-[1160px]:rounded-lg max-[470px]:w-7.5 max-[470px]:h-7.5 max-[470px]:text-[23px] max-[470px]:rounded-md rounded-xl bg-[#1f2d49] text-blue-600 flex justify-center items-center">
              <IoLocationOutline />
            </div>
            <div className="text-gray-400 max-[1160px]:text-[14px] max-[470px]:text-[12px]">
              <p>Location:</p>
              <p>Bukhara, Uzbekistan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
