import React, { useState } from "react";
import { Form, Icon, Input, Button, Select, notification } from "antd";
import { addMenuApi } from "../../../../api/menu";
import { getAccessTokenApi } from "../../../../api/auth";

import "./AddMenuWebForm.scss";

export default function AddMenuWebForm(props) {
  const { setIsVisibleModal, SetReloadMenuWeb } = props;
  const [menuWebData, setMenuWebData] = useState({});

  const addMenu = (event) => {
    event.preventDefault();

    let finalData = {
      title: menuWebData.title,
      url: (menuWebData.http ? menuWebData.http : "http://") + menuWebData.url,
    };

    console.log(finalData);
  };
  return (
    <div className="add-menu-web-form">
      <AddForm menuWebData={menuWebData} setMenuWebData={setMenuWebData} addMenu={addMenu} />
    </div>
  );
}

function AddForm(props) {
  const { menuWebData, setMenuWebData, addMenu } = props;
  const { Option } = Select;

  const selectBefore = (
    <Select
      defaultValue="http://"
      style={{ width: 90 }}
      onchange={(e) => setMenuWebData({ ...menuWebData, http: e })}
    >
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );

  return (
    <Form className="form-add" onSubmit={addMenu}>
      <Form.Item>
        <Input
          prefix={<Icon type="font-size" />}
          placeholder="Título"
          value={menuWebData.title}
          onChange={(e) => setMenuWebData({ ...menuWebData, title: e.target.value })}
        />
      </Form.Item>
      <Form.Item>
        <Input
          addonBefore={selectBefore}
          placeholder="URL"
          value={menuWebData.url}
          onChange={(e) => setMenuWebData({ ...menuWebData, url: e.target.value })}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Crear Menú
        </Button>
      </Form.Item>
    </Form>
  );
}
