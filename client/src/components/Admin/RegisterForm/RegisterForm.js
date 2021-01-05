import React from "react";
import {Form,Icon,Input,Button,Checkbox,notification} from "antd";



import "./RegisterForm.scss";




export default function RegisterForm() {
    return (
        <Form className="register-form">
            <Form.Item>
                <Input
                prefix={<Icon type="user" style={{color:"rgba(0,0,0,.25"}} />}
                type="email"
                name="email"
                placeholder="Correo Electronico"
                className="register-form__input"               
                />
            </Form.Item>
            <Form.Item>
                <Input
                prefix={<Icon type="lock" style={{color:"rgba(0,0,0.25"}}/>}
                type="password"
                name="password"
                placeholder="Contraseña"
                className="register-form__imput"           
                />
            </Form.Item>
            <Form.Item>
                <Input
                prefix={<Icon type="lock" style={{color:"rgba(0,0,0,.25"}}/>}
                type="password"
                name="repeatPassword"
                placeholder="Repetir Constraseña"
                className="register-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Checkbox name="privacyPolicy">
                    He leido y acepto los terminos y condiciones.
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="register-form__button">
                    Crear cuenta
                </Button>
            </Form.Item>


        </Form>
    )
    
}