import React from "react";
import { Input, Checkbox, Button, Form } from "antd";
import "./login.css";
import { toast } from 'react-toastify';

function Login() {
  const onFinish = async (values) => {
    //console.log(values);
    toast.success(`Iniciando sesión...`);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div id="loginCont">
      <div
        className="login_conts"
        style={{ backgroundImage: `linear-gradient(rgb(0 0 0 / 52%), rgb(0 0 0 / 56%)), url(${process.env.PUBLIC_URL}/img1.webp)` }}
      >
          <img src={`${process.env.PUBLIC_URL}/hhglogo_dark-removebg.png`} className="logoInicio"></img>
      </div>
      <div className="login_conts">
        <Form
          id="formCont"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          
             
             <div id="goPharmaTitleForResponsive">
             <img
              src={`${process.env.PUBLIC_URL}/hhglogo-removebg-preview.png`}
              alt="products Marketplace"
              width={250}
              height={162}
              id="reset_password_image"
            />
             </div>
            
            
         

          <div className="formDivs formDivs_fc">Iniciar sesión</div>
          <div className="formDivs">
            <label>Correo Electrónico</label>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Por favor, introduzca el correo",
                  type: "email",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="formDivs">
            <label>Contraseña</label>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Por favor, introduzca su contraseña",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </div>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Recordar contraseña</Checkbox>
          </Form.Item>

          <div className="forgotPassword">
            <a href="request_password_reset">¿Olvidaste tu contraseña?</a>
          </div>

          <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: "rgb(27 103 176)",
              width: "100%",
              marginTop: "3vh",
            }}
            className="botonIniciarSesion"
          >
            Iniciar Sesión
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
