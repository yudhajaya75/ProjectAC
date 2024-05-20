import useContactUs from "../../hooks/useContactUs";
import Container from "../global/container";
import Input from "./Input";
import SocialBubble from "./SocialBubble";
import SocialList from "./SocialList";

function Contact() {
  const { content, handleChange, handleSubmit, values } = useContactUs();

  return (
    <Container
      customClass="bg-white shadow-lg md:h-[667px]"
      orientation="horizontal"
      firstElement={
        <div className="h-full grid justify-between bg-formbg bg-cover bg-center rounded-lg p-5 lg:p-10 gap-24 md:gap-10">
          <div className="text-white">
            <p className="font-semibold">Contact Information</p>
            <p className="lg:text-[18px] sm-440:text-[16px] sm320:text-[10] font-normal text-[#C9C9C9]">
              Say something to start a live chat!
            </p>
          </div>
          {content && (
            <ul className="grid gap-5">
             <a href={content.data.attributes.phone}>
                <SocialList
                content={
                  "Whatsapp"
                }
                imageSource="./images/telp.png"
                />
              </a>
              <a href={content.data.attributes.email}>
                <SocialList
                  content='Our Email'
                  imageSource="./images/email.png"
                />
              </a>
              <a href={content.data.attributes.adress}>
                <SocialList
                  content='Our Addresss'
                  imageSource="./images/lokasi.png"
                />
              </a>
            </ul>
          )}
          <ul className="flex gap-5 items-end">
            <SocialBubble link="https://www.instagram.com/konselingsatir.id/" imageSource="./images/instagram.png" />
          </ul>
        </div>
      }
      secondElement={
        <form
          onSubmit={handleSubmit}
          className="p-5 lg:p-10 grid grid-cols-2 gap-5 gap-y-11 my-10"
        >
          <Input
            label="First Name"
            onChange={handleChange}
            value={values.firstname}
          />
          <Input
            label="Last Name"
            onChange={handleChange}
            value={values.lastname}
          />
          <Input
            label="Phone Number"
            onChange={handleChange}
            type="tel"
            value={values.phonenumber}
          />
          <Input
            label="Email"
            onChange={handleChange}
            type="email"
            value={values.email}
          />
          <Input
            label="message"
            onChange={handleChange}
            placeholder="Write your message..."
            customClass="col-span-2"
            value={values.message}
          />
          <button
            type="submit"
            className="p-5 md:px-10 text-white bg-[#1D3A69] rounded-md md:w-fit col-span-2 md:col-span-1"
          >
            Kirim Pesan
          </button>
        </form>
      }
    />
  );
}

export default Contact;
