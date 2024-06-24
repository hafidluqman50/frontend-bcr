import { ReactElement, useEffect } from "react";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';

export default function IndexPage(): ReactElement {
  
  useEffect(() => {  
    ($(".owl-carousel") as any).owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                    // stagePadding: 0,
                },
                600: {
                    items: 1,
                    stagePadding: 10,
                },
                1000: {
                    items: 1,
                    stagePadding: 320,
                },
            },
        });
    },[])
  
  return(
    <>
      <main>
          <section id="introduction" className="section-introduction">
              <div className="row">
                  <div className="col-md-6 col-xs-1">
                      <div
                          className="section-introduction__heading section-introduction__heading--padding"
                      >
                          <h2 className="lh-lg fw-bold">
                              Sewa & Rental Mobil terbaik di kawasan
                              (Lokasimu)
                          </h2>
                      </div>
                      <div
                          className="section-introduction__text section-introduction__text--padding"
                      >
                          <p className="fw-lighter font--size-14">
                              Selamat datang di Binar Car Rental. Kami
                              menyediakan mobil kualitas terbaik dengan harga
                              terjangkau. Selalu siap melayani kebutuhanmu
                              untuk sewa mobil selama 24 jam.
                          </p>
                          <a href="/cars">
                              <button
                                  className="btn bg--lime-green-04 rounded-0 font--white"
                              >
                                  Mulai Sewa Mobil
                              </button>
                          </a>
                      </div>
                  </div>
                  <div className="col-md-6 col-xs-1 relative">
                      <div className="section-introduction__image">
                          <img
                              className="position-absolute"
                              src="https://res.cloudinary.com/dfylrgzcu/image/upload/v1710776204/c7ugipnedhwcezwzqln6.png"
                              draggable="false"
                          />
                      </div>
                      <div
                          className="section-introduction__blue-shape bg--dark-blue-04"
                      ></div>
                  </div>
              </div>
          </section>
          <section id="benefit" className="section-benefit">
              <div className="row">
                  <div className="col-md-6">
                      <div className="section-benefit__image-layout">
                          <img
                              src="https://res.cloudinary.com/dfylrgzcu/image/upload/v1710002280/ykvdpr10bxfevv2ejcsv.png"
                              draggable="false"
                          />
                      </div>
                  </div>
                  <div className="col-md-6">
                      <h2 className="lh-base section-benefit__header">
                          <b>Best Car Rental for any kind of trip in
                              (Lokasimu)!</b>
                      </h2>
                      <p>
                          Sewa mobil di (Lokasimu) bersama Binar Car Rental
                          jaminan harga lebih murah dibandingkan yang lain,
                          kondisi mobil baru, serta kualitas pelayanan terbaik
                          untuk perjalanan wisata, bisnis, wedding, meeting,
                          dll.
                      </p>
                      <div className="section-benefit__list">
                          <div className="section-benefit__list__item">
                              <div
                                  className="section-benefit__list__item__icon bg--dark-blue-01 gap-2 text-center"
                              >
                                  <i className="fa-solid fa-check"></i>
                              </div>
                              <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                          </div>
                          <div className="section-benefit__list__item">
                              <div
                                  className="section-benefit__list__item__icon bg--dark-blue-01 gap-2 text-center"
                              >
                                  <i className="fa-solid fa-check"></i>
                              </div>
                              <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                          </div>
                          <div className="section-benefit__list__item">
                              <div
                                  className="section-benefit__list__item__icon bg--dark-blue-01 gap-2 text-center"
                              >
                                  <i className="fa-solid fa-check"></i>
                              </div>
                              <p>Sewa Mobil Jangka Panjang Bulanan</p>
                          </div>
                          <div className="section-benefit__list__item">
                              <div
                                  className="section-benefit__list__item__icon bg--dark-blue-01 gap-2 text-center"
                              >
                                  <i className="fa-solid fa-check"></i>
                              </div>
                              <p>Gratis Antar - Jemput Mobil di Bandara</p>
                          </div>
                          <div className="section-benefit__list__item">
                              <div
                                  className="section-benefit__list__item__icon bg--dark-blue-01 gap-2 text-center"
                              >
                                  <i className="fa-solid fa-check"></i>
                              </div>
                              <p>Layanan Airport Transfer/Drop In Out</p>
                          </div>
                          <div className="section-benefit__list__item">
                              <div
                                  className="section-benefit__list__item__icon bg--dark-blue-01 gap-2 text-center"
                              >
                                  <i className="fa-solid fa-check"></i>
                              </div>
                              <p>Tersedia Berbagai Tipe Mobil</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section id="why-us" className="section-why-us">
              <h2 className="why-us-header lh-base"><b>Why Us?</b></h2>
              <p className="why-us-title mb-5 mt-4">Mengapa harus pilih Binar Car Rental?</p>
              <div className="row">
                  <div className="col-md-3">
                      <div className="card p-3">
                          <div
                              className="section-why-us__avatar bg--alert-warning text-center"
                          >
                              <i
                                  className="fa-regular fa-thumbs-up font--white font--size-20"
                              ></i>
                          </div>
                          <div className="card-body">
                              <h5 className="card-title fw-bold">
                                  Mobil Lengkap
                              </h5>
                              <p className="card-text">
                                  Tersedia banyak pilihan mobil, kondisi masih
                                  baru, bersih dan terawat
                              </p>
                          </div>
                      </div>
                  </div>

                  <div className="col-md-3">
                      <div className="card p-3">
                          <div
                              className="section-why-us__avatar bg--alert-danger text-center"
                          >
                              <i
                                  className="fa-solid fa-tag font--white font--size-20"
                              ></i>
                          </div>
                          <div className="card-body">
                              <h5 className="card-title fw-bold">Harga Murah</h5>
                              <p className="card-text">
                                  Harga murah dan bersaing, bisa bandingkan
                                  harga kami dengan rental mobil lain
                              </p>
                          </div>
                      </div>
                  </div>

                  <div className="col-md-3">
                      <div className="card p-3">
                          <div
                              className="section-why-us__avatar bg--dark-blue-05 text-center"
                          >
                              <i
                                  className="fa-regular fa-clock font--white font--size-20"
                              ></i>
                          </div>
                          <div className="card-body">
                              <h5 className="card-title fw-bold">
                                  Layanan 24 Jam
                              </h5>
                              <p className="card-text">
                                  Siap melayani kebutuhan Anda selama 24 jam
                                  nonstop. Kami juga tersedia di akhir minggu
                              </p>
                          </div>
                      </div>
                  </div>

                  <div className="col-md-3">
                      <div className="card p-3">
                          <div
                              className="section-why-us__avatar bg--lime-green-04 text-center"
                          >
                              <i
                                  className="fa-solid fa-medal font--white font--size-20"
                              ></i>
                          </div>
                          <div className="card-body">
                              <h5 className="card-title fw-bold">
                                  Sopir Professional
                              </h5>
                              <p className="card-text">
                                  Sopir yang profesional, berpengalaman,
                                  jujur, ramah dan selalu tepat waktu
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section id="testimonial" className="section-testimonial">
              <div className="container-fluid">
                  <h2 className="lh-base text-center">Testimonial</h2>
                  <p className="mt-4 text-center">
                      Berbagai review positif dari para pelanggan kami
                  </p>
              </div>
              <div 
                className="owl-carousel owl-theme" 
                // responsive={responsiveOptions} 
                // margin={10} 
                // nav 
                // dots={false}
                // loop
              >
                  <div className="item m-3">
                      <div className="card card--padding card--purple-dark">
                          <div className="card-body gap-5">
                              <div className="row">
                                  <div className="col-md-3">
                                      <div
                                          className="section-testimonial__avatar"
                                      >
                                          <img
                                              src="https://res.cloudinary.com/dfylrgzcu/image/upload/v1710776261/pvjs34p6lj1dfzbgzqf3.png"
                                          />
                                      </div>
                                  </div>
                                  <div className="col-md-9">
                                      <div className="section-testimonial__star">
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                      </div>
                                      <div>
                                          <p className="card-text fw-lighter">
                                              “Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit, sed
                                              do eiusmod lorem ipsum dolor sit
                                              amet, consectetur adipiscing
                                              elit, sed do eiusmod lorem ipsum
                                              dolor sit amet, consectetur
                                              adipiscing elit, sed do eiusmod”
                                          </p>
                                          <p className="card-text">
                                              John Dee 32, Bromo
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="item m-3">
                      <div className="card card--padding card--purple-dark">
                          <div className="card-body gap-5">
                              <div className="row">
                                  <div className="col-md-3">
                                      <div
                                          className="section-testimonial__avatar"
                                      >
                                          <img
                                              src="https://res.cloudinary.com/dfylrgzcu/image/upload/v1710776259/xbyro8qedv2c2av7zl5f.png"
                                          />
                                      </div>
                                  </div>
                                  <div className="col-md-9">
                                      <div className="section-testimonial__star">
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                      </div>
                                      <div>
                                          <p className="card-text fw-lighter">
                                              “Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit, sed
                                              do eiusmod lorem ipsum dolor sit
                                              amet, consectetur adipiscing
                                              elit, sed do eiusmod lorem ipsum
                                              dolor sit amet, consectetur
                                              adipiscing elit, sed do eiusmod”
                                          </p>
                                          <p className="card-text">
                                              John Dee 32, Bromo
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="item m-3">
                      <div className="card card--padding card--purple-dark">
                          <div className="card-body gap-5">
                              <div className="row">
                                  <div className="col-md-3">
                                      <div
                                          className="section-testimonial__avatar"
                                      >
                                          <img
                                              src="https://res.cloudinary.com/dfylrgzcu/image/upload/v1710776261/pvjs34p6lj1dfzbgzqf3.png"
                                          />
                                      </div>
                                  </div>
                                  <div className="col-md-9">
                                      <div className="section-testimonial__star">
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                      </div>
                                      <div>
                                          <p className="card-text fw-lighter">
                                              “Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit, sed
                                              do eiusmod lorem ipsum dolor sit
                                              amet, consectetur adipiscing
                                              elit, sed do eiusmod lorem ipsum
                                              dolor sit amet, consectetur
                                              adipiscing elit, sed do eiusmod”
                                          </p>
                                          <p className="card-text">
                                              John Dee 32, Bromo
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section
              id="rent"
              className="section-rent rounded-4 d-flex flex-column justify-content-center align-items-center p-5"
          >
              <h2 className="lh-base fw-bold mb-4 text-center">
                  Sewa Mobil di (Lokasimu) Sekarang
              </h2>
              <div className="section-rent__text-body">
                  <p className="lh-base fw-lighter text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                  </p>
              </div>
              <div className="section-rent__button mt-5">
                  <button className="btn bg--lime-green-04 rounded-0 font--white">
                      Mulai Sewa Mobil
                  </button>
              </div>
          </section>
          <section id="faq" className="section-faq">
              <div className="row">
                  <div className="col-md-6">
                      <h2 className="lh-base fw-bold mb-4">
                          Frequently Asked Question
                      </h2>
                      <p className="fw-lighter">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                      </p>
                  </div>
                  <div className="col-md-6">
                      <div className="accordion" id="accordionExample">
                          <div className="accordion-item">
                              <h2 className="accordion-header">
                                  <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseOne"
                                      aria-expanded="false"
                                      aria-controls="collapseOne"
                                  >
                                      Apa saja syarat yang dibutuhkan?
                                  </button>
                              </h2>
                              <div
                                  id="collapseOne"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#accordionExample"
                              >
                                  <div className="accordion-body">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna
                                      aliqua. Ut enim ad minim veniam, quis
                                      nostrud exercitation ullamco laboris
                                      nisi ut aliquip ex ea commodo consequat.
                                      Duis aute irure dolor in reprehenderit
                                      in voluptate velit esse cillum dolore eu
                                      fugiat nulla pariatur. Excepteur sint
                                      occaecat cupidatat non proident, sunt in
                                      culpa qui officia deserunt mollit anim
                                      id est laborum.
                                  </div>
                              </div>
                          </div>
                          <div className="accordion-item">
                              <h2 className="accordion-header">
                                  <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseTwo"
                                      aria-expanded="false"
                                      aria-controls="collapseTwo"
                                  >
                                      Berapa hari minimal sewa mobil lepas
                                      kunci ?
                                  </button>
                              </h2>
                              <div
                                  id="collapseTwo"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#accordionExample"
                              >
                                  <div className="accordion-body">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna
                                      aliqua. Ut enim ad minim veniam, quis
                                      nostrud exercitation ullamco laboris
                                      nisi ut aliquip ex ea commodo consequat.
                                      Duis aute irure dolor in reprehenderit
                                      in voluptate velit esse cillum dolore eu
                                      fugiat nulla pariatur. Excepteur sint
                                      occaecat cupidatat non proident, sunt in
                                      culpa qui officia deserunt mollit anim
                                      id est laborum.
                                  </div>
                              </div>
                          </div>
                          <div className="accordion-item">
                              <h2 className="accordion-header">
                                  <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseFour"
                                      aria-expanded="false"
                                      aria-controls="collapseFour"
                                  >
                                      Berapa hari sebelumnya sabaiknya booking
                                      sewa mobil?
                                  </button>
                              </h2>
                              <div
                                  id="collapseFour"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#accordionExample"
                              >
                                  <div className="accordion-body">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna
                                      aliqua. Ut enim ad minim veniam, quis
                                      nostrud exercitation ullamco laboris
                                      nisi ut aliquip ex ea commodo consequat.
                                      Duis aute irure dolor in reprehenderit
                                      in voluptate velit esse cillum dolore eu
                                      fugiat nulla pariatur. Excepteur sint
                                      occaecat cupidatat non proident, sunt in
                                      culpa qui officia deserunt mollit anim
                                      id est laborum.
                                  </div>
                              </div>
                          </div>
                          <div className="accordion-item">
                              <h2 className="accordion-header">
                                  <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseThree"
                                      aria-expanded="false"
                                      aria-controls="collapseThree"
                                  >
                                      Apakah ada biaya antar jemput?
                                  </button>
                              </h2>
                              <div
                                  id="collapseThree"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#accordionExample"
                              >
                                  <div className="accordion-body">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna
                                      aliqua. Ut enim ad minim veniam, quis
                                      nostrud exercitation ullamco laboris
                                      nisi ut aliquip ex ea commodo consequat.
                                      Duis aute irure dolor in reprehenderit
                                      in voluptate velit esse cillum dolore eu
                                      fugiat nulla pariatur. Excepteur sint
                                      occaecat cupidatat non proident, sunt in
                                      culpa qui officia deserunt mollit anim
                                      id est laborum.
                                  </div>
                              </div>
                          </div>

                          <div className="accordion-item">
                              <h2 className="accordion-header">
                                  <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseFive"
                                      aria-expanded="false"
                                      aria-controls="collapseFive"
                                  >
                                      Bagaimana jika terjadi kecelakaan?
                                  </button>
                              </h2>
                              <div
                                  id="collapseFive"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#accordionExample"
                              >
                                  <div className="accordion-body">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna
                                      aliqua. Ut enim ad minim veniam, quis
                                      nostrud exercitation ullamco laboris
                                      nisi ut aliquip ex ea commodo consequat.
                                      Duis aute irure dolor in reprehenderit
                                      in voluptate velit esse cillum dolore eu
                                      fugiat nulla pariatur. Excepteur sint
                                      occaecat cupidatat non proident, sunt in
                                      culpa qui officia deserunt mollit anim
                                      id est laborum.
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </main>
    </>
  )
}