import img1 from './../assets/img1.jpg';
import img2 from './../assets/img2.jpg';
import img3 from './../assets/img3.jpg';
function Carrousel(){
	return(
		<div className="container">
		<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={customHeader}>
		  <div className="carousel-indicators">
		    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
		    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
		    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
		  </div>
		  <div className="carousel-inner">
		    <div className="carousel-item active">
		      <img src={img1} className="d-block w-100 img-fluid" alt="..."/>
		      <div className="carousel-caption d-none d-md-block">
		        <h5>First slide label</h5>
		        <p>Some representative placeholder content for the first slide.</p>
		      </div>
		    </div>
		    <div className="carousel-item">
		      <img src={img2} className="d-block w-100 img-fluid" alt="..."/>
		      <div className="carousel-caption d-none d-md-block">
		        <h5>Second slide label</h5>
		        <p>Some representative placeholder content for the second slide.</p>
		      </div>
		    </div>
		    <div className="carousel-item">
		      <img src={img3} className="d-block w-100 img-fluid" alt="..."/>
		      <div className="carousel-caption d-none d-md-block">
		        <h5>Third slide label</h5>
		        <p>Some representative placeholder content for the third slide.</p>
		      </div>
		    </div>
		  </div>
		  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
		    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		    <span className="visually-hidden">Previous</span>
		  </button>
		  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
		    <span className="carousel-control-next-icon" aria-hidden="true"></span>
		    <span className="visually-hidden">Next</span>
		  </button>
		</div>
		</div>
	)
}
export default Carrousel
//estilos
const ancho = {
    width: "70%",
    minwidth: "800",
    margin: "0 auto",
};
// styles
const customCardImgTop = {
    height: "100px",
}

const customCardStyles = {
    width:"100%",
    maxWidth: "540px",
}


const customHeader = {
  backgroundColor: "#1F618D",
  background: "#1F618D",
  color: "white"
}