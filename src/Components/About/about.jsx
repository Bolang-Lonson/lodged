import './about.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

const About = () => {
    return (
        <>
            <Navbar transparent = {false} signedIn={true}/>
            <div className='content'><code>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugiat culpa iure numquam dolores dolorem pariatur eaque odit nostrum debitis aut, dolor placeat odio, eos accusamus est alias assumenda cupiditate?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugiat culpa iure numquam dolores dolorem pariatur eaque odit nostrum debitis aut, dolor placeat odio, eos accusamus est alias assumenda cupiditate?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugiat culpa iure numquam dolores dolorem pariatur eaque odit nostrum debitis aut, dolor placeat odio, eos accusamus est alias assumenda cupiditate?
            </code>
            </div>
            <Footer/>
        </>
    )
}

export default About