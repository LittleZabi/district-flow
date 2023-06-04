import HomeMiddle from "../components/home-middle";
import LoginForm from "../components/login-form";

const HomeView = () => {
  const list = [1, 2, 3, 4];
  console.log(list.at(-1));
  return (
    <div>
      {/* <dialog id="d">
        here is dialog box
        <button onClick={() => d.close()}>close</button>
      </dialog>
      <button onClick={() => d.showModal()}>Open</button> */}
      <HomeMiddle />
      <div className="page-size flex home-login-outer">
        <div className="flex home-x2">
          <div className="super-93x">
            <div className="flex a993x-13">
              <img src="/images/logo.png" alt="district flow" />
              <h3>DistrictFlow</h3>
            </div>
            <p>
              DistrictFlow is an innovative online platform designed exclusively
              for district officers (DC) to streamline citizen services and
              automate administrative processes. Our user-friendly website
              empowers citizens to conveniently submit their applications
              online, revolutionizing the way district-level tasks are handled.
              With DistrictFlow, districts experience enhanced efficiency,
              seamless connectivity, and automated workflows, enabling officers
              to focus on important tasks while ensuring timely and accurate
              results. Experience the transformative power of digital governance
              with DistrictFlow, simplifying processes and empowering districts
              for a brighter future.
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
      <div className="page-size home-x3">
        <p>
          Welcome to the District Officer Website! Experience the convenience of
          our online platform, designed exclusively for citizens like you.
          Submit your applications, letters, and requests directly to the
          District Officer (DC) with just a few clicks. Say goodbye to long
          queues and paperwork hassles, as our user-friendly interface
          streamlines the entire process. Unlock a world of efficiency and
          transparency as you leverage the power of digital technology. Track
          the progress of your applications in real-time, receive timely
          updates, and ensure that your voice is heard. Our platform is built to
          empower you, providing a seamless channel to connect with the District
          Officer and access essential services. Join a community of engaged
          citizens and contribute to the growth and development of your
          district. Together, we can foster effective governance, enhance
          communication, and build a brighter future. Embrace the ease and
          accessibility of our online platform, and let your applications and
          letters make an impact today!
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.158471546285!2d73.02243167495813!3d34.6759496845418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de75bbe2e01507%3A0x700f4ad9b65581cf!2sDeputy%20Commissioner%20Office%20-%20Battagram!5e0!3m2!1sen!2s!4v1685877311219!5m2!1sen!2s"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
export default HomeView;
