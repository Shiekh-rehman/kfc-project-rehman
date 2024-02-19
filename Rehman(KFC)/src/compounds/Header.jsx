export default function Header() {
    return <header>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <a className="navbar-brand" href="#"><img src="public/image/download.png" alt="" /></a>
       
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto  mb-lg-0">
              <li className="nav-item">
                <a className="nav-link bike" aria-current="page" href="#"><img src="public/image/Delivery.793adbaa710baf75ba78.png" alt="" /> DELIVERY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link pick " aria-current="page" href="#"><img src="public/image/pickup.47bb874f83ea6acb5a47.png" alt="" />PICKUP</a>
              </li>
         
        
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#"><img src="public/image/bucket.svg" alt="" /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link log " aria-current="page" href="#">LOGIN</a>
              </li>
         
        
            </ul>
         
          </div>
        </div>
      </nav>
    </header>
  }