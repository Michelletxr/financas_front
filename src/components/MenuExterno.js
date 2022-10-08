import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { PaginaSobre } from './PaginaSobre';
import { PaginaLogin } from './PaginaLogin';
import { PaginaCadastro} from './PaginaCadastro';


import './Menu.css';

export function MenuExterno() {
  
    return(
      <div className="row">
      <div className="menu-style">
        <div className="menu-item left">
        Logo
        </div>
        <div className="menu-item right" onclick="">
          Login
        </div>
        <div className="menu-item right" onclick="">
          Cadastrar-se
        </div>
      </div>
      </div>
    );
    };
  export default MenuExterno;