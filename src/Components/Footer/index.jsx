/* eslint-disable no-irregular-whitespace */
import Logo from "/footer_logo.png";
import InstagramIcon from "/instagram.png";
import WhatsappIcon from "/whatsapp.png";

function FooterComponent() {
  return (
    <div className="h-auto bg-footerBackground bg-cover font-roundkey">
      <div className="flex flex-col items-center justify-center px-10 pt-10 text-center font-roundkey">
        <img
          src={Logo}
          alt="Logo"
          className="h-auto md:w-52 lg:w-48 xl:w-52 2xl:w-52 xs:w-52 mL:w-44 mM:w-44 mS:w-44"
        />
        <div className=" flex gap-x-5 p-5">
          <a
            href="https://www.instagram.com/marquesjr.barbershop/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <img
              src={InstagramIcon}
              alt="Instagram"
              className="h-auto w-full"
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=351935067730"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:opacity-80"
          >
            <img src={WhatsappIcon} alt="Whatsapp" className="h-auto w-full" />
          </a>
        </div>
        <a
          href="https://www.google.com/maps/place//data=!4m2!3m1!1s0xd1ec5d542c945cd:0x23bb0433367989f1?sa=X&ved=1t:8290&ictx=111"
          className=" max-w-[90%] text-[80%] no-underline hover:no-underline focus:no-underline md:text-[80%] lg:text-[90%] xl:text-[90%] 2xl:text-[100%]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="">
            +351 935067730 • RUA NOVA DA ALFARROBEIRA, 6 • LOJAS 14 & 17 •
            2750-452 • CASCAIS • PORTUGAL
          </p>
        </a>
      </div>
      <p className="p-5 text-center text-[50%]">
        Todos os Direitos Reservados • ALL RIGHTS RESERVED © BARBEARIA Marques
        Jr • Made by{" "}
        <a
          href="https://github.com/davidvlucca"
          target="_blank"
          rel="noopener noreferrer"
          className="  no-underline hover:no-underline focus:no-underline"
        >
          David Lucca
        </a>
      </p>
    </div>
  );
}

export default FooterComponent;
