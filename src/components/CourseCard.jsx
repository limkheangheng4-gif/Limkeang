function CourseCard(props) {
    const { title, des, image, price } = props
    return (
        <div className="course-card">
            <img src={image} alt="" />
            <div className="title">
                <h2>{title}</h2>
                <p>{des}</p>
                <p className="price">${price}</p>
            </div>
        </div>
    );
}

export default CourseCard;
