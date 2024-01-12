import { IconButton } from "@mui/material";
import {  Link, Outlet,  } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="w-[100%] border-b-[0.5px] border-[gray]">
        <div className="w-[90%] flex m-auto py-[10px] ">
          <div className="flex items-center justify-around w-[70%] lg:w-[60%]">
            <div className="flex  gap-[7px] item-center">
              <Link to="/">
                <img
                  className="item-center"
                  src="src/assets/Frame 3.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="pt-[4px] hidden xl:block">
              <h1 className="text-[13px] ">c.Dushanbe</h1>
              <h3 className="text-[10px] ">st.Aini 50/51a</h3>
            </div>
            <div className="md:flex md:w-[45%] lg:w-[35%] xl:w-[30%] items-center hidden md:block">
              <img className="w-[20%]" src="src/assets/Medico (1).svg" alt="" />
              <h1 className="">+992 900-65-65-42</h1>
            </div>
          </div>
          <div className="w-[50%] flex justify-end items-center gap-[50px] lg:mr-[70px]">
            <div className="">
              <Link to="/profile">
                <IconButton>
                  <img
                    className="m-auto"
                    src="src/assets/Frame 450.svg"
                    alt=""
                  />
                </IconButton>
              </Link>
            </div>
            <div className="">
              <Link to="/favorites">
                <IconButton>
                  <img className="" src="src/assets/Frame 657.svg" alt="" />
                </IconButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
      <div className="w-[100%] bg-[#2196F3] py-[10px]">
        <div className="w-[90%] flex flex-wrap xs:justify-center xs:py-[15px] lg:justify-between">
          <div className="w-[67%] flex flex-wrap xs:justify-center  gap-[40px] text-white">
            <div className="xs:w[80%] md:w-[35%] lg:w-[30%] text-center">
              <h1 className="text-[white] w-[100%] m-auto text-[20px] font-medium border-b-[2px]">
                FOR PATIENTS
              </h1>
              <p className="">Account Registration/Login</p>
              <p className="">Hospital Awards Rankings</p>
              <p className="">Finding quality care</p>
            </div>
            <div className="xs:w[80%] md:w-[35%] lg:w-[30%] text-white text-center">
              <h1 className="w-[100%] border-b-[2px] text-[20px] font-medium">
                OUR COMPANY
              </h1>
              <p className="">Connect with us</p>
              <p className="">About Us</p>
              <p className="">Corporate</p>
            </div>
            <div className="xs:w[80%] md:w-[35%] lg:w-[30%] pl-[10px] text-center ">
              <h1 className="w-[100%] border-b-[2px] text-[20px] font-medium">
                FOR PROVIDERS
              </h1>
              <p className="">Help Center</p>
              <p className="">News and opportunities</p>
              <p className="">Get your free profile</p>
            </div>
          </div>
          <div className="xs:w-[70%] xs:pt-[20px] md:w-[30%] flex xs:justify-center m-auto md:justify-end">
            <div className="">
              <img className="w-[70%]" src="src/assets/Frame 4.svg" alt="" />
              <h1 className="text-[20px] py-[7px]">
                We are in social networks
              </h1>
              <div className="flex justify-center gap-[15px]">
                <img src="src/assets/socials.svg" alt="" />
                <img src="src/assets/socials (1).svg" alt="" />
                <img src="src/assets/socials (2).svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Layout;
