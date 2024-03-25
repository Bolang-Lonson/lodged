import './about.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

const About = () => {
    return (
        <div>
            <div className="container-fluid header">
                <Navbar/>
                <div className="text-center py-5">
                    <h1 className='display-1'>About Us</h1>
                </div>
            </div>
            <div className='content py-5 container-sm'>
                <p className="display-5 fw-bold text-muted d-block text-center">Who Are We?</p>
                <div className='my-5 d-block '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugiat culpa iure numquam dolores dolorem pariatur eaque odit nostrum debitis aut, dolor placeat odio, eos accusamus est alias assumenda cupiditate?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugiat culpa iure numquam dolores dolorem pariatur eaque odit nostrum debitis aut, dolor placeat odio, eos accusamus est alias assumenda cupiditate?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugiat culpa iure numquam dolores dolorem pariatur eaque odit nostrum debitis aut, dolor placeat odio, eos accusamus est alias assumenda cupiditate?
                </div>
                <hr />
                <p className="display-5 fw-bold text-muted d-block text-center mt-5">Our Goal</p>
                <div className='my-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugiat culpa iure numquam dolores dolorem pariatur eaque odit nostrum debitis aut, dolor placeat odio, eos accusamus est alias assumenda cupiditate?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugiat culpa iure numquam dolores dolorem pariatur eaque odit nostrum debitis aut, dolor placeat odio, eos accusamus est alias assumenda cupiditate?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugiat culpa iure numquam dolores dolorem pariatur eaque odit nostrum debitis aut, dolor placeat odio, eos accusamus est alias assumenda cupiditate?
                </div>
            </div>
            <section className="row justify-content-center align-items-center bg-light py-5" 
                     id="contact"
            >
                <div className="col-5 text-center">
                    <h2 className='fw-bold my-3'>Contact Us</h2>
                    <p className="lead mb-5">Want to contact the team?</p>
                    <a href="/contact" className="btn btn-lg btn-secondary w-100">Contact Us</a>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default About