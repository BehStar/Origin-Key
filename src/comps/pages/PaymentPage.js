import React from "react";
import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../../css/payment.css";
import USDT from "../../images/QR-code/USDT.jpg";
import LTC from "../../images/QR-code/LTC.jpg";

const PaymentPage = () => {
  const [isShowModalFirstQr, setIsShowModalFirstQr] = useState(false);
  const [isShowModalSecondQr, setIsShowModalSecondQr] = useState(false);
  const [isShowCopiedFirst, setIsShowCopiedFirst] = useState(false);
  const [isShowCopiedSecond, setIsShowCopiedSecond] = useState(false);
  // show COPIED for Clipboard
  useEffect(() => {
    setTimeout(() => {
      setIsShowCopiedFirst(false);
      setIsShowCopiedSecond(false);
    }, 2000);
  }, [isShowCopiedFirst, isShowCopiedSecond]);
  return (
    <div className="payment-page">
      <div className="container-payment-page">
        <div className="payment-explain">
          <h2>نحوه پرداخت:</h2>
          <p>
            خواهشمند است قبل از واریز وجه از طریق یکی از راه های ارتباطی از
            موجود بودن محصول مورد نظر خود اطمینان حاصل نمایید.
          </p>
          <p>
            پس از واریز وجه تصویر فیش واریزی و یا شماره تراکنش را ارسال نمایید.
          </p>
        </div>
        <div className="payment">
          <div className="payment-right">
            <div className="payment-ir">
              <h3 className="payment-title">پرداخت ریالی (بانک سامان)</h3>
              <ul className="payment-list">
                <li>
                  <div>شماره حساب </div>
                  <div>611828005183313301</div>
                </li>
                <li>
                  <div>شماره کارت </div>
                  <div>6219-8619-0474-8984</div>
                </li>
                <li>
                  <div>شماره شبا</div>
                  <div>IR-40 0560 6118 2800 5183 3133 01</div>
                </li>
                <li>
                  <div>بنام</div>
                  <div>رضا حاجی اسدزاده</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="payment-left">
            <div className="payment-crypto">
              <h3 className="payment-title">پرداخت کریپتویی</h3>
              <ul className="payment-list">
                <li>
                  <div className="name-crypto">USDT</div>
                  <div className="qr-code ">
                    <img
                      src={USDT}
                      onClick={() => setIsShowModalFirstQr(!isShowModalFirstQr)}
                      alt="USDT BArcode"
                    />
                  </div>
                  <div
                    className="modal-page-qr"
                    onClick={() => setIsShowModalFirstQr(!isShowModalFirstQr)}
                    style={{
                      transform: isShowModalFirstQr ? "scale(1)" : "scale(0)",
                    }}
                  >
                    <div
                      className="box-img-in-modal"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img src={USDT} alt="USDT Barcode" />
                      <i
                        className="close fa fa-close"
                        onClick={() =>
                          setIsShowModalFirstQr(!isShowModalFirstQr)
                        }
                      ></i>
                    </div>
                  </div>
                  <div className="address-wallet">
                    <span className="left-address-wallet">
                      <CopyToClipboard
                        onCopy={() => setIsShowCopiedFirst(true)}
                        text="TUEsJQCnpodojsVbRA5UXpbkFwiDuBfTtE"
                      >
                        <i className="fa fa-clipboard" />
                      </CopyToClipboard>
                      {isShowCopiedFirst && (
                        <div className="copied">Copied.</div>
                      )}
                    </span>
                    <span className="right-address-wallet">
                      TUEsJQCnpodojsVbRA5UXpbkFwiDuBfTtE
                    </span>
                  </div>
                </li>
                <li>
                  <div className="name-crypto">LTC</div>
                  <div className="qr-code ">
                    <img
                      src={LTC}
                      alt="LTC Barcode"
                      onClick={() =>
                        setIsShowModalSecondQr(!isShowModalSecondQr)
                      }
                    />
                  </div>
                  <div
                    className="modal-page-qr"
                    onClick={() => setIsShowModalSecondQr(!isShowModalSecondQr)}
                    style={{
                      transform: isShowModalSecondQr ? "scale(1)" : "scale(0)",
                    }}
                  >
                    <div
                      className="box-img-in-modal"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img src={LTC} alt="LTC Barcode" />
                      <i
                        className="close fa fa-close"
                        onClick={() =>
                          setIsShowModalSecondQr(!isShowModalSecondQr)
                        }
                      ></i>
                    </div>
                  </div>
                  <div className="address-wallet">
                    <span className="left-address-wallet">
                      <CopyToClipboard
                        onCopy={() => setIsShowCopiedSecond(true)}
                        text="M9aA5T6Lfm2keDE4x1JNY52s1JKZUm2gym"
                      >
                        <i className="fa fa-clipboard" />
                      </CopyToClipboard>
                      {isShowCopiedSecond && (
                        <div className="copied">Copied.</div>
                      )}
                    </span>
                    <span className="right-address-wallet">
                      M9aA5T6Lfm2keDE4x1JNY52s1JKZUm2gym
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
