import React, { useState } from "react";
import GridCard from "./GridCard";
import { Checkbox, Label, TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";

const DisplayContent = () => {
  const datas = [
    {
      id: 1,
      name: "Timesheet",
      url: "https://timesheet.qs.gdq.amazon.dev/timesheet/dashboard",
      image: "",
    },
    {
      id: 2,
      name: "Phonetool",
      url: "https://phonetool.amazon.com/users",
      image: "",
    },
    {
      id: 3,
      name: "Kronos",
      url: "https://mytime-lite.aka.corp.amazon.com/wfc/applications/suitenav/navigation.do?ESS=true?redirect=/wfc/applications/wtk/html/ess/timestamp.jsp",
      image: "",
    },
    {
      id: 4,
      name: "IT Services",
      url: "https://it.amazon.com/",
      image: "",
    },
    {
      id: 5,
      name: "A2Z",
      url: "https://atoz.amazon.work/schedule",
      image: "",
    },
    {
      id: 6,
      name: "Drive Link",
      url: "https://drive.corp.amazon.com/personal",
      image: "",
    },
    {
      id: 7,
      name: "Concur",
      url: "https://us2.concursolutions.com/",
      image: "",
    },
    {
      id: 8,
      name: "TestRail",
      url: "https://testrail.adsw.amazon.dev/index.php?/dashboard",
      image: "",
    },
    {
      id: 9,
      name: "Kbits",
      url: "https://kbits.build.lab126.a2z.com",
      image: "",
    },
    {
      id: 10,
      name: "LogQuest",
      url: "https://logquest.aka.amazon.com/requestLogUpload;jsessionid=1C09405B4FB46A0A3AAFCA94DCE3C90C",
      image: "",
    },
    {
      id: 11,
      name: "DAVS Management",
      url: "https://bluedeviceportal.corp.amazon.com/#/DavsGroupManagement",
      image: "",
    },
    {
      id: 12,
      name: "IDMS",
      url: "https://prod.idms.gdq.amazon.dev/#/",
      image: "",
    },
    {
      id: 13,
      name: "OTA Central",
      url: "https://ota-central.devices.amazon.dev/",
      image: "",
    },
    {
      id: 14,
      name: "Atlas",
      url: "https://atlas-dashboard.corp.amazon.com/",
      image: "",
    },
    {
      id: 15,
      name: "Chime",
      url: "https://app.chime.aws/",
      image: "",
    },
    {
      id: 16,
      name: "Outlook",
      url: "https://ballard.amazon.com/OWA/#path=/mail",
      image: "",
    },
    {
      id: 17,
      name: "Sim Ticket",
      url: "https://sim.amazon.com/-",
      image: "",
    },
  ];

  const [searchData, setSearchData] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [check, setCheck] = useState(false);
  const [data, setData] = useState(datas);

  //   const handleSearch = (e) => {
  //     const searchTerm = e.target.value.toLowerCase();
  //     console.log(searchTerm);
  //     setSearchData(searchTerm);
  //     if (searchData === "") {
  //       setFilteredData([]);
  //     } else {
  //       const searching = data.filter((search) => {
  //         search.name.toLowerCase().includes(searchData);
  //       });
  //       console.log(searching);
  //       setFilteredData(searching);
  //     }
  //   };
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchData(searchTerm);
    if (searchTerm == "") {
      setFilteredData([]);
    } else {
      const searching = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      );
      setFilteredData(searching);
    }
  };

  const handleSort = () => {
    // e.preventDefault();
    setCheck(!check);
    if (check == false) {
      let sorted = data.sort((a, b) => a.name.localeCompare(b.name));
      setData(sorted);
    } else {
      let sorted = data.sort((a, b) => a.id - b.id);
      setData(sorted);
    }
  };
  return (
    <div>
      <div className=" flex flex-col md:flex-row justify-between items-center lg:px-24 gap-4 p-5 ">
        <TextInput
          icon={HiSearch}
          type="search"
          placeholder="Search for your website"
          required
          size={32}
          value={searchData}
          onChange={handleSearch}
          className=" shadow-md"
        />
        <div className="border shadow-md rounded-xl p-2 ">
          <Checkbox
            className="border-2 border-blue-400 cursor-pointer"
            checked={check}
            onChange={handleSort}
            // onClick={handleSort}
          />
          <Label className="px-4">Sort By Name</Label>
        </div>
      </div>
      <div className="w-full p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-5">
          {(filteredData.length > 0 ? filteredData : data).map(
            (datas, index) => (
              <GridCard datas={datas} index={index} />
            )
          )}
          {/* {data.map((datas, index) => (
            <GridCard datas={datas} index={index} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default DisplayContent;
