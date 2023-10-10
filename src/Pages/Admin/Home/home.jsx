import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Header from "../../../Components/Header/header";
import "./styleHome.css";
import { Table } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { FortRounded } from "@mui/icons-material";
import { getApi } from "../../../api/config";
import { getUserCookie, refreshToken } from "../../../refreshToken";
import { ConsoleSqlOutlined } from "@ant-design/icons";

//npm install react-calendar
function Home(props) {
    const [state, setstate] = useState([]);
    useEffect(() => {
        async function getAllproduct() {
            let token = getUserCookie("user");
            console.log(147, token);
            try {
                const res = await getApi("/admin/product/list");
                console.log(23,'res',res)
                setstate(res.data);
            } catch (error) {
                console.log(168, error);
            }
        }
        getAllproduct();
    }, []);
    const [state1, setstate1] = useState([]);
    const [state2, setstate2] = useState([]);

    const [date, setdate] = useState(new Date());
    const onChange = (date) => {
        setdate(date);
    };

    const columns = [
        {
            title: "ProductName",
            align: "center",
            dataIndex: "productName",
        },
        {
            title: "ProductPic",
            dataIndex: "productPic",
            align: "center",
            sorter: false,
            render: (productPic) => {
                return (<img src={'http://localhost:3150' + productPic[0]} alt="anh" />)
            },
        },
        {
            title: "ProductType",
            dataIndex: "productType",
            align: "center",
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "PerformanceProduct",
            align: "center",
            dataIndex: "performanceProduct",
        },
        {
            title: "Panel",
            align: "center",
            dataIndex: "panel",
        },
        {
            title: "Storage",
            align: "center",
            dataIndex: "storage",
        },
        {
            title: "Price",
            align: "center",
            dataIndex: "price",
        },
    ];
    const database = [];
    console.log(state.length);
    if (state.length > 0) {
        var so = state.length - 10;
        for (let i = so; i < state.length; i++) {
            database.push({
                productName: state[i].idProductCode.productName,
                productPic: state[i].productPic,
                productType: state[i].idProductCode.productType,
                performanceProduct: state[i].idProductCode.performanceProduct,
                panel: state[i].idProductCode.panel,
                storage: state[i].storage,
                price: state[i].price,
            });
            console.log(93, database)
        }
    }

    useEffect(() => {
        async function getAllUser() {
            let token = getUserCookie("user");
            console.log(147, token);
            try {
                const res = await getApi("/admin/user/");
                console.log(101, res)
                setstate1(res.data);
            } catch (error) {
                console.log(168, error);
            }
        }
        getAllUser();

        async function getAllorder() {
            let token = getUserCookie("user");
            console.log(147, token);
            try {
                const res = await getApi("/admin/order/");
                console.log(113, res)
                setstate2(res.data);
            } catch (error) {
                console.log(168, error);
            }
        }
        getAllorder();
    }, []);

    let sumOrder = 0;

    console.log(128, state2)
    for (let i = 0; i < state2.length; i++) {
        if (state2[i].status === "done") {
            sumOrder = sumOrder + 1;
        }
    }

    let sumTotal = 0;
    for (let i = 0; i < state2.length; i++) {
        if (state2[i].status === "done") {
            sumTotal += state2[i].total;
        }
    }
    let countCustomers = state1.length;
    let countSale = state2.length;
    let countTotal = sumTotal;
    let countOrder = sumOrder;

    return (
        <div>
            <Header tenname={props.name}></Header>
            <div className="content">
                <h3 className="content_title">Dashboard</h3>
                <div className="statistical">
                    <div className="table">
                        <div className="icon_sale">
                            <i class="fa-solid fa-wave-square"></i>
                        </div>
                        <div className="content_sale">
                            <p className="icon_title">Sales</p>
                            <p className="thongso">{countSale}</p>
                        </div>
                    </div>
                    <div className="table">
                        <div className="icon_order">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        <div className="content_sale">
                            <p className="icon_title">Orders</p>
                            <p className="thongso">{countOrder}</p>
                        </div>
                    </div>
                    <div className="table">
                        <div className="icon_customer">
                            <i class="fa-solid fa-user-tag"></i>
                        </div>
                        <div className="content_sale">
                            <p className="icon_title">Customers</p>
                            <p className="thongso">{countCustomers}</p>
                        </div>
                    </div>
                    <div className="table">
                        <div className="icon_Income">
                            <i class="fa-solid fa-sack-dollar"></i>
                        </div>
                        <div className="content_sale">
                            <p className="icon_title">Income</p>
                            <p className="thongso">{countTotal.toLocaleString()}</p>
                        </div>
                    </div>
                </div>

                <div className="productNew">
                    <h2>New Products</h2>
                    <Table columns={columns} dataSource={database} pagination={false}/>
                </div>

                <div className="Note">
                    <div className="calendar">
                        <Calendar
                            showWeekNumbers
                            onChange={onChange}
                            value={date}
                            className="react-Calendar"
                        />
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;