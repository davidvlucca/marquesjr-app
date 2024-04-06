import React from "react";
import Logo from "../../../public/footer_logo.png";
import InstagramIcon from "../../../public/instagram.png";
import WhatsappIcon from "../../../public/whatsapp.png";

function FooterComponent() {
  return (
    <div className="font-roundkey h-[40vh] bg-footerBackground bg-cover">
      <div className="font-roundkey flex flex-col items-center justify-center p-10  text-center">
        <img src={Logo} alt="" className="h-auto w-32" />
        <div className=" flex gap-x-5 p-5">
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
        <p className="max-w-[90%] text-[100%] md:text-[80%] lg:text-[90%] xl:text-[90%] ">
          +351 935067730 • RUA NOVA DA ALFARROBEIRA, 6 • LOJAS 14 & 17 •
          2750-452 • CASCAIS • PORTUGAL
        </p>
      </div>
      <p className="text-center text-[60%]">
        Todos os Direitos Reservados • ALL RIGHTS RESERVED © BARBEARIA Marques
        Jr • Made by{" "}
        <a
          href="https://github.com/davidvlucca"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline hover:no-underline focus:no-underline"
        >
          David Lucca
        </a>
      </p>
    </div>
  );
}

export default FooterComponent;
