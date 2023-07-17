import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Api } from "../../lib/restapi/endpoints";
import { BasicOTPComponent } from "../components/basic-otp";
import { relative } from "path";
import { IUserResetPasswordModel } from "src/interfaces/user";

// import img from "../static/images/logo.png"

function Email() {
  const [r_email, setREmail] = useState<string>("");
  const [disable, setDisable] = useState<boolean>(true);
  const [PasswordBtndisable, setPasswordBtndisable] = useState<boolean>(true);
  const [EmailBtndisable, setEmailBtndisable] = useState<boolean>(true);
  const [OtpSent, setOtpSent] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [ConfirmPassword, setConfirmPassword] = useState<string>("");
  const [otp, setOTP] = useState("");
  const [otpLength, setOtpLength] = useState(0);

  const sendOtp = (e: string) => {
    setOTP(e);
    setOtpLength(e.length);

    if (e.length === 5) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
    if (password == "") {
      setPasswordBtndisable(true);
    } else {
      setPasswordBtndisable(false);
    }
  };

  const submitHandler = () => {
    const _id = toast.loading("Logging in..", {
      //loader
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(r_email)) {
      toast.update(_id, {
        render: "Invalid email address",
        type: "error",
        isLoading: false,
      });
    } else {
      // ResetPassword();
      setOtpSent(true);
    }
  };

  const ResendOtp = () => {};

  const ChangePassword = async () => {
    const payload = {
      email: r_email,
      password: password,
      otp: otp,
    };
    const response = await Api.POST_ResetPassword(payload);
    if (response.error) {
      console.log(response.error);
    } else {
      setOtpSent(true);
      console.log("Password changed successfully");
    }
  };

  const emailHandler = (e: any) => {
    if (r_email.length <= 0) {
      setEmailBtndisable(true);
      setREmail(e.target.value);
    } else {
      setEmailBtndisable(false);

      setREmail(e.target.value);
      //ResetPassword();
    }
  };

  const SendOtp = async () => {
    const payload = {
      email: r_email,
    } as IUserResetPasswordModel; 
    const response = await Api.POST_ResetPassword(payload);
    if (response?.error) {
      console.log(response.error);
    } else {
      setOtpSent(true);
      console.log("OTP sent successfully");
    }
  };

  const SignIn = () => {
    window.location.href = "#/";
    window.location.reload();
  };

  return (
    <>
      <ToastContainer />
      <div id="mainContente">
        <div className="peers ai-s fxw-nw h-100vh">
          <div
            className="d-n@sm- peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv"
            style={{
              backgroundImage:
                "url('https://paramsolutions.dev/images/param-banner.svg')",
              backgroundColor: "#263F22",
              backgroundSize: "80%",
            }}
          >
            <div className="pos-a centerXY">
              <div
                className="bdrs-50p pos-r"
                style={{ width: "120px", height: "120px" }}
              >
                <img
                  className="pos-a centerXY"
                  src="assets/static/images/logo.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* OTP Screen */}
          {}

          {/* OTP Screen */}

          {OtpSent ? (
            <>
              {" "}
              <div
                className="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r"
                style={{ minWidth: "320px", textAlign: "left" }}
              >
                <h4 style={{ fontSize: "25pt" }} className="fw-300 c-grey-900 ">
                  Enter OTP
                </h4>
                <BasicOTPComponent onChange={sendOtp} />
                <div style={{ marginTop: "25%" }}>
                  <a>
                    <button
                      disabled={disable}
                      className="btn btn-primary btn-color"
                      style={{
                        backgroundColor: "rgb(38, 63, 34)",
                        border: "none",
                        borderRadius: "0px",
                        marginRight: "7%",
                        float: "right",
                        marginTop: "1%",
                        width: "160px",
                      }}
                    >
                      Send
                    </button>
                  </a>
                  <a
                    onClick={() => {
                      window.location.reload();
                    }}
                    style={{ fontSize: "small" }}
                  >
                    Did not receive OTP? Resend
                  </a>
                </div>

                <div>
                  <h4
                    style={{ fontSize: "25pt" }}
                    className="fw-300 c-grey-900 mB-40"
                  >
                    New Password
                  </h4>
                  {/* <form> */}
                  <div className="mb-3">
                    <label className="text-center text-dark form-label">
                      Enter New Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={onChangePassword}
                      style={{ width: "80%" }}
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label className="text-center text-dark form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      value={ConfirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      style={{ width: "80%" }}
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="">
                    <div className="peers ai-c jc-sb fxw-nw">
                      <div className="peer" style={{ paddingTop: "5%" }}>
                        <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                          <input
                            type="checkbox"
                            id="inputCall1"
                            name="inputCheckboxesCall"
                            className="peer"
                          />

                          <a>
                            <button
                              disabled={PasswordBtndisable}
                              onClick={ChangePassword}
                              className="btn btn-primary btn-color"
                              style={{
                                backgroundColor: "rgb(38, 63, 34)",
                                border: "none",
                                borderRadius: " 0px",
                                marginLeft: "50%",
                                paddingLeft: "35%",
                                paddingRight: "35%",
                                width: "160px",
                              }}
                            >
                              Send
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div
              className="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r"
              style={{ minWidth: "320px", textAlign: "left" }}
            >
              <h4
                style={{ fontSize: "25pt" }}
                className="fw-300 c-grey-900 mB-40"
              >
                Forgot Password
              </h4>
              {/* <form> */}
              <div className="mb-3">
                <label className="text-center text-dark form-label">
                  Enter email address
                </label>
                <input
                  type="email"
                  onChange={emailHandler}
                  style={{ width: "80%" }}
                  className="form-control"
                  placeholder=""
                />
              </div>

              <div className="">
                <div className="peers ai-c jc-sb fxw-nw">
                  <div className="peer" style={{ paddingTop: "5%" }}>
                    <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                      <input
                        type="checkbox"
                        id="inputCall1"
                        name="inputCheckboxesCall"
                        className="peer"
                      />

                      <a>
                        <button
                          onClick={SendOtp}
                          disabled={EmailBtndisable}
                          className="btn btn-primary btn-color"
                          style={{
                            backgroundColor: "rgb(38, 63, 34)",
                            border: "none",
                            borderRadius: " 0px",
                            marginLeft: "50%",
                            paddingLeft: "35%",
                            paddingRight: "35%",
                            width: "160px",
                          }}
                        >
                          Send
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <div
                  className="peers ai-c jc-sb fxw-nw"
                  style={{ paddingTop: "15%", paddingLeft: "5%" }}
                >
                  {/* <div className="peer"> */}
                  <a onClick={SignIn} className="">
                    Already have an account? Login here
                  </a>
                  {/* </div> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Email;
