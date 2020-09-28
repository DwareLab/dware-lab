class Section extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <div class="bg-primary py-5" id="getStartedNow">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 v-centered">
                        <h3 class="mb-0 text-white">Get Started Now</h3>
                    </div>
                    <div class="col-lg-3">
                        <button class="btn btn-white w-100 py-3" data-toggle="modal" data-target="#formModal">
                            Create Account
                        </button>
                    </div>
                </div>
            </div>
            <div class="animation-wrapper">
                <div class="particle particle-1"></div>
                <div class="particle particle-2"></div>
                <div class="particle particle-3"></div>
                <div class="particle particle-4"></div>
            </div>
        </div>
    `;
    }
}

customElements.define('main-get', Section);