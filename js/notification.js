class Div extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <div class="row mb-4">
            <div class="col-lg-12">
                <a href="#" class="btn btn-dark w-100 rounded">
                    <p class="mb-0"><strong>Free credit active</strong>: Get started on DigitalOcean with a $100, 60-day credit for new users.</p>
                </a>
            </div>
        </div>
    `;
    }
}

customElements.define('main-notify', Div);