import { ReactElement, useRef } from "react";
import { Link } from "react-router-dom";


export default function HeaderLayout(): ReactElement {
  
  const sidePanelRef = useRef<HTMLDivElement | null>(null)
  const backdropRef = useRef<HTMLDivElement | null>(null)
  
  const openNav = (): void => {
      if(sidePanelRef.current) {
        sidePanelRef.current.style.width = "220px";
      }
      if(backdropRef.current) {
        backdropRef.current.style.display = 'block';
      }
  }

  const closeNav = (): void => {
      if(sidePanelRef.current) {
        sidePanelRef.current.style.width = "0";
      }
      if(backdropRef.current) {
        backdropRef.current.style.display = 'none';
      }
  }
  
  return(
    <>
      <header>
          <nav className="navbar navbar-expand-lg font--helvetica">
            <div className="justify-content-between container flex">
              <Link to="/"><div className="logo__header bg--dark-blue-04"></div></Link>
                  <div>
                      <button
                          className="navbar-toggler"
                          type="button"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                          onClick={() => openNav()}
                      >
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div
                          className="navbar-collapse collapse"
                          id="navbarSupportedContent"
                      >
                          <ul
                              className="navbar-nav mb-lg-0 font--black mb-2 me-auto gap-4"
                          >
                              <li className="nav-item">
                                  <a
                                      className="nav-link"
                                      aria-current="page"
                                      href="#"
                                      >Our Services</a
                                  >
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#">Why Us</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#">Testimonial</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#">FAQ</a>
                              </li>
                              <Link to="/member/register">
                                <button
                                    className="btn bg--lime-green-04 font--bold rounded-0 font--white"
                                >
                                    Register
                                </button>
                              </Link>
                          </ul>
                      </div>
                  </div>
              </div>
          </nav>
      </header>
      <aside>
          <div id="mySidepanel" className="sidepanel" ref={sidePanelRef}>
          <p className="sidepanel-title"><b>BCR</b></p>
              <a
                  href="javascript:void(0)"
                  className="close-btn"
                  onClick={ () => closeNav() }
                  >×</a
              >

              <a href="#" className="mt-2">Our Services</a>
              <a href="#">Why Us</a>
              <a href="#">Testimoni</a>
              <a href="#">FAQ</a>
              <a href="#" className="mt-2">
                  <button
                      className="btn bg--lime-green-04 font--bold rounded-0 font--white"
                  >
                      Register
                  </button>
              </a>
          </div>
          <div className="backdrop" id="backdrop" ref={backdropRef}></div>
      </aside>
    </>
  )
}