class Modal extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <div class="card shadow p-0">
                        <div class="card-header border-bottom-0 bg-light text-center py-4">
                            <h5 class="mb-0">Get a Custom Quote</h5>
                        </div>
                        <div class="card-body">
                            <div class="form-body px-2">
                                <div class="form-group">
                                    <input type="text" class="form-control py-4" placeholder="First Name">
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control py-4" placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control py-4" placeholder="Password">
                                </div>
                                <div class="form-group mb-0">
                                    <a href="#" class="btn btn-primary w-100 py-3">
                                    Sign up with email
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="small text-center mt-2 mb-0">
                        By signing up you agree to the <a href="#">Terms of Service.</a>
                    </p>
    `;
    }
}

customElements.define('main-modal', Modal);