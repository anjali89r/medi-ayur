<template>
   <v-container fluid class="footer">
       <!-- <no-ssr><cookie-law theme="dark-lime"></cookie-law></no-ssr> -->

      <v-container grid-list-md >
      <v-layout row wrap>
         <v-flex sm6 md4 >
            <div class="widget about-widget" style="color:#fff;">
                            <h3 class="widget-title">About Medinovita</h3>
                            <!--<img src="/assets/images/footer-logo.png" alt="Simple Footer Logo">-->
                            <hr >
                            <p class="mn-desc">Medinovita is an online ayurveda and wellness travel service provider, where customers can find best ayurveda and yoga centers in India.You can compare,search and book best ayurveda packages at internationally accredited ayurvedic centers in India.</p>
                            <address class="mn-desc">
                                <label class="mn-label">Get in Touch:</label>
                                <br> 18/295A Kangarappady Trikkakara North Kochi,
                                <br> Kerala India
                                <br> <a href="tel:+919740177277"><span style="color: white">+91-9740177277</span></a>
                                    <br>
                                    <a href="mailto:care@medinovita.com"><span style="color: white">care@medinovita.com</span></a>
                            </address>

                        </div>

         </v-flex>
         <v-flex sm6 md4>
            <div class="widget">
                            <h4 class="widget-title">Ayurveda Hospitals</h4>
                            <hr>
                            <ul class="posts-list">
                                <li>
                                    <h5>
                                        <a href="/ayurveda-retreat/kairali-ayurvedic-healing-village-kerala">Kairali Ayurveda Healing Village,Palakkad</a>
                                    </h5>
                                </li>
                                <!-- <li>
                        <a href="#" target="_blank">Best dental clinics in India</a>
                    </li> -->
                                <li>
                                    <h5>
                                        <a href="/ayurveda-retreat/somatheeram-ayurveda-village">Somatheeram Ayurveda Village,Trivandrum
                                        </a>
                                    </h5>
                                </li>
                                <li>
                                    <h5>
                                        <a href="/ayurveda-retreat/rajah-beach-ayurveda-kerala">Rajah Beach Ayurveda,Thrissur
                                        </a>
                                    </h5>
                                </li>
                                <!-- <li>
                        <a href="#" target="_blank">How we work</a>
                    </li> -->
                                <li>
                                    <h5>
                                        <a href="/ayurveda-retreat/niramayam-heritage-ayurveda-retreat-kerala">Nirmayam Heritage Ayurveda,Thrissur
                                        </a>
                                    </h5>
                                </li>
                                <li>
                                    <h5>
                                        <a href="/ayurveda-retreat/rajah-healthy-acres-palakkad-kerala">Rajah Healthy Acres Ayurveda,Palakkad

                                        </a>
                                    </h5>
                                </li>
                                <li>
                                    <h5>
                                        <a href="/ayurveda-retreat/manaltheeram-ayurveda-beach-village">Manaltheeram Ayurveda Beach Village,Trivandrum
                                        </a>
                                    </h5>
                                </li>
                                <li>
                                    <h5>
                                        <a href="/best-ayurveda-hospitals-in-india">Best Ayurveda hospitals in India
                                        </a>
                                    </h5>
                                </li>


                            </ul>

                        </div>
         </v-flex>
         <v-flex sm6 md4>
            <div class="widget">
                            <h4 class="widget-title">Latest Blogs</h4>
                            <hr>
                            <ul class="posts-list">
                                <li>
                                    <h5>
                                        <a href="/blog/visa/medical-visa-from-bangladesh-to-india">Medical Visa from Bangladesh to India</a>
                                    </h5>
                                </li>

                                <li>
                                    <h5>
                                        <a href="/blog/ayurveda/best-ayurveda-hospitals-in-india">Best Ayurveda Hospitals in India</a>
                                    </h5>
                                </li>
                                <li>
                                    <h5>
                                        <a href="/blog/hospital/best-hospitals-in-kolkata-for-medical-treatment">Best Hospitals in Kolkata for medical tourism </a>
                                    </h5>
                                </li>
                                <li>
                                    <h5>
                                        <a href="/blog/visa/medical-visa-from-fiji-to-india"> Medical Visa from Fiji to India</a>
                                    </h5>
                                </li>
                                <li>
                                    <h5>
                                        <a href="/blog/visa/medical-visa-from-maldives-to-india"> Medical Visa from Maldives to India</a>
                                    </h5>
                                </li>


                            </ul>


                        </div>
         </v-flex>
      </v-layout>
      </v-container>
   </v-container>
</template>
<script>
//import CookieLaw from 'vue-cookie-law'
export default {
    components: {

   // CookieLaw
  }
}
</script>

<style scoped>
.footer {
   background-color: #171717;
  color: #9a9a9a;
}
.footer > .container,
.footer > .container-fluid {
  /* padding-top: 75px; */
  padding-bottom: 15px;
}
.footer hr {
  margin: 27px 0 21px;
  border-top-color: #3e3e3e;
}

.footer a {
  color: #9a9a9a;
  text-decoration: none;
}

.footer a:hover, .footer a:focus {
  color: #fff;
}

.footer .widget {
  margin-bottom: 60px;
}

.footer .widget .widget-title {
  font: 400 15px/1.1 "Montserrat", Arial, sans-serif;
  margin: 2px 0 25px;
  text-transform: uppercase;
  color: #fff;
}
.footer .widget ul{
   list-style: none;
   padding-left: 0px;
}
.footer .widget .posts-list li h5 {

  font-size: 13px;
  padding: 6px;
  text-decoration: underline;
    font-weight: 600;
    font-family: "Open Sans",Arial,sans-serif,Arial,sans-serif;
    line-height: 1;
    color: #222;
    margin-top: 0;
    margin-bottom: 20px;

}

.footer .widget .posts-list li span {
  font-style: italic;
  font-size: 12px;
}

.footer .widget .posts-list li:after {
  content: '';
  display: table;
  clear: both;
}

.footer .widget .posts-list li:hover {
  background-color: #101010;
}
.footer .mn-desc {
   font: 500 13px/1.7 "Open Sans",Arial,sans-serif;
   color: #9a9a9a;
}
.footer .mn-desc .mn-label {
   font-weight: 700px;
}
</style>
