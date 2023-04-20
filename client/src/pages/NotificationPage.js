import React from "react";
import { message, Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

const NotificationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  //   handle read notification
  const handleMarkAllRead = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/get-all-notification",
        {
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
        window.location.reload();
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("somthing went wrong");
    }
  };
  const handleDeleteAllRead = async () => {
    try {
      dispatch(showLoading())
      const res = await axios.post('/api/v1/user/delete-all-notification', { userId: user._id }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      dispatch(hideLoading())
      if (res.data.success) {
        message.success(res.data.message);
        window.location.reload();
        navigate('/');
      } else {
        message.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
      message.error('Something went wrong in notification');
    }
  };

  return (
    <>
      <Navbar />
      <h3 className="p-3 text-center h3">Notifications</h3>
      <Tabs className="notification-tab">
        <Tabs.TabPane tab="unRead" key={0}>
          <div className="d-flex justify-content-end">
            <h4 className="p-2" onClick={handleMarkAllRead} style={{ cursor: "pointer" }}>
              Mark All Read
            </h4>
          </div>
          {user?.notification.map((notificationMgs) => (
            <div className="card py-1" style={{ cursor: "pointer", borderBottom: '1px solid black' }} onClick={() => navigate(notificationMgs.data.onClickPath)}>
              <div className="card-text">
                {notificationMgs.message}
              </div>
            </div>
          ))}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Read" key={1}>
          <div className="d-flex justify-content-end">
            <h4 className="p-2" onClick={handleDeleteAllRead} style={{ cursor: "pointer" }}>
              Delete All Read
            </h4>
          </div>
          {user?.seennotification.map((notificationMgs) => (
            <div className="card py-1 mb-3" style={{ cursor: 'pointer' }} onClick={() => navigate(notificationMgs.data.onClickPath)}>
              <div className="card-text">
                {notificationMgs.message}
              </div>
            </div>
          ))}
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default NotificationPage;