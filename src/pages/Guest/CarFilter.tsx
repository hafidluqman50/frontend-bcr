import { Car } from "@/interfaces/Car";
import { httpServer } from "@/lib/server";
import { formatRupiah } from "@/lib/utils";
import axios from "axios";
import { ReactElement, useRef, useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";

export default function CarFilter(): ReactElement {
  
  const navigate = useNavigate()
  
  const typeDriverRef = useRef<HTMLSelectElement>(null)
  const dateRentRef = useRef<HTMLInputElement>(null)
  const timeRentRef = useRef<HTMLSelectElement>(null)
  const seatRef = useRef<HTMLInputElement>(null)
  const btnRef = useRef<any>('')
  
  const [isShow, setIsShow] = useState<boolean>(false)
  const [disabledBtn, setDisabledBtn] = useState<boolean>(true)
  
  const checkInput = (): void => {
    if(typeDriverRef.current?.value != '' && dateRentRef.current?.value != '' && timeRentRef.current?.value != '') {
      setDisabledBtn(false)
    }
  }
  
  const fetchCarsAvailable = async(): Promise<{cars:Car[]}> => {
    
    const response = await axios.get(`https://backend-bcr.fly.dev/api/cars/list-available`,{
      params:{
        type_driver:typeDriverRef.current?.value,
        date_rent:dateRentRef.current?.value,
        time_rent:timeRentRef.current?.value,
        seat:seatRef.current?.value
      }
    })
    
    return response.data
    
  }
  
  const { isLoading, data, refetch } = useQuery({
    queryFn: fetchCarsAvailable,
    queryKey: ['fetchCarsAvailable'],
    enabled: false
  })
  
  const rentCarPage = (id: number): void => {
    
    navigate(`/cars/rent/${id}`, {
      state:{
        type_driver:typeDriverRef.current?.value == null ? undefined : typeDriverRef.current?.value,
        date_rent:dateRentRef.current?.value == null ? undefined : dateRentRef.current?.value,
        time_rent:timeRentRef.current?.value == null ? undefined : timeRentRef.current?.value,
        seat:seatRef.current?.value == null ? undefined : seatRef.current?.value
      }
    })
    
  }
  
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
                          <button
                              className="btn bg--lime-green-04 rounded-0 font--white"
                          >
                              Mulai Sewa Mobil
                          </button>
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
          <section id="section-filter-car" className="section-filter-car">
              <div
                  className="filter-car d-flex align-items-center justify-content-center container gap-3 rounded"
              >
                  <div className="d-flex gap-3 flex-wrap" style={{width:'100%'}}>
                      
                      <div style={{maxWidth:'25%'}}>
                          <div className="form-group">
                            <label className="mb-2">Tipe Driver</label>
                            <select className="form-select select2" ref={typeDriverRef} data-placeholder="Pilih Tipe Driver" id="type-driver" onChange={checkInput}>
                                  <option value=""></option>
                                  <option value="dengan-sopir">
                                      Dengan Sopir
                                  </option>
                                  <option value="tanpa-sopir">
                                      Tanpa Sopir (Lepas Kunci)
                                  </option>
                              </select>
                          </div>
                      </div>

                      <div style={{maxWidth:'25%'}}>
                          <div className="form-group">
                            <label className="mb-2">Tanggal</label>
                            <input type="date" className="form-control" ref={dateRentRef} id="date-car" onChange={checkInput} />
                          </div>
                      </div>

                      <div style={{width:'30%'}}>
                          <div className="form-group">
                            <label className="mb-2">Waktu Jemput / Ambil</label>
                            <select className="form-select select2" ref={timeRentRef} data-placeholder="Pilih Waktu" id="available-at" onChange={checkInput}>
                                  <option></option>
                                  <option value="08:00:00">
                                      08.00
                                  </option>
                                  <option value="09:00:00">
                                      09.00
                                  </option>
                                  <option value="10:00:00">
                                      10.00
                                  </option>
                                  <option value="11:00:00">
                                      11.00
                                  </option>
                              </select>
                          </div>
                      </div>
                      <div>
                          <div className="form-group">
                            <label className="mb-2">Jumlah Penumpang (Optional)</label>
                            <input type="number" className="form-control" ref={seatRef} id="row-seat" />
                          </div>
                      </div>
                  </div>
                  <button
                      className="btn btn-search btn-success bg--lime-green-04 rounded-0 font--white mt-3"
                      id="search-car"
                      ref={btnRef}
                      onClick={() => refetch()}
                      disabled={disabledBtn}
                  >
                      Cari Mobil
                  </button>
              </div>
          </section>
          <section id="section-car-list" className="section-car-list">
            <div className="container" id="container-cars">
              <div className="row" id="row-cars">
                {
                  !isLoading ? 
                  data?.cars.map((row, key) => (
                  <div className="col-md-4" key={key}>
                    <div className="card" style={{marginBottom: '5%'}}>
                        <img
                            className="card-img-top"
                            src={row.picture} alt={row.name}
                            style={{width:'100%',height:'250px'}}
                        />
                        <div className="card-body">
                            <p className="card-text">{row.name} / {row.type_car}</p>
                            <p className="card-text">
                                <b>Rp. {formatRupiah(row.price)} / Hari</b>
                            </p>
                            <p className="card-text">
                                {row.description}
                            </p>
                            <p className="card-text">
                                <i className="fa-solid fa-users"></i> {row.seat} Orang
                            </p>
                            <p className="card-text">
                                <i className="fa-solid fa-gear"></i> {row.transmission}
                            </p>
                            <p className="card-text">
                                <i className="fa-regular fa-calendar"></i> Tahun {row.year}
                            </p>
                            <p>
                              {/* <Link to={`/cars/rent/${row.id}`}> */}
                                <button
                                    className="btn bg--lime-green-04 rounded-0 font--white w-100"
                                    onClick={() => rentCarPage(row.id)}
                                >
                                    Pilih Mobil
                                </button>
                              {/* </Link> */}
                            </p>
                        </div>
                    </div>
                  </div>
                  )) : <></>
                }
              </div>
            </div>
          </section>
      </main>
    </>
  )
}