import {Link} from "react-router-dom";

function Navbar(){
	return(
		// <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		//   <div className="container-fluid">
		//     <a className="navbar-brand" href="/">Toleko</a>
		//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		//       <span className="navbar-toggler-icon"></span>
		//     </button>
		//     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
		//       <div className="navbar-nav">
		//         <a className="nav-link active" aria-current="page" href="/">Inicio</a>
		//         <a className="nav-link" href="Render3d">Render 3d</a>
		//         <a className="nav-link" href="formulario">Contacto</a> 
		//       </div>
		//     </div>
		//   </div>
		// </nav>

		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		  <div className="container-fluid">
		    <Link className="navbar-brand" to="/">Toleko</Link>
		    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		      <span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
		      <div className="navbar-nav">
		        <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
		        <Link className="nav-link" to="Render3d">Render 3d</Link>
		        <Link className="nav-link" to="formulario">Contacto</Link> 
		      </div>
		    </div>
		  </div>
		</nav>
		)
}

export default Navbar
