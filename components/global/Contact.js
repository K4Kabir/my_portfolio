import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const Contact = () => {
  return (
    <div className="px-[7rem]">
      <h1 className="scroll-m-20 py-7 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Contact Me
      </h1>
      <form>
        <div className="flex flex-col gap-3">
          <Input placeholder="Name" type="text" required />
          <Input placeholder="Email" type="email" required />
          <Textarea placeholder="Type your message here." required />
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
