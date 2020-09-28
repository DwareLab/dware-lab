class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <div class="navbar navbar-expand-lg topBar px-lg-5 d-none d-lg-flex navbar-light bg-white">
            <span class="badge badge-warning">New</span>
            <a class="nav-link" href="careers.html">We Are Hiring</a>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Support</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sales</a>
                </li>
            </ul>
        </div>
        
        <nav class="navbar navbar-expand-lg navbar-light bg-white px-lg-5 shadow-sm primaryNav">
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
                            <i class="fas fa-angle-down"></i>
                        </a>
                        <div class="dropdown-menu shadow" aria-labelledby="productDropdown">
                            <p class="menu-sub-title">Featured Products:</p>
                            <a class="dropdown-item" href="software.html">
                                <span class="icon icon-software"></span>
                                <div class="mb-0">
                                    <span class="item-title">Softwares</span>
                                </div>
                            </a>
                            <a class="dropdown-item" href="graphics.html">
                                <span class="icon icon-graphic"></span>
                                <div class="mb-0">
                                    <span class="item-title">Graphics</span>
                                </div>
                            </a>
                            <a class="dropdown-item" href="html-templates.html">
                                <span class="icon icon-web"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span></span>
                                <div class="mb-0">
                                    <span class="item-title">Html Templates</span>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="hireDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Hire
                            <i class="fas fa-angle-down"></i>
                        </a>
                        <div class="dropdown-menu shadow" aria-labelledby="navbarDropdown">
                            <p class="menu-sub-title">Category:</p>
                            <a class="dropdown-item" href="#">
                                <span class="icon icon-visual"></span>
                                <div class="mb-0">
                                    <span class="item-title">Visual</span>
                                    <span class="small d-block item-desc">Scalable Virtual Machines</span>
                                </div>
                            </a>
                            <a class="dropdown-item" href="#">
                                <span class="icon icon-backend"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>
                                <div class="mb-0">
                                    <span class="item-title">Back End</span>
                                    <span class="small d-block item-desc">Scalable Virtual Machines</span>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
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
                        <button class="nav-link btn btn-primary text-white" data-toggle="modal" data-target="#formModal">
                            Sign-Up
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    `;
    }
}

customElements.define('main-navbar', Navbar);