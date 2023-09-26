import './howto.css';

const HowTo = () => {
    return(
        <>
        <div id='howto'>
            <h2><u>how it works</u></h2>
            <div className='steps'>Step 1: Signup</div>
            <div className='steps'>Step 2: Find Lodging</div>
            <div className='steps'>Step 3: Book Lodging</div>
        </div>
        <hr/>
        <div id='partners'>
            {/* A carousel with the logos of the major hotels we get to join. the most enticing list */}
            <h2>We Partnered With</h2>
            <div className='partner-carousel'> Partners Carousel </div>
        </div>
        </>
    )
}

export default HowTo