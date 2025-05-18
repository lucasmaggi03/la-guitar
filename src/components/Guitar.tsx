export default function Guitar( props ) {
  return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
          <div className="col-4">
            <img
              className="img-fluid"
              src={`./public/img/${props.image}.jpg`}
              alt="imagen guitarra"
            />
          </div>
          <div className="col-8">
            <h3 className="text-black fs-4 fw-bold text-uppercase">{props.name}</h3>
            <p>
              {props.description}
            </p>
            <p className="fw-black text-primary fs-3">${props.price}</p>
            <button type="button" className="btn btn-dark w-100">
              Agregar al Carrito
            </button>
          </div>
        </div>
  );
}
