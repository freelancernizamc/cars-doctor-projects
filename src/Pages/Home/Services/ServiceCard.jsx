

const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="img" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className={title}>Shoes!</h2>
                <p className="text-xl text-orange-500 font-bold">Price: ${price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;