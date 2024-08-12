import style from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={style.Footer}>
        <section>
          <div className={style.container}>

            <div>
              <h3>Contact</h3>
              <p>Phone: +123 456 7890</p>
              <p>Email: support@example.com</p>
            </div>

            <div className={style.RedesS}>
              <h3>Social Media</h3>
              <ul>
                <li>
                <img className={style.imgF} src="./src/images/facebook.png" alt="" />
                  <a className={style.aF} href="#">Facebook</a>
                </li>
                <li>
                <img className={style.imgF}  src="./src/images/" alt="" />
                  <a className={style.aF}  href="#">Instagram</a>
                </li>
                <li>
                <img className={style.imgF}  src="./src/images/twitter.png" alt="" />
                  <a className={style.aF}  href="#">Twitter</a>
                </li>
                <li>
                <img className={style.imgF}  src="./src/images/github.png.png" alt="" />
                  <a className={style.aF}  href="#">Git Hub</a>
                </li>
                <li>
                <img className={style.imgF}  src="./src/images/youtube.png" alt="" />
                  <a className={style.aF}  href="#">YouTube</a>
                </li>

              </ul>
            </div>

            <div className={style.SobreNós}>
              <h3>About Us</h3>
              <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                bibendum, ipsum eget condimentum semper, nunc urna varius velit,
                ac rutrum metus eros eu justo.
              </p>
            </div>

          </div>
        </section>
      </footer>
    </>
  );
}
