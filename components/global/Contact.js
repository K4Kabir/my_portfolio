"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import axios from "axios";

const Contact = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendEmail = async function (e) {
    setLoading(true);
    try {
      e.preventDefault();
      let response = await axios.post("/api/sendEmail", data);
      setLoading(false);
      if (response.data.success) {
        alert("Thanks for the Response !");
        setData({});
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  };
  return (
    <div className="px-[7rem] py-7">
      <h1 className="scroll-m-20 py-7 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Contact Me
      </h1>
      <form
        onSubmit={(e) => {
          handleSendEmail(e);
        }}
      >
        <div className="flex flex-col gap-3">
          <Input
            onChange={(e) => handleInput(e)}
            placeholder="Name"
            name="name"
            type="text"
            value={data?.name || ""}
            required
          />
          <Input
            onChange={(e) => handleInput(e)}
            placeholder="Email"
            name="email"
            value={data?.email || ""}
            type="email"
            required
          />
          <Textarea
            name="content"
            value={data?.content || ""}
            onChange={(e) => handleInput(e)}
            placeholder="Type your message here."
            required
          />
          <Button disabled={loading} type="submit">
            {loading ? "Loading...." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
