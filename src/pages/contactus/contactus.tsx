import ContactUs from "../../components/contact/contact";
import Heading from "../../components/global/Heading";
import Text from "../../components/global/Text";
import GlobalLayout from "../../layouts/GlobalLayout";

const Home = (props: { email: string }) => {
    return (
        <GlobalLayout>
            <main className="px-5 lg:px-16">
                <Heading customClass="mt-16">Contact</Heading>
                <Text customClass="mb-16">Any question or remarks? Just write us a message!</Text>
                <ContactUs />
            </main>
        </GlobalLayout>
    );
};

export default Home;