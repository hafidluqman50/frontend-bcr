import { ReactElement } from "react";


export default function FooterLayout(): ReactElement {
  return(
    <>
      <footer id="footer" className="footer">
          <div className="row">
              <div className="col-md-3">
                  <p className="lh-base fw-lighter mb-4">
                      Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
                  </p>
                  <p className="fw-lighter mb-4">binarcarrental@gmail.com</p>
                  <p className="fw-lighter mb-4">081-233-334-808</p>
              </div>
              <div className="col-md-3">
                  <p className="fw-bold mb-4">Our Services</p>
                  <p className="fw-bold mb-4">Why Us</p>
                  <p className="fw-bold mb-4">Testimonial</p>
                  <p className="fw-bold mb-4">FAQ</p>
              </div>
              <div className="col-md-3 mb-3">
                  <p className="lh-base fw-lighter mb-4">Connect with us</p>
                  <div className="row">
                  <div className="col-2">
                      <div className="footer__circle-avatar text-center">
                              <i
                                  className="fa-brands fa-facebook font--white font--size-20"
                              ></i>
                          </div>
                      </div>
                      <div className="col-2">
                          <div className="footer__circle-avatar text-center">
                              <i
                                  className="fa-brands fa-instagram font--white font--size-20"
                              ></i>
                          </div>
                      </div>
                      <div className="col-2">
                          <div className="footer__circle-avatar text-center">
                              <i
                                  className="fa-brands fa-twitter font--white font--size-20"
                              ></i>
                          </div>
                      </div>
                      <div className="col-2">
                          <div className="footer__circle-avatar text-center">
                              <i
                                  className="fa-regular fa-envelope font--white font--size-20"
                              ></i>
                          </div>
                      </div>
                      <div className="col-2">
                          <div className="footer__circle-avatar text-center">
                              <i
                                  className="fa-brands fa-twitch font--white font--size-20"
                              ></i>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-3 mb-3">
                  <p className="fw-lighter mb-4">Copyright Binar 2022</p>
                  <div className="footer__logo bg--dark-blue-05"></div>
              </div>
          </div>
      </footer>
    </>
  )
}