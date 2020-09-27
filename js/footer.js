class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <footer class="bg-dark-blue">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-2">
                <h6 class="text-white mb-3">Company</h6>
                <nav class="nav flex-column">
                    <a class="nav-link active" href="about.html">About</a>
                    <a class="nav-link" href="#">Team</a>
                    <a class="nav-link" href="#">Blog</a>
                    <a class="nav-link" href="#">Careers</a>
                    <a class="nav-link" href="#">Referal Program</a>
                </nav>
            </div>
            <div class="col-lg-2">
                <h6 class="text-white mb-3">Products</h6>
                <nav class="nav flex-column">
                    <a class="nav-link active" href="software.html">Software</a>
                    <a class="nav-link" href="#">Graphic</a>
                    <a class="nav-link" href="#">Markeitng</a>
                    <a class="nav-link" href="#">Web Development</a>
                </nav>
            </div>
            <div class="col-lg-2">
                <h6 class="text-white mb-3">Community</h6>
                <nav class="nav flex-column">
                    <a class="nav-link active" href="#">Tutorials</a>
                    <a class="nav-link" href="#">Meetup</a>
                    <a class="nav-link" href="#">Q&A</a>
                    <a class="nav-link" href="#">Write for Donations</a>
                </nav>
            </div>
            <div class="col-lg-2">
                <h6 class="text-white mb-3">Support</h6>
                <nav class="nav flex-column">
                    <a class="nav-link active" href="#">Contact</a>
                    <a class="nav-link" href="#">Sales</a>
                    <a class="nav-link" href="terms-and-conditions.html">Terms & Conditions</a>
                    <a class="nav-link" href="privacy-policy.html">Privacy Policy</a>
                </nav>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-lg-6">
                <img src="img/logo-light.svg" width="80" alt="">
                <span class="text-white small"><sup>&copy;</sup> 2020 Dware Lab INC. All rights reserved.</span>
            </div>
            <div class="col-lg-6 text-lg-right social-icons">
                <a href="#" class="text-muted">
                    <i class="fab fa-facebook-square  "></i>
                </a>
                <a href="#" class=" ml-2 text-muted">
                    <i class="fab fa-instagram  "></i>
                </a>
                <a href="#" class=" ml-2 text-muted">
                    <i class="fab fa-twitter-square  "></i>
                </a>
                <a href="#" class=" ml-2 text-muted">
                    <i class="fab fa-youtube-square  "></i>
                </a>
            </div>
        </div>
    </div>
</footer>
    `;
    }
}

customElements.define('main-footer', Footer);