// import React, { useState } from "react";
// import Header from "../../../Components/Header/header";
// import "./styleXacnhan.css";
// import axios from "axios";
// import { Table } from "antd";
// import { Modal } from "antd";
// import { useEffect } from "react";
// import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
// import { ClassSharp } from "@mui/icons-material";
// import {getApi,deleteApi, putApi} from '../../../api/config'
// import { getUserCookie, refreshToken } from "../../../refreshToken";


// function Xacnhan() {
//   const [state, setstate] = useState([]);
//   const [state1, setstate1] = useState([]);
//   const [state2, setstate2] = useState([]);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [isindex, setIsIndex] = useState(0);

//   let database = [];
//   let data = [];

// useEffect(() => {
//   async function getAllorder (){
//     let token = getUserCookie('user')
//     try {
//       const res = await getApi('/admin/order/')
//       console.log(35,res.data)
//       setstate(res.data)
//     } catch (error) {
//       console.log(168, error);
//     }
//   }
//   getAllorder()

//   async function getAllUser (){
//     let token = getUserCookie('user')
//     try {
//       const res = await getApi('/admin/user/')
//       console.log(41,res.data)
//       setstate1(res.data)
//     } catch (error) {
//       console.log( error);
//     }
//   }
//   getAllUser()

//   async function getAllproduct (){
//     let token = getUserCookie('user')
//     try {
//       const res = await getApi('/admin/product/list')
//       console.log(62,res.data)
//       setstate2(res.data)
//     } catch (error) {
//       console.log( error);
//     }
//   }
//   getAllproduct()

// }, []);

//   for (let i = 0; i < state1.length; i++) {
//     for (let j = 0; j < state.length; j++) {
//       // console.log(65,state1[i]._id)
//       if (state1[i]._id === state[j].idUser) {
//         if (state[j].status === "pending") {
//           database.push({
//             _id: state[j]._id,
//             idUser: state1[i].username,
//             address: state[j].address,
//             phone: state[j].phone,
//             total: state[j].total,
//             idProduct: state[j].listProduct.map(function (val) {
//               let a = val.idProduct;
//               return a;
//             }),
//             quantity: state[j].listProduct.map(function (val) {
//               let b = val.quantity + "\n";
//               return b;
//             }),
//             status: state[j].status,
//           });
//         }
//       }
//     }
//   }
// console.log(88,database)
//   for (let i = 0; i < state2.length; i++) {
//     for (let j = 0; j < database.length; j++) {


//         // console.log(68, database[j].idProduct, j);
//       // let  newProduct = database[j].idProduct.filter((val)=>{
//       //   return val != null;
//       // })     
//       // console.log(97, newProduct) 
//       console.log(68, state2[i]._id);
//         console.log(68, database[j].idProduct);
//       if (database[j].idProduct> 0 && state2[i]._id === database[j].idProduct) {
//         data.push({ 
//           _id: database[j]._id,
//           idUser: database[j].idUser,
//           address: database[j].address,
//           phone: database[j].phone,
//           total: database[j].total,
//           // idProduct: state2[i].idProductCode.productName,
//           quantity: database[j].quantity,
//           status: database[j].status,
//         });
//       }
//     }
//   }
//   console.log(109,data)

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "idUser",
//       align: "center",
//     },
//     {
//       title: "Phone",
//       dataIndex: "phone",
//       align: "center",
//     },
//     {
//       title: "Address",
//       align: "center",
//       dataIndex: "address",
//     },
//     {
//       title: "total",
//       align: "center",
//       dataIndex: "total",
//     },
//     {
//       title: "idProduct",
//       align: "center",
//       dataIndex: "idProduct",
//     },
//     {
//       title: "quantity",
//       align: "center",
//       dataIndex: "quantity",
//     },
//     {
//       title: "status",
//       align: "center",
//       dataIndex: "status",
//     },
//     {
//       title: "Action",
//       dataIndex: "",
//       align: "center",
//       key: "x",
//       render: (record) => (
//         <>
//           <EditOutlined
//             onClick={() => {
//               showModal(record._id);
//             }}
//             style={{ fontSize: 20 }}
//           />
//           <DeleteOutlined
//             onClick={() => {
//               ondelete(record._id);
//             }}
//             style={{ color: "red", fontSize: 20, marginLeft: 20 }}
//           />
//         </>
//       ),
//     },
//   ];
//   function onChange(pagination, filters, sorter, extra) {
//     console.log("params", pagination, filters, sorter, extra);
//   }

//   const showModal = (id) => {
//     setIsIndex(id);
//     setIsModalVisible(true);
//   };

//   console.log(137, isindex);
//   const handleOk = () => {
//     let phone = document.querySelector(".phone").value;
//     let diachi = document.querySelector(".address").value;
//     let status = document.querySelector(".status").value;

//     console.log(147, phone, diachi, status, isindex);
//     if (phone !== "" && diachi !== "" && status !== "") {
//       async function getAllorder (){
//         let token = getUserCookie('user')
//         console.log(147, token);
//         try {
//           const res = await putApi(`/admin/order/${isindex}`,{
//             address: diachi,
//             phone: phone,
//             status: status,
//           })
//           console.log(226,res)
//         } catch (error) {
//           console.log(168, error);
//         }
//       }
//       getAllorder()

//       // count();
//       setIsModalVisible(false);
//     } else {
//       document.querySelector(".Not").innerHTML = "Vui lòng không được để trống";
//     }
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   function ondelete(id) {
//     console.log(172, id);
//     Modal.confirm({
//       title: "Bạn có chắc muốn xóa không",
//       okText: "Yes",
//       okType: "danger",
//       onOk: () => {
//         async function getAllorder (){
//           let token = getUserCookie('user')
//           // console.log(147, token);
//           try {
//             const res = await deleteApi(`/admin/order/${id}`)
//           } catch (error) {
//             // console.log(168, error);
//           }
//         }
//         getAllorder()

//         // count();
//       },
//     });
//   }

//   return (
//     <div>
//       <Header></Header>
//       <div className="table_xacnhan ">
//         <h1 className="title_xacnhan">Đơn hàng chờ xác nhận</h1>
//         <Table columns={columns} dataSource={database} onChange={onChange} />
//       </div>
//       <Modal
//         title="Quản lý đơn hàng"
//         visible={isModalVisible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//       >
//         <input type="text" placeholder="phone" className="phone" />
//         <input type="text" placeholder="Địa chỉ" className="address" />
//         <input type="text" placeholder="status" className="status" />
//         <p className="Not"></p>
//       </Modal>
//     </div>
//   );
// }

// export default Xacnhan;














// ------------------------------------------------------------------------------------
import { ConsoleSqlOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import { valHooks } from 'jquery';
import { useEffect, useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { getApi } from '../../../api/config';
import { getUserCookie } from '../../../refreshToken';
import Header from "../../../Components/Header/header";
import "./styleXacnhan.css";
let data =  [
  {
    key: '---------------',
    name: '---------------',
    age:'---------------',
    address: '---------------', 
  }];

function Danggiao() {console.log(288, data)
  const data1 = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Joe Black',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Jim Green',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];
  const [data2, setReset] = useState(data1);
  useEffect(() => {
    async function getAllorder() {
      let token = getUserCookie('user')
      try {
        const res = await getApi('/admin/order/listOrder?status=doing')
        let arrayCall = res.data
        console.log(35, arrayCall)
        const newarray = [];
        arrayCall.map((val, index) => {
          let a =val.listProduct
          let b;
          if(a.length>0){
             b =a.map((value)=>{return value.idProduct.idProductCode.productName}).join(',')
          }else{
              b = 'không có data'
          }
          
         console.log(334,a) 
          newarray.push({
            key: index + 1,
            stt: index +1,
            total: val.total ? val.total : 0, 
            date: val.updatedAt,//.toLocaleString('en-GB', { timeZone: 'UTC' }) ,
            name: val.idUser ? (val.idUser.username==''||val.idUser.username==undefined?'---------':val.idUser.username ): '----------',
            age: val.phone ? val.phone : '----------',
            address: val.address ? val.address : '-----------',
            products: b//
          })
          return val
        })
        console.log(327, newarray)
        setReset(newarray)
        data = newarray;
      } catch (error) {
        console.log(168, error);
      }
    }
    getAllorder()
  }, []);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="large"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="large"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="large"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      width: '100%',
      ...getColumnSearchProps('stt'),
      sorter: (a, b) => a.key - b.key,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'User Name',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      ...getColumnSearchProps('name'),
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Phone Number',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
      ...getColumnSearchProps('age'),
      sorter: (a, b) => a.age.length - b.age.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Products',
      dataIndex: 'products',
      key: 'products',
      width: '20%',
      ...getColumnSearchProps('products'),
      sorter: (a, b) => a.products.length - b.products.length,
      sortDirections: ['descend', 'ascend'],
    },
    
    {
      title: 'Order value',
      dataIndex: 'total',
      key: 'total',
      width: '10%',
      ...getColumnSearchProps('total'),
      sorter: (a, b) => a.total - b.total,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Order date',
      dataIndex: 'date',
      key: 'date',
      width: '10%',
      ...getColumnSearchProps('date'),
      sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: '20%',
      ...getColumnSearchProps('address'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];
  return   (

    <>
    <Header></Header>
    <h1 className='header-admin-manager'>Xác Nhận</h1>
    <div className="table_xacnhan" >
    <Table columns={columns} dataSource={data} pagination= {{defaultPageSize:300}}/>;
    </div>
    </>
  )
};
export default Danggiao;
// --------------------------------------------------------------------------------------
