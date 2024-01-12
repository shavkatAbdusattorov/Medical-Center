// import React from 'react'
// import Conculyator from "../../Components/Conculyator"
import { IconButton } from "@mui/material";
import Reting from "../../Components/Reting";
// import Conculyator from "../../Components/Conculyator";

const Profile = () => {
  return (
    <div className="">
      <div className="flex items-center justify-around w-[85%] m-auto gap-[40px]">
        <div className="flex items-center py-[60px]">
          <div className="">
            <img src="src/assets/Mask group1213456.svg" alt="" />
          </div>
          <div className="">
            <img src="src/assets/Frame 663.svg" alt="" />
            <h1 className="text-center font-normal text-[#0092FB] text-[23px]">
              Dentist
            </h1>
            <div className="py-[20px]">
              <img className="m-auto" src="src/assets/Frame 658.svg" alt="" />
              <div className="flex py-[5px] justify-center">
                <h1 className="text-[20px]">5.0</h1>
                <Reting />
              </div>
              <div className="flex justify-center gap-[15px]">
                <img src="src/assets/socials.svg" alt="" />
                <img src="src/assets/socials (1).svg" alt="" />
                <img src="src/assets/socials (2).svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[38%]">
          <h1 className="text-[23px]">
            Dr. Ilan Semandov, Doctor of Medical Sciences, dental specialist
            from Dushanbe, works in the clinic Nurafzo, has more than 6 years of
            experience in the medical field. He graduated from Dushanbe
            University in 2003. His office is accepting new patients.
          </h1>
        </div>
      </div>
      <div className="w-[85%] m-auto text-[20px] bg-[#80CAFF] px-[40px] py-[10px] rounded-[10px] my-[20px]">
        <h1>
          Dr. Ilan Semandov specialty: orthopedic surgeon, the doctor has been
          working in this specialty for 6 years. Dr. Ilan Semandov has been
          working at the clinic Nurafzo for 1 year
        </h1>
      </div>
      <h1 className="text-[20px] ju"></h1>
      <div className="w-[85%] m-auto">
        <h1 className="text-[39px] py-[20px] text-center font-medium">
          Comments
        </h1>
      </div>
      <div className="w-[85%] flex border-b-[2px] my-[20px] border-[grey] items-start gap-[10px] m-auto py-[10px]">
        <div className="">
          <img src="src/assets/Mask group123214.svg" alt="" />
        </div>
        <div className="">
          <h1>Toma</h1>
          <p>27.02.2023 07:08:12</p>
          <p>Excellent doctors. Great office.</p>
          <div className="flex items-center gap-[10px] ">
            <IconButton>
              <img src="src/assets/flat-color-icons_like.svg" alt="" />
            </IconButton>
            <p className="text-[#90CAF9]">Ответов 23</p>
          </div>
        </div>
      </div>
      <div className="w-[85%] flex border-b-[2px] my-[20px] border-[grey] items-start gap-[10px] m-auto py-[10px]">
        <div className="">
          <img src="src/assets/Mask group (1111).svg" alt="" />
        </div>
        <div className="">
          <h1>Madina</h1>
          <p>06.12.2021 08:48:41</p>
          <p>
            wonderful and friendly orthodontist. I highly recommend his practice
            if you are looking to improve your teeth and smile.
          </p>
          <div className="flex items-center gap-[10px] ">
            <IconButton>
              <img src="src/assets/flat-color-icons_like.svg" alt="" />
            </IconButton>
            <p className="text-[#90CAF9]">Ответов 23</p>
          </div>
        </div>
      </div>
      <div className="w-[85%] flex border-b-[2px] my-[20px] border-[grey] items-start gap-[10px] m-auto py-[10px]">
        <div className="">
          <img src="src/assets/Mask group123214.svg" alt="" />
        </div>
        <div className="">
          <h1>Toma</h1>
          <p>27.02.2023 07:08:12</p>
          <p>Excellent doctors. Great office.</p>
          <div className="flex items-center gap-[10px] ">
            <IconButton>
              <img src="src/assets/flat-color-icons_like.svg" alt="" />
            </IconButton>
            <p className="text-[#90CAF9]">Ответов 23</p>
          </div>
        </div>
      </div>
      <div className="w-[85%] flex border-b-[2px] my-[20px] border-[grey] items-start gap-[10px] m-auto py-[10px]">
        <div className="">
          <img src="src/assets/Mask group123214.svg" alt="" />
        </div>
        <div className="">
          <h1>Toma</h1>
          <p>27.02.2023 07:08:12</p>
          <p>Excellent doctors. Great office.</p>
          <div className="flex items-center gap-[10px] ">
            <IconButton>
              <img src="src/assets/flat-color-icons_like.svg" alt="" />
            </IconButton>
            <p className="text-[#90CAF9]">Ответов 23</p>
          </div>
        </div>
      </div>
      <div className="w-[85%] flex border-b-[2px] my-[20px] border-[grey] items-start gap-[10px] m-auto py-[10px]">
        <div className="">
          <img src="src/assets/Mask group123214.svg" alt="" />
        </div>
        <div className="">
          <h1>Toma</h1>
          <p>27.02.2023 07:08:12</p>
          <p>Excellent doctors. Great office.</p>
          <div className="flex items-center gap-[10px] ">
            <IconButton>
              <img src="src/assets/flat-color-icons_like.svg" alt="" />
            </IconButton>
            <p className="text-[#90CAF9]">Ответов 23</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
