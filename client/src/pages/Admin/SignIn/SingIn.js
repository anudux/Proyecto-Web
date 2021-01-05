import React from "react";
import {Layout,Tabs} from "antd";
import {Redirect} from "react-router-dom";
import Logo from "../../../assets/img/png/javier-logo.png";
import RegisterForm from "../../../components/Admin/RegisterForm";

import "./SingIn.scss";

export default function SignIn() {
    const {Content} = Layout;
    const {TabPane} = Tabs;
    return (
       <Layout className="sign-in"> 
           <Content className="sing-in__content">
            <h1 className="sing-in__content-logo"> 
            <img src={Logo} alt="Javier Lavilla" />
            </h1>

            <div className="sign-in__content-tabs">
                <Tabs type="card">
                <TabPane tab={<span>Entrar</span>} key="1">
                Component LoginForm
                </TabPane>
                <TabPane tab={<span>Nuevo Usuario</span>}key="2">
                   <RegisterForm/>

                </TabPane>
              

                </Tabs>

            </div>

           </Content>

       </Layout>
    );
}