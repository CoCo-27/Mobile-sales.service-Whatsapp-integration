import React, { useEffect, useState } from "react";
import "../css/Comment.css";
import { Rate } from "antd";
import { Modal, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import { createElement } from "react";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

function Comment1() {
  const [rate, setRate] = useState(0);
  const desc = ["terrible", "bad", "normal", "good", "very good"];
  const [value, setValue] = useState(3);

  let data = [
    {
      id: 4,
      author: "user",
      avatar: "https://cf.shopee.vn/file/4e2984b32c40e82158fdd7397bdcdea3_tn",
      content: "this is a content",
      timeAgo: "today is at 9:00",
      rate: 3,
      img: [],
    },
    {
      id: 1,
      author: "a52425bc",
      avatar: "https://cf.shopee.vn/file/17301ab350b06548c419c597ab9b4c7d_tn",
      content: "good",
      timeAgo: "today is at 8:00",
      rate: 4,
      img: [],
    },
    {
      id: 2,
      author: "xy452542z",
      avatar: "https://cf.shopee.vn/file/0f0474b65bffe4841f1c52feeb465221_tn",
      content: "very good",
      timeAgo: "today is at 10:00",
      rate: 5,
      img: [
        {
          Url: "https://www.techone.vn/wp-content/uploads/2020/02/images-500x500.jpg",
        },
      ],
    },
    {
      id: 2,
      author: "xy452542z",
      avatar: "https://cf.shopee.vn/file/0f0474b65bffe4841f1c52feeb465221_tn",
      content: "very good",
      timeAgo: "today is at 10:00",
      rate: 4,
      img: [
        {
          Url: "https://www.techone.vn/wp-content/uploads/2020/02/images-500x500.jpg",
        },
      ],
    },
    {
      id: 4,
      author: "xy452542z",
      avatar: "",
      content: "",
      timeAgo: "today is at 10:00",
      rate: 4,
      img: [],
    },
  ];
  const [Comment, SetComment] = useState(data);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    let today = new Date();
    var time =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear() +
      "  " +
      today.getHours() +
      ":" +
      today.getMinutes();

    let content = document.querySelector("#text-comment").value;
    let img = fileList.map((val, i) => {
      return { Url: val.thumbUrl };
    });
    SetComment([
      ...Comment,
      {
        author: "name",
        content: content,
        rate: rate,
        timeAgo: time,
        img: img,
        action: actions,
      },
    ]);
    document.querySelector("#text-comment").value = "";
    setFileList([]);
  };

  var count1 = 0;
  var count2 = 0;
  var count3 = 0;
  var count4 = 0;
  var count5 = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].rate === 1) {
      count1++;
    } else if (data[i].rate === 2) {
      count2++;
    } else if (data[i].rate === 3) {
      count3++;
    } else if (data[i].rate === 4) {
      count4++;
    } else if (data[i].rate === 5) {
      count5++;
    }
  }
  const handleCancel1 = () => {
    setIsModalVisible(false);
  };
  function filter5Sao() {
    let newData = data.filter((val, i) => {
      return val.rate === 5;
    });
    SetComment(newData);
  }
  function filter4Sao() {
    let newData = data.filter((val, i) => {
      return val.rate === 4;
    });
    SetComment(newData);
  }
  function filter3Sao() {
    let newData = data.filter((val, i) => {
      return val.rate === 3;
    });
    SetComment(newData);
  }
  function filter2Sao() {
    let newData = data.filter((val, i) => {
      return val.rate === 2;
    });
    SetComment(newData);
  }
  function filter1Sao() {
    let newData = data.filter((val, i) => {
      return val.rate === 1;
    });
    SetComment(newData);
  }
  function filterAll() {
    SetComment(data);
  }
  function toComment() {
    let newData = data.filter((val, i) => {
      return val.content !== "";
    });
    SetComment(newData);
  }
  function toImage() {
    let newData = data.filter((val, i) => {
      if (val.img.length !== 0) {
        return val;
      }
    });
    SetComment(newData);
    console.log(newData);
  }
  ////========================
  function rateComment() {
    document.querySelector(".div-comment-info").style.display = "block";
  }
  var ResultRate = 0;
  for (let i = 0; i < data.length; i++) {
    ResultRate += data[i].rate / data.length;
  }
  var RateAll = ResultRate.toFixed(1);
  //=======================================================================================================================
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const handleCancel = () => setPreviewVisible(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  //===============================================================================================================
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];
  return (
    <div>
      <div className="Container">
        <div className="div-title">Đánh giá sản phẩm</div>
        <div className="button-add-comment">
          <>
            <button onClick={showModal} className="btn1-show">
              Viết đánh giá
            </button>

            <Modal
              title="Đánh giá sản phẩm"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel1}
            >
              <div onClick={rateComment}>
                Bạn cảm thấy sản phẩm này như thế nào? <br />{" "}
                <span>
                  <Rate
                    id="rate1"
                    tooltips={desc}
                    onChange={setRate}
                    value={rate}
                  />
                  {value ? (
                    <span className="ant-rate-text">{desc[rate - 1]}</span>
                  ) : (
                    ""
                  )}
                </span>
              </div>
              <div className="div-comment-info">
                Nhận Xét
                <div>
                  <textarea
                    name=""
                    id="text-comment"
                    cols="10"
                    rows="10"
                  ></textarea>
                </div>
                <>
                  <Upload
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                  >
                    {fileList.length >= 3 ? null : uploadButton}
                  </Upload>
                  <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
                    onCancel={handleCancel}
                  >
                    <img
                      alt="example"
                      style={{
                        width: "100%",
                      }}
                      src={previewImage}
                    />
                  </Modal>
                </>
              </div>
            </Modal>
          </>
        </div>
        <div className="button-filter">
          <div className="div-result-rate">
            <div className="info-rate">
              <span>{RateAll}</span> <span id="text-5rate">trên 5</span>
            </div>
            <Rate disabled value={RateAll} style={{ display: "flex" }} />
          </div>
          <div className="btn-search">
            <button className="btn1-fil" onClick={filterAll}>
              Tất Cả
            </button>
            <button className="btn1-fil" onClick={filter5Sao}>
              5 Sao({count5})
            </button>
            <button className="btn1-fil" onClick={filter4Sao}>
              4 Sao({count4})
            </button>
            <button className="btn1-fil" onClick={filter3Sao}>
              3 Sao({count3})
            </button>
            <button className="btn1-fil" onClick={filter2Sao}>
              2 Sao({count2})
            </button>
            <button className="btn1-fil" onClick={filter1Sao}>
              1 Sao({count1})
            </button>
            <button onClick={toComment} className="btn1-fil">
              Có Bình Luận
            </button>
            <button onClick={toImage} className="btn1-fil">
              Có Hình Ảnh
            </button>
          </div>
        </div>
        <div className="conment-main">
          {Comment.map((val, i) => {
            return (
              <div key={i} className="comment">
                <img src={val.avatar} alt="" className="avatar-img" />
                <div className="wapter-comment">
                  <div className="name-comment">{val.author}</div>
                  <div className="comment-rate">
                    <Rate disabled value={val.rate} />
                  </div>
                  <div className="time-comment">{val.timeAgo}</div>
                  <div className="content-comment">{val.content}</div>
                  <div className="content-comment">{val.action}</div>
                  {val.img.map((image) => {
                    return (
                      <img src={image.Url} alt="" style={{ width: "150px" }} />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Comment1;
