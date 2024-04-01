import React from "react";
import Logo from "../../../public/footer_logo.png";
import InstagramIcon from "../../../public/instagram.png";
import WhatsappIcon from "../../../public/whatsapp.png";

function FooterComponent() {
  return (
    <div className="h-[450px] bg-footerBackground">
      <div className="flex flex-col items-center justify-center p-[70px] text-center">
        <img src={Logo} alt="" className="" />
        <div className=" flex gap-x-[20px] p-[30px]">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={InstagramIcon}
              alt="Instagram"
              className="h-auto w-full"
            />
          </a>
          <a href="your-link-here" target="_blank" rel="noopener noreferrer">
            <img src={WhatsappIcon} alt="Whatsapp" className="h-auto w-full" />
          </a>
        </div>
        <p className=" text-[20px]">
          +351 935067730 • RUA NOVA DA ALFARROBEIRA, 6 • LOJAS 14 & 17 •
          2750-452 • CASCAIS • PORTUGAL
        </p>
      </div>
      <p className="text-center text-[10px]">
        Todos os Direitos Reservados • ALL RIGHTS RESERVED © BARBEARIA Marques
        Jr
      </p>
    </div>
  );
}

export default FooterComponent;
