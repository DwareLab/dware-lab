class Modal extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                            <!-- FormModal -->
    <div class="modal fade" id="formModal" tabindex="-1" role="dialog" aria-labelledby="formModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header border-0 pb-0">
                    <h5 class="modal-title" id="formModalLabel">Get a Custom Quote</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
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
                    <p class="small text-center mt-2 mb-0">
                        By signing up you agree to the <a href="#">Terms of Service.</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    `;
    }
}

customElements.define('main-modal', Modal);