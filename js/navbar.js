class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <div class="navbar navbar-expand-lg topBar d-none d-lg-flex navbar-light bg-white">
            <span class="badge badge-warning">New</span>
            <a class="nav-link" href="#">Scale your business, not costs by running your apps on Dware Lab</a>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Docs</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Get Support</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sales</a>
                </li>
            </ul>
        </div>
        
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-lg-5 primaryNav">
            <a class="navbar-brand" href="index.html">
                <img src="img/logo.svg" width="120" alt="Dware Logo">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="productDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Products
                        </a>
                        <div class="dropdown-menu shadow" aria-labelledby="productDropdown">
                            <a class="dropdown-item" href="software.html">
                                <i class="fas fa-laptop-code text-primary"></i>
                                <div class="mb-0">
                                    <span>Softwares</span>
                                    <span class="small d-block text-muted">Scalable Virtual Machines</span>
                                </div>
                            </a>
                            <a class="dropdown-item" href="#">
                                <i class="fas fa-paint-brush text-primary"></i>
                                <div class="mb-0">
                                    <span>Graphics</span>
                                    <span class="small d-block text-muted">Scalable Virtual Machines</span>
                                </div>
                            </a>
                            <a class="dropdown-item" href="#">
                                <i class="fas fa-globe text-primary"></i>
                                <div class="mb-0">
                                    <span>Web</span>
                                    <span class="small d-block text-muted">Scalable Virtual Machines</span>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="hireDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Hire
                        </a>
                        <div class="dropdown-menu shadow" aria-labelledby="navbarDropdown">
                            <p>Category:</p>
                            <a class="dropdown-item" href="#">
                                <i class="fas fa-eye text-primary"></i>
                                <div class="mb-0">
                                    <span>Visual</span>
                                    <span class="small d-block text-muted">Scalable Virtual Machines</span>
                                </div>
                            </a>
                            <a class="dropdown-item" href="#">
                                <i class="fas fa-code text-primary"></i>
                                <div class="mb-0">
                                    <span>Back End</span>
                                    <span class="small d-block text-muted">Scalable Virtual Machines</span>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Learn</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Team</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Customers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mr-lg-3 mb-2 mb-lg-0">
                        <a class="nav-link btn btn-outline-primary" href="#">
                            Sign-in
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn btn-primary text-white" href="#">
                            Sign-Up
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    `;
    }
}

customElements.define('main-navbar', Navbar);