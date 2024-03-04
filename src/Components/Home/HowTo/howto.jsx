import './howto.css';

const HowTo = () => {
    return(
        <div className='container'>
            <div id='howto' className='row'>
                <h2 className='col-12 text-center '><u>how it works</u></h2>
                <div className='steps col-12 col-lg-3'>Step 1: Signup</div>
                <div className='steps col-12 col-lg-3'>Step 2: Find Lodging</div>
                <div className='steps col-12 col-lg-3'>Step 3: Book Lodging</div>
            </div>
            <hr/>
            <div id='partners'>
                {/* A carousel with the logos of the major hotels we get to join. the most enticing list */}
                <h2>We Partnered With</h2>
                <div className='partner-carousel'> Partners Carousel </div>
            </div>
        </div>
    )
}

export default HowTo