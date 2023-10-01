import './footer.css';

const Footer = ({logo}) => {
    return (
        <div className='footer'>
            <div className='sxn sxn1'>
                <img src={logo} alt='logo'/>
            </div>
            {/* Template for footer with 3 columns for various classified links */}
            <div className='sxn sxn2'>PRICING</div>
            <div className='sxn sxn3'>HOME</div>
            {/* Bottom row if needed */}
            <div className='sxn sxn4'>XERTIA Inc &copy;</div>
        </div>
    )
}

export default Footer