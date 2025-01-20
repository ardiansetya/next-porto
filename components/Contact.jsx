import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
    const [loading, setLoading] = useState(false);

    const accessKey= process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

    const onSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);
      const formData = new FormData(event.target);

      formData.append("access_key",accessKey);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully");
        setLoading(false);
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message);
      }
    };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]">
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect With Me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-2xl mx-auto mt-b mb-12 font-Ovo">
        Feel free to get in touch! If you have any questions, comments, or
        feedback, please fill out the form below. I&apos;d love to hear your
        thoughts!{" "}
      </p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="text"
            placeholder="Enter Your Name"
            required
            name="name"
          />
          <input
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="email"
            placeholder="Enter Your Email"
            required
            name="email"
          />
        </div>
        <textarea
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          rows="6"
          placeholder="Enter Your Message"
          required
          name="message"
          id=""></textarea>
        <button
          className="py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
          type="submit">
          {loading ? (
            "Sending..."
          ) : (
            <>
              Send {" "}
              <Image
                src={assets.right_arrow_white}
                alt="arrow"
                className="w-4"
              />
            </>
          )}
        </button>
      </form>
   <Toaster/>
    </div>
  );
};

export default Contact;
