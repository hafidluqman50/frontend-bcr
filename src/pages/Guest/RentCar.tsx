import { Car } from "@/interfaces/Car";
import { formatRupiah } from "@/lib/utils";
import axios from "axios";
import { ReactElement, useRef, useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";

export default function RentCar(): ReactElement {
  
  const params = useParams()
  
  const { state } = useLocation()
  
  const { type_driver, date_rent, time_rent, seat } = state
  
  const btnRef = useRef<any>('')
  
  const [disabledBtn, setDisabledBtn] = useState<boolean>(true)
  
  const fetchCarById = async(): Promise<{car:Car}> => {
    const response = await axios.get(`https://backend-bcr.fly.dev/api/cars/list-available/${params.id}`)
    
    return response.data
  }
  
  const { data, isLoading, refetch } = useQuery({
    queryFn: fetchCarById,
    queryKey: ['fetchCarById']
  })
  
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
                    
                    <div>
                        <div className="form-group">
                          <label className="mb-2">Tipe Driver</label>
                          <select className="form-select select2" data-placeholder="Pilih Tipe Driver" id="type-driver" defaultValue={type_driver} disabled>
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

                    <div>
                        <div className="form-group">
                          <label className="mb-2">Tanggal</label>
                          <input type="date" className="form-control" id="date-car" value={date_rent} disabled />
                        </div>
                    </div>

                    <div style={{width:'35%'}}>
                        <div className="form-group">
                          <label className="mb-2">Waktu Jemput / Ambil</label>
                          <select className="form-select select2" data-placeholder="Pilih Waktu" id="available-at" defaultValue={time_rent} disabled>
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
                          <input type="number" className="form-control" id="row-seat" value={seat} disabled />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="section-rent-detail" className="section-rent-detail">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <div className="card p-3">
                  <h5><b>Tentang Paket</b></h5>
                  <p style={{fontSize:'17px'}}>Include</p>
                  <ul>
                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                  </ul>
                  <p style={{fontSize:'17px'}}>Exclude</p>
                  <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                  <h5><b>Refund, Reschedule, Overtime</b></h5>
                  <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  {
                    isLoading ? 
                    <div className="card-body">
                      <h5 className="card-title placeholder-glow">
                        <span className="placeholder col-6"></span>
                      </h5>
                      <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-8"></span>
                      </p>
                      
                      <a href="#" tabIndex={-1} className="btn btn-primary disabled placeholder col-6" />
                    </div> : 
                    <>
                    <img
                        className="card-img-top"
                        src={data?.car.picture} alt={data?.car.name}
                        style={{width:'100%',height:'250px'}}
                    />
                    <div className="card-body">
                      <h5 className="mb-3"><b>{data?.car.name} / {data?.car.type_car}</b></h5>
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-4 p-0 text-center">
                            <p className="card-text">
                              <i className="fa-regular fa-calendar"></i> Tahun {data?.car.year}
                            </p>
                          </div>
                          <div className="col-md-4 p-0 text-center">
                            <p className="card-text">
                                <i className="fa-solid fa-users"></i> {data?.car.seat} Orang
                            </p>
                          </div>
                          <div className="col-md-4 p-0 text-center">
                            <p className="card-text">
                                <i className="fa-solid fa-gear"></i> {data?.car.transmission}
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                          <div>
                            <h5>Total</h5>
                          </div>
                          <div>
                            <h5><b>Rp. {formatRupiah(Number(data?.car.price))}</b></h5>
                          </div>
                        </div>
                        <hr />
                        <button className="btn btn-success rounded-0 text-center w-100">
                          Lanjutkan Pembayaran
                        </button>
                      </div>
                    </div>
                    </>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}