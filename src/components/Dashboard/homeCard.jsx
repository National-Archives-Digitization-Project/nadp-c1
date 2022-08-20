

const HomeCard = () => {
    return (
        <div className="col-md-6 grid-margin stretch-card">
            <div className="card tale-bg">
                <div className="card-people mt-auto">
                    <img src="./assets/images/dashboard/people.svg" alt="people" />
                    <div className="weather-info">
                        <div className="d-flex">
                            <div>
                                <h2 className="mb-0 font-weight-normal">
                                    <i className="icon-sun mr-2" />31<sup>F</sup>
                                </h2>
                            </div>
                            <div className="ml-2">
                                <h4 className="location font-weight-normal">Enugu State</h4>
                                <h6 className="font-weight-normal">Nigeria (NADP I)</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCard;