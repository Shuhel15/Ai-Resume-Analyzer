import reviewsData from "../../data/reviews.json";

export const Reviews = () => {
  return (
    <section className="reviews-section">
      <h2 className="review-title">
        What Users <span>Say</span>
      </h2>

      <div className="reviews-container">
        {reviewsData.map((item) => (
          <div className="review-card" key={item.id}>

            <div className="review-header">
              <img
                src={item.image}
                alt={item.name}
                className="review-avatar"
              />
              <h3>{item.name}</h3>
            </div>

            <div className="stars">
              {"★".repeat(item.rating)}
              {"☆".repeat(5 - item.rating)}
            </div>

            <p>{item.review}</p>

          </div>
        ))}
      </div>
    </section>
  );
};