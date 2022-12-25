/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { BsClipboardData } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import logo from "./logo1.png";
import home from "./home.png";
import "../NavBar.css";
export default class Home extends Component {
  render() {
    return (
      <div id='main'>
        <div className='homepage'>
          <p className='elements' id='title'>
            PRODUCT<span id='student'>Move</span>
          </p>
          <hr className='elements' id='homehr' />
          <div className='introduction'>
            <h1 className='manage'>
              Mọi thứ
              <div id='_manage'>cần thiết cho việc</div> quản lí sinh viên
            </h1>
            <div className='manage_1'>
              <img
                src={logo}
                width='300rem'
                height='200rem'
                style={{ marginTop: "-8rem", marginRight: "7rem" }}
              />
            </div>
            <p id='_intro1'>
              ProductMove là 1 phần mềm tiện ích giúp quản lý sinh viên một cách
              ngắn gọn và đầy đủ nhất thông qua những thống kê xác thực nhất và
              nhanh nhất
            </p>
            <img className='homewallpaper' src={home} />
            <div className='footer1'>
              <br />
             
            </div>

            {/* FOOTER CHUC NANG */}

            <div className='footer2'>
              <hr className='elements' id='homehr' />
              <h1 id='_footer1'>Các tính năng của ProductMove</h1>

              <div className='footer_icons'>
                <span className='fa fa-comment-dots'></span>
              </div>
              <div className='footer_icons'>
                <span className='fa fa-chart-bar'></span>
              </div>
              <div className='footer_icons'>
                <BsClipboardData />
              </div>
              <div className='footer_icons'>
                <IoMdNotificationsOutline />
              </div>
              <br />

              <div className='footer_fn' id='footer_fn1'>
                Chat
              </div>
              <div className='footer_fn' id='footer_fn2'>
                Biểu đồ 
              </div>
              <div className='footer_fn' id='footer_fn3'>
                Danh sách sinh viên
              </div>
              <div className='footer_fn' id='footer_fn4'>
                Thông báo
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
