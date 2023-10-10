import React, { useState } from "react";
import Header from "../../../Components/Header/header";
import { Table } from "antd";
import { Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { useEffect } from "react";
import { getApi, putApi, deleteApi } from "../../../api/config";
import "./style.css";
import { getUserCookie, refreshToken } from "../../../refreshToken";

function Nhanvien(props) {
  const [state, setstate] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isindex, setIsIndex] = useState(0);
  const [isin, setIsin] = useState(1);

  const data = [];

  function count() {
    setIsin(isin + 1);
  }

  const showModal = (id) => {
    setIsIndex(id);
    setIsModalVisible(true);
    data.map(function (val) {
      if (val._id == id) {
        console.log(22, val.username);
        document.querySelector(".name").value = val.username;
        document.querySelector(".address").value = val.address;
        document.querySelector(".sdt").value = val.phone;
        document.querySelector(".role").value = val.role;
      }
    });
    count();
  };

  const handleOk = () => {
    let name = document.querySelector(".name").value;
    let diachi = document.querySelector(".address").value;
    let phone = document.querySelector(".sdt").value;
    let role = document.querySelector(".role").value;

    if ((name !== "" && diachi !== "" && phone !== "", role !== "")) {
      async function getAllorder() {
        let token = getUserCookie("user");
        console.log(147, token);
        try {
          const res = await putApi(`/admin/user/${isindex}`, {
            username: name,
            address: diachi,
            phone: phone,
            role: role,
          });
          console.log(226, res);
        } catch (error) {
          console.log(168, error);
        }
      }
      getAllorder();
      count();
      setIsModalVisible(false);
    } else {
      document.querySelector(".Not").innerHTML = "Vui lòng không được để trống";
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "STT",
      align: "center",
      dataIndex: "index",
    },
    {
      title: "Ảnh",
      align: "center",
      dataIndex: "avatar",
      render: (avatar) => (
        <img src={"http://localhost:3150" + avatar} alt="anh" />
      ),
    },
    {
      title: "Name",
      align: "center",
      dataIndex: "username",
      sorter: {
        compare: (a, b) => a.username.localeCompare(b.username),
      },
    },
    { title: "Email", dataIndex: "email", align: "center" },
    {
      title: "Địa chỉ",
      align: "center",
      dataIndex: "address",
      sorter: {
        compare: (a, b) => a.address.localeCompare(b.address),
      },
    },
    { title: "Số điện thoại", dataIndex: "phone", align: "center" },
    { title: "Quyền", dataIndex: "role", align: "center" },
    {
      title: "Action",
      dataIndex: "",
      align: "center",
      key: "x",
      render: (record) => (
        <>
          <EditOutlined
            onClick={() => {
              showModal(record._id);
            }}
            style={{ fontSize: 20 }}
          />
          <DeleteOutlined
            onClick={() => {
              ondelete(record._id);
            }}
            style={{ color: "red", fontSize: 20, marginLeft: 20 }}
          />
        </>
      ),
    },
  ];

  for (let i = 0; i < state.length; i++) {
    data.push({
      index: i + 1,
      _id: state[i]._id,
      avatar: state[i].avatar,
      username: state[i].username,
      email: state[i].email,
      address: state[i].address,
      phone: state[i].phone,
      role: state[i].role,
    });
  }

  useEffect(() => {
    async function getAllUser() {
      let token = getUserCookie("user");
      console.log(147, token);
      try {
        const res = await getApi("/admin/user");
        console.log(149, 'user',res)
        setstate(res.data);
      } catch (error) {
        console.log(168, error);
      }
    }
    getAllUser();
  }, [isin]);

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  function ondelete(id) {
    Modal.confirm({
      title: "Bạn có chắc muốn xóa không",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        async function getAllorder() {
          let token = getUserCookie("user");
          console.log(147, token);
          try {
            const res = await deleteApi(`/admin/user/${id}`);
          } catch (error) {
            console.log(168, error);
          }
        }
        getAllorder();
        count();
      },
    });
  }

  return (
    <div>
      <Header tenname={props.name}></Header>
      <div className="table_nv">
        <h2 className="title_nv">Nhân Viên</h2>
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
          className="nv"
        />
      </div>
      <Modal
        title="Quản lý nhân Viên"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <input
          type="text"
          placeholder="Name"
          className="name"
          name="username"
        />
        <input
          type="text"
          placeholder="Địa chỉ"
          className="address"
          name="address"
        />
        <input type="text" placeholder="sdt" className="sdt" name="phone" />
        <input type="text" placeholder="quyền" className="role" name="role" />
        <p className="Not"></p>
      </Modal>
    </div>
  );
}

export default Nhanvien;