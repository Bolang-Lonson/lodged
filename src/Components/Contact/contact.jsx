import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar"

const Contact = () => {
    // Code logic here
    return (
        <div className="bg-light">
            <div className="container-fluid header">
                <Navbar/>
                <div className="text-center py-5">
                    <h1 className="display-1">Contact Us</h1>
                </div>
            </div>
            <section className="container-sm py-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-7 col-12">
                        <div className="card border-0 shadow-sm rounded-4">
                            <div className="card-body text-center p-5">
                                <h2>Get in Touch</h2>
                                <p className="lead">Share your feedback by sending a query</p>
                                <div className="col-md-8 col-12 mx-auto">
                                    <form>
                                        <label HtmlFor="email" className="form-label float-start">Email address</label>
                                        <div className="mb-4 input-group">
                                            <span className="input-group-text">
                                                <i className="bi bi-envelope-fill"></i>
                                            </span>
                                            <input type="email" className="form-control" id="email" placeholder="e.g. mario@example.com"/>
                                            {/* tooltip */}
                                            <span className="input-group-text">
                                                <span className="tt" data-bs-placement="bottom" title="Enter an email address we can reply to">
                                                    <i className="bi bi-question-circle text-muted"></i>
                                                </span>
                                            </span>
                                        </div>

                                        <label HtmlFor="name" className="form-label float-start">Name</label>
                                        <div className="input-group mb-4">
                                            <span className="input-group-text">
                                                <i className="bi bi-person-fill"></i>
                                            </span>
                                            <input type="text" className="form-control" id="name" placeholder="e.g. Mario"/>
                                            {/* tooltip */}
                                            <span className="input-group-text">
                                                <span className="tt" data-bs-placement="bottom" title="Really nigga...?">
                                                    <i className="bi bi-question-circle text-muted"></i>
                                                </span>
                                            </span>
                                        </div>
                                        <label HtmlFor="subject" className="form-label float-start">What is your question about?</label>
                                        <div className="input-group mb-4">
                                            <span className="input-group-text">
                                                <i className="bi bi-chat-right-dots-fill"></i>
                                            </span>
                                            <select id="subject" className="form-select">
                                                <option value="pricing" selected>Pricing query</option>
                                                <option value="content">Content query</option>
                                                <option value="other">Other query</option>
                                            </select>
                                        </div>

                                        <div className="form-floating mb-4 mt-5">
                                            <textarea id="query" className="form-control" style={{height: '140px'}}></textarea>
                                            <label HtmlFor="query">Your query...</label>
                                        </div>

                                        <div className="mb-4 text-center">
                                            <button className="btn btn-secondary" type="submit">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Contact;