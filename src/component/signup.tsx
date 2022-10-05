import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const SignUp = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    console.table(values);
  };

  return (
    <div
      style={{
        margin: "5em auto",
        padding: "0 auto",
        width: "55%",
      }}
    >
      <h1 style={{ fontSize: "24px", fontFamily: "monospace" }}>SignUp</h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 15 }}
        onFinish={onFinish}
      >
        <Form.Item
          name="Name"
          label="Name"
          style={{ marginBottom: "30px" }}
          rules={[
            {
              required: true,
            },
            {
              type: "string",
            },
            {
              whitespace: true,
            },
            {
              max: 24,
            },
            {
              min: 3,
            },
          ]}
          hasFeedback
        >
          <Input
            type="string"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="UserId"
            inputMode="text"
          />
        </Form.Item>

        <Form.Item
          name="Email"
          label="Email"
          style={{ marginBottom: "30px" }}
          rules={[
            {
              required: true,
            },
            {
              type: "email",
            },
            {
              whitespace: true,
            },
            {
              max: 24,
            },
            {
              min: 7,
            },
          ]}
          hasFeedback
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="UserId"
            inputMode="text"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
            },
            {
              whitespace: true,
            },
            {
              max: 24,
            },
            {
              min: 5,
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ marginRight: "4px", marginTop: "15px" }}
          >
            SignUp
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
