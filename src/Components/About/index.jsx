import React from "react";

function About() {
  return (
    <div className="flex bg-[#111D1D] h-[1000px] w-[99vw] ">
      <div className="flex-1 grid place-content-center bg-cover bg-aboutLogo px-[80px] py-[100px]">
        <div className="space-y-24 tracking-tighter	">
          <h1 className="text-7xl font-extralight ">A BARBEARIA</h1>
          <div className="space-y-10">
            <p className="text-[#a28857]	text-4xl font-medium">
              A Marques Jr é uma barbearia localizada no coração de Cascais que
              conta com um ambiente descontraído e acolhedor, sendo o local
              perfeito para você relaxar enquanto cuida de si.
            </p>
            <p className="text-[#a28857] text-4xl font-medium">
              Para que esse ambiente possa proporcionar cuidado pessoal, em
              nossa equipa contamos com profissionais de alta qualidade que
              estão preparados para te receber e prestar um excelente serviço.
            </p>
            <div className="text-[#a28857]">
              <p className="font-medium text-4xl">Wevert Junior</p>
              <p className=" font-normal text-2xl">Barbeiro e Proprietário</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] bg-aboutBackground bg-top grid place-content-center bg-cover bg-no-repeat"></div>
    </div>
  );
}

export default About;
