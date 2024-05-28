import React from "react";
import DisplayContent from "../components/DisplayContent";
import { FloatingLabel } from "flowbite-react";
import { TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";
const NewHome = () => {
  const data = [
    {
      section: "Home",
      content: [
        { name: "Inside Amazon", URL: "Link", image: "Image.jpg" },
        { name: "Amazon Prime", URL: "Link", image: "Image.jpg" },
        { name: "Amazon Web Services", URL: "Link", image: "Image.jpg" },
      ],
    },
    {
      section: "Products",
      content: [
        { name: "Amazon Echo", URL: "Link", image: "Image.jpg" },
        { name: "Kindle", URL: "Link", image: "Image.jpg" },
        { name: "Fire TV Stick", URL: "Link", image: "Image.jpg" },
      ],
    },
  ];

  return (
    <div>
      <div className=" px-24 p-5 w-1/2">
        <TextInput
          icon={HiSearch}
          type="search"
          placeholder="Search for your website"
          required
          size={32}
        />
      </div>
      <div className="flex flex-row ">
        {data.map((out, index) => (
          <div key={index}>
            <DisplayContent out={out} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewHome;
