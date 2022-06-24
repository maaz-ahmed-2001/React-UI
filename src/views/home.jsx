import Banner from "../components/Banner"
import FindUs from "../components/FindUs"
import OurPartners from "../components/OurPartners"
import Services from "../components/Services"

function Home() {
    document.title = "WeFresh | Home"

    return (
        <>
            <section>
                <Banner />
            </section>
            <section>
                <Services/>
            </section>
            <section>
                <FindUs/>
            </section>
            <section>
                <OurPartners/>
            </section>
        </>
    )
}

export default Home