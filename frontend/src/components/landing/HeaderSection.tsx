import React from 'react';
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";


const HeaderSection = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 text-black">
      <div className="text-2xl font-bold">Transa</div>
      <nav>
        <a href="#products" className="mx-4">Products</a>
        <a href="#solutions" className="mx-4">Solutions</a>
        <a href="#resources" className="mx-4">Resources</a>
        <a href="#pricing" className="mx-4">Pricing</a>
      </nav>
    </header>
  );
};

export default HeaderSection;
