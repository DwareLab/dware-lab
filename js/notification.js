class Div extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <div class="row mb-4">
            <div class="col-lg-12">
                <a href="#" class="btn btn-dark w-100 rounded">
                    <p class="mb-0"><strong>Happy</strong> Web Developers Day</p>
                </a>
            </div>
        </div>
    `;
    }
}

customElements.define('main-notify', Div);