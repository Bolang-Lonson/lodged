import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer"

const Dashboard = () => {
    return (
        <>
            <Navbar/>
            <div className="container-sm">
                <div className="row justify-content-center align-item-center">
                    <div className="col-lg-4 col-12">
                        Wallet
                    </div>
                    <div className="col-lg-8 col-12">Pending Bookings</div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Dashboard