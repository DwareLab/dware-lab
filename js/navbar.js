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
                                <span class="item-title">Softwares</span>
                            </a>
                            <a class="dropdown-item" href="graphics.html">
                                <span class="icon icon-graphic"></span>
                                <span class="item-title">Graphics</span>
                            </a>
                            <a class="dropdown-item" href="html-templates.html">
                                <span class="icon icon-web"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span></span>
                                <span class="item-title">Html Templates</span>
                            </a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="hireDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Hire
                            <i class="fas fa-angle-down"></i>
                        </a>
                        <div class="dropdown-menu shadow" aria-labelledby="navbarDropdown">
                            <div class="row">
                                <div class="col-lg-2">
                            <p class="menu-sub-title">Mobile:</p>
                            <a class="dropdown-item" href="ios.html">
                                <i class="fab fa-apple text-primary"></i>
                                <span class="item-title">iOS</span>
                            </a>
                            <a class="dropdown-item" href="android.html">
                                <i class="fab fa-android text-primary"></i>
                                <span class="item-title">Android</span>
                            </a>
                            <a class="dropdown-item" href="react-career.html">
                                <i class="fab fa-react text-primary"></i>
                                <span class="item-title">React Native</span>
                            </a>
                            <a class="dropdown-item" href="flutter-career.html">
                                <svg role="img" fill="#1D58BF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><path d="M14.314 0L2.3 12 6 15.7 21.684.012h-7.357L14.314 0zm.014 11.072l-6.471 6.457 6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.371z"/></svg>
                                <span class="item-title">Flutter</span>
                            </a>
                            <a class="dropdown-item" href="ionic-career.html">
                            <svg id="Layer_1" style="enable-background:new 0 0 426 426;" version="1.1" viewBox="0 0 426 426" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">
\t.st0{fill:#1D58BF;}
\t.st1{fill:#FFFFFF;}
</style><path class="st0" d="M412.5,214.3c-9.2,58.5-27.1,75.6-58.8,114.9c-31.7,33.3-77.3,88.9-141.9,85.8c-58.5-9.2-75.6-27.1-114.9-58.8  C63.6,324.5,8,278.9,11.1,214.3c9.2-58.5,27.1-75.6,58.8-114.9c31.7-33.3,77.3-88.9,141.9-85.8c58.5,9.2,75.6,27.1,114.9,58.8  C360,104.1,415.6,149.7,412.5,214.3z"/><g><circle class="st1" cx="213" cy="218.6" r="43.6"/><path class="st1" d="M298.2,154.4c2.3-2.6,3.7-6,3.7-9.8c0-8.3-6.7-15-15-15c-3.8,0-7.2,1.4-9.8,3.7   c-17.9-13.5-40.1-21.5-64.1-21.5c-58.8,0-106.7,47.9-106.7,106.7c0,58.8,47.9,106.7,106.7,106.7s106.7-47.9,106.7-106.7   C319.7,194.5,311.7,172.3,298.2,154.4z M213,321.7c-56.9,0-103.1-46.3-103.1-103.1c0-56.9,46.3-103.1,103.1-103.1   c23.1,0,44.5,7.6,61.7,20.5c-1.7,2.4-2.8,5.4-2.8,8.6c0,8.3,6.7,15,15,15c3.2,0,6.2-1,8.6-2.8c12.9,17.2,20.5,38.6,20.5,61.7   C316.1,275.4,269.9,321.7,213,321.7z"/></g></svg>
                                <span class="item-title">ionic</span>
                            </a>
                            <a class="dropdown-item" href="ionic-career.html">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" version="1.1"><g id="surface1"><path d="M32.875 5h-17.75a3.303 3.303 0 0 0-2.816 1.648L3.422 22.34a3.477 3.477 0 0 0 0 3.32l8.887 15.692c.562 1 1.68 1.648 2.816 1.648h17.75a3.303 3.303 0 0 0 2.816-1.648l8.887-15.692a3.477 3.477 0 0 0 0-3.32L35.691 6.648A3.303 3.303 0 0 0 32.875 5z" fill="#1D58BF"/><path d="M32.613 34h-3.05a.407.407 0 0 1-.352-.219L24.047 24.2c-.027-.05-.035-.11-.047-.16-.012.05-.02.11-.047.16l-5.18 9.582a.396.396 0 0 1-.335.219h-3.051c-.274 0-.485-.367-.34-.621L20.094 24l-5.047-9.398c-.125-.227.027-.551.265-.602h3.126c.132 0 .265.09.335.207l5.18 9.586c.027.05.035.098.047.156.012-.058.02-.105.047-.156l5.164-9.586a.406.406 0 0 1 .352-.207h3.05c.266 0 .465.355.34.602L27.906 24l5.047 9.379c.145.254-.066.621-.34.621z" fill="#FFF"/></g><metadata><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:dc="http://purl.org/dc/elements/1.1/"><rdf:Description about="https://iconscout.com/legal#licenses" dc:title="xamarin" dc:description="xamarin" dc:publisher="Iconscout" dc:date="2017-12-15" dc:format="image/svg+xml" dc:language="en"><dc:creator><rdf:Bag><rdf:li>Icons8</rdf:li></rdf:Bag></dc:creator></rdf:Description></rdf:RDF></metadata></svg>
                                <span class="item-title">Xamarin</span>
                            </a>
</div>
                                <div class="col-lg-2">
                                    <p class="menu-sub-title">JS & Front End:</p>
                                    <a class="dropdown-item" href="reactjs.html">
                                        <i class="fab fa-react text-primary"></i>
                                        <span class="item-title">React JS</span>
                                    </a>
                                    <a class="dropdown-item" href="vuejs.html">
                                        <i class="fab fa-vuejs text-primary"></i>
                                        <span class="item-title">VUE JS</span>
                                    </a>
                                    <a class="dropdown-item" href="angular.html">
                                        <i class="fab fa-angular text-primary"></i>
                                        <span class="item-title">Angular</span>
                                    </a>
                                    <a class="dropdown-item" href="angular.html">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612" focusable="false" role="img">
  <title>Bootstrap</title>
  <path fill="#1D58BF" d="M612 510c0 56.1-45.9 102-102 102H102C45.9 612 0 566.1 0 510V102C0 45.9 45.9 0 102 0h408c56.1 0 102 45.9 102 102v408z"/>
  <path fill="#FFF" d="M166.3 133h173.5c32 0 57.7 7.3 77 22s29 36.8 29 66.5c0 18-4.4 33.4-13.2 46.2-8.8 12.8-21.4 22.8-37.8 29.8v1c22 4.7 38.7 15.1 50 31.2 11.3 16.2 17 36.4 17 60.8 0 14-2.5 27.1-7.5 39.2-5 12.2-12.8 22.7-23.5 31.5s-24.3 15.8-41 21-36.5 7.8-59.5 7.8h-164V133zm62.5 149.5h102c15 0 27.5-4.2 37.5-12.8s15-20.8 15-36.8c0-18-4.5-30.7-13.5-38s-22-11-39-11h-102v98.6zm0 156.5h110.5c19 0 33.8-4.9 44.2-14.8 10.5-9.8 15.8-23.8 15.8-41.8 0-17.7-5.2-31.2-15.8-40.8s-25.2-14.2-44.2-14.2H228.8V439z"/>
</svg>

                                        <span class="item-title">Bootstrap</span>
                                    </a>
                                    <a class="dropdown-item" href="chrome-ext.html">
                                        <i class="fab fa-chrome text-primary"></i>
                                        <span class="item-title">Chrome Extensions</span>
                                    </a>
                                </div>
                                <div class="col-lg-2">
                                    <p class="menu-sub-title">Back End:</p>
                                    <a class="dropdown-item" href="nodejs.html">
                                        <i class="fab fa-node-js text-primary"></i>
                                        <span class="item-title">Node JS</span>
                                    </a>
                                    <a class="dropdown-item" href="vuejs.html">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 192.756 192.756"><g fill-rule="evenodd" clip-rule="evenodd"><path fill="#fff" d="M0 0h192.756v192.756H0V0z"/><path d="M149.189 53.706c-1.059 0-1.939.706-1.939 1.763 0 1.234.881 1.94 1.939 1.94s1.939-.706 1.939-1.94c.001-1.057-.88-1.763-1.939-1.763zm0 .176a1.58 1.58 0 0 1 1.586 1.587c0 1.058-.705 1.764-1.586 1.764-1.059 0-1.764-.706-1.764-1.764.001-.881.706-1.587 1.764-1.587zm.881 2.822l-.529-1.058c.354-.176.529-.353.529-.529 0-.353-.352-.705-.881-.705h-.883v2.292h.354v-.881h.529l.529.881h.352zm-1.41-1.235v-.705h.529c.352 0 .529.176.529.176 0 .353-.178.529-.529.529h-.529z" fill="#0c0e0f"/><path fill="#a1c677" d="M69.135 138.346H98.23v-.53H69.135v.53z"/><path fill="#a4c67f" d="M69.135 137.816H98.23v-.529H69.135v.529z"/><path fill="#a9c983" d="M69.135 137.287H98.23v-.705H69.135v.705z"/><path fill="#aecc8b" d="M69.135 136.582H98.23v-.529H69.135v.529z"/><path fill="#b1cf92" d="M69.135 136.053H98.23v-.53H69.135v.53z"/><path fill="#b6d296" d="M69.135 135.523H98.23v-.529H69.135v.529z"/><path fill="#b9d29b" d="M69.135 134.994H98.23v-.705H69.135v.705z"/><path fill="#bdd4a0" d="M69.135 134.289H98.23v-.529H69.135v.529z"/><path fill="#c4d9a8" d="M69.135 133.76H98.23v-.53H69.135v.53z"/><path fill="#c5daad" d="M69.135 133.23H98.23v-.527H69.135v.527z"/><path fill="#c8dab2" d="M69.135 132.703H98.23v-.707H69.135v.707z"/><path fill="#cedeb9" d="M69.135 131.996H98.23v-.527H69.135v.527z"/><path fill="#d2e0be" d="M69.135 131.469H98.23v-.53H69.135v.53z"/><path fill="#d6e2c4" d="M69.135 130.939H98.23v-.529H69.135v.529z"/><path fill="#dae7cb" d="M69.135 130.41H98.23v-.529H69.135v.529z"/><path fill="#dce8d0" d="M69.135 129.881H98.23v-.705H69.135v.705z"/><path fill="#e2ebd6" d="M69.135 129.176H98.23v-.53H69.135v.53z"/><path fill="#e5ebdc" d="M69.135 128.646H98.23v-.529H69.135v.529z"/><path fill="#eceee0" d="M69.135 128.117H98.23v-.529H69.135v.529z"/><path fill="#f0f1e8" d="M69.135 127.588H98.23v-.705H69.135v.705z"/><path fill="#f2f2ee" d="M69.135 126.883H98.23v-.529H69.135v.529z"/><path fill="#f7f8f6" d="M69.135 126.354H98.23v-.528H69.135v.528z"/><path fill="#fff" d="M69.135 125.826H98.23v-.529H69.135v.529z"/><path fill="#f3d23d" d="M98.406 137.639h.53v-26.625h-.53v26.625zM98.936 137.639h.529v-26.625h-.529v26.625z"/><path fill="#f3d43f" d="M99.465 137.639h.527v-26.625h-.527v26.625z"/><path fill="#f3d244" d="M99.992 137.639h.705v-26.625h-.705v26.625z"/><path fill="#f3d44a" d="M100.697 137.639h.53v-26.625h-.53v26.625z"/><path fill="#f3d44e" d="M101.227 137.639h.529v-26.625h-.529v26.625z"/><path fill="#f3d552" d="M101.756 137.639h.529v-26.625h-.529v26.625z"/><path fill="#f2d359" d="M102.285 137.639h.705v-26.625h-.705v26.625z"/><path fill="#f1d65c" d="M102.99 137.639h.53v-26.625h-.53v26.625z"/><path fill="#f4d760" d="M103.52 137.639h.529v-26.625h-.529v26.625z"/><path fill="#f2da67" d="M104.049 137.639h.529v-26.625h-.529v26.625z"/><path fill="#f2da6b" d="M104.578 137.639h.529v-26.625h-.529v26.625z"/><path fill="#f5db6f" d="M105.107 137.639h.705v-26.625h-.705v26.625z"/><path fill="#f6dd72" d="M105.812 137.639h.528v-26.625h-.528v26.625z"/><path fill="#f5dc77" d="M106.34 137.639h.529v-26.625h-.529v26.625z"/><path fill="#f5dc7b" d="M106.869 137.639h.529v-26.625h-.529v26.625z"/><path fill="#f5dc7f" d="M107.398 137.639h.706v-26.625h-.706v26.625z"/><path fill="#f5dc80" d="M108.104 137.639h.529v-26.625h-.529v26.625z"/><path fill="#f5dd84" d="M108.633 137.639h.529v-26.625h-.529v26.625z"/><path fill="#f5df88" d="M109.162 137.639h.529v-26.625h-.529v26.625z"/><path fill="#f5df8b" d="M109.691 137.639h.705v-26.625h-.705v26.625z"/><path fill="#f5df8d" d="M110.396 137.639h.53v-26.625h-.53v26.625z"/><path fill="#f4e08e" d="M110.926 137.639h.529v-26.625h-.529v26.625z"/><path fill="#f6e193" d="M111.455 137.639h.529v-26.625h-.529v26.625z"/><path fill="#f4e297" d="M111.984 137.639h.528v-26.625h-.528v26.625z"/><path fill="#f7e69b" d="M112.512 137.639h.705v-26.625h-.705v26.625z"/><path fill="#f7e69d" d="M113.217 137.639h.529v-26.625h-.529v26.625z"/><path fill="#f7e6a0" d="M113.746 137.639h.529v-26.625h-.529v26.625z"/><path fill="#f7e6a4" d="M114.275 137.639h.53v-26.625h-.53v26.625z"/><path fill="#f7e7a8" d="M114.805 137.639h.705v-26.625h-.705v26.625z"/><path fill="#f7e7ab" d="M115.51 137.639h.529v-26.625h-.529v26.625z"/><path fill="#f7e7ad" d="M116.039 137.639h.529v-26.625h-.529v26.625z"/><path fill="#fae9b1" d="M116.568 137.639h.53v-26.625h-.53v26.625z"/><path fill="#f7e7b4" d="M117.098 137.639h.529v-26.625h-.529v26.625z"/><path fill="#f7e8b6" d="M117.627 137.639h.705v-26.625h-.705v26.625z"/><path fill="#f7e8b8" d="M118.332 137.639h.527v-26.625h-.527v26.625z"/><path fill="#f7e8bc" d="M118.859 137.639h.53v-26.625h-.53v26.625z"/><path fill="#f7e8bf" d="M119.389 137.639h.529v-26.625h-.529v26.625z"/><path fill="#f7eac4" d="M119.918 137.639h.705v-26.625h-.705v26.625z"/><path fill="#f7ebc5" d="M120.623 137.639h.529v-26.625h-.529v26.625z"/><path fill="#f7ebc7" d="M121.152 137.639h.53v-26.625h-.53v26.625z"/><path fill="#f8edcc" d="M121.682 137.639h.529v-26.625h-.529v26.625z"/><path fill="#fbefd0" d="M122.211 137.639h.529v-26.625h-.529v26.625z"/><path fill="#f8efd2" d="M122.74 137.639h.705v-26.625h-.705v26.625z"/><path fill="#f8f0d6" d="M123.445 137.639h.53v-26.625h-.53v26.625z"/><path fill="#f8f0d9" d="M123.975 137.639h.527v-26.625h-.527v26.625z"/><path fill="#f8f0db" d="M124.502 137.639h.529v-26.625h-.529v26.625z"/><path fill="#f8f0df" d="M125.031 137.639h.705v-26.625h-.705v26.625z"/><path fill="#f9f3e4" d="M125.736 137.639h.53v-26.625h-.53v26.625z"/><path fill="#f9f3e6" d="M126.266 137.639h.529v-26.625h-.529v26.625z"/><path fill="#f9f3e9" d="M126.795 137.639h.529v-26.625h-.529v26.625z"/><path fill="#f9f6eb" d="M127.324 137.639h.705v-26.625h-.705v26.625z"/><path fill="#f9f6ee" d="M128.029 137.639h.53v-26.625h-.53v26.625z"/><path fill="#f9f6f0" d="M128.559 137.639h.529v-26.625h-.529v26.625z"/><path fill="#faf9f4" d="M129.088 137.639h.529v-26.625h-.529v26.625z"/><path fill="#fffffb" d="M129.617 137.639h.528v-26.625h-.528v26.625z"/><path fill="#fff" d="M130.145 137.639h.707v-26.625h-.707v26.625z"/><path fill="#769fd2" d="M45.331 90.559h25.391v-.705H45.859l-.528.705z"/><path fill="#76a1d3" d="M44.801 91.088h25.921v-.529H45.331l-.53.529z"/><path fill="#7aa2d3" d="M44.272 91.617h26.45v-.529H44.801l-.529.529z"/><path fill="#7ca3d3" d="M43.744 92.146h26.978v-.529h-26.45l-.528.529z"/><path fill="#80a4d1" d="M43.214 92.852h27.508v-.706H43.744l-.53.706z"/><path fill="#80a4d1" d="M42.685 93.38h28.037v-.528H43.214l-.529.528z"/><path fill="#80a3d0" d="M42.156 93.91h28.566v-.53H42.685l-.529.53z"/><path fill="#84a6d1" d="M41.627 94.438h29.095v-.528H42.156l-.529.528zM41.099 95.144h29.623v-.706H41.627l-.528.706z"/><path fill="#88a9d2" d="M40.57 95.673h30.152v-.529H41.099l-.529.529z"/><path fill="#8aabd5" d="M40.041 96.201h30.681v-.528H40.57l-.529.528z"/><path fill="#8cacd5" d="M39.511 96.73h31.211v-.529H40.041l-.53.529z"/><path fill="#8daed9" d="M39.159 97.26h31.563v-.53H39.511l-.352.53z"/><path fill="#8fafd9" d="M38.63 97.965h32.092v-.705H39.159l-.529.705z"/><path fill="#91afd7" d="M38.101 98.494h32.621v-.529H38.63l-.529.529z"/><path fill="#93b0d9" d="M37.572 99.023h33.15v-.529H38.101l-.529.529z"/><path fill="#96b4d9" d="M37.043 99.553h33.679v-.53h-33.15l-.529.53z"/><path fill="#9ab5da" d="M36.514 100.258h34.208v-.705H37.043l-.529.705z"/><path fill="#9bb6da" d="M35.985 100.787h34.737v-.529H36.514l-.529.529z"/><path fill="#9db6da" d="M35.456 101.316h35.266v-.529H35.985l-.529.529z"/><path fill="#9fb7da" d="M34.927 101.844h35.795v-.528H35.456l-.529.528z"/><path fill="#a2bbdd" d="M34.574 102.549h36.148v-.705H34.927l-.353.529v.176z"/><path fill="#a3badc" d="M34.574 103.078h36.148v-.529H34.574v.529z"/><path fill="#a4bdde" d="M34.574 103.607h36.148v-.529H34.574v.529z"/><path fill="#a8bddd" d="M34.574 104.137h36.148v-.53H34.574v.53z"/><path fill="#a8bfde" d="M34.574 104.666h36.148v-.529H34.574v.529z"/><path fill="#aac0de" d="M34.574 105.371h36.148v-.705H34.574v.705z"/><path fill="#aec3e2" d="M34.574 105.9h36.148v-.529H34.574v.529zM34.574 106.43h36.148v-.53H34.574v.53z"/><path fill="#b1c5e3" d="M34.574 106.957h36.148v-.527H34.574v.527z"/><path fill="#b3c6e4" d="M34.574 107.664h36.148v-.707H34.574v.707z"/><path fill="#b5c9e5" d="M34.574 108.193h36.148v-.529H34.574v.529z"/><path fill="#b7c9e5" d="M34.574 108.721h36.148v-.528H34.574v.528z"/><path fill="#b9c9e4" d="M34.574 109.25h36.148v-.529H34.574v.529z"/><path fill="#bbcbe3" d="M34.574 109.955h36.148v-.705H34.574v.705z"/><path fill="#bdcce3" d="M34.574 110.484h36.148v-.705H34.574v.705z"/><path fill="#c0cee5" d="M34.574 111.014h36.148v-.53H34.574v.53z"/><path fill="#c4d0e5" d="M34.574 111.543h36.148v-.529H34.574v.529zM34.574 112.072h36.148v-.529H34.574v.529z"/><path fill="#c6d3e6" d="M34.574 112.777h36.148v-.705H34.574v.705z"/><path fill="#c9d5e8" d="M34.574 113.307h36.148v-.53H34.574v.53zM34.574 113.834h36.148v-.527H34.574v.527z"/><path fill="#ccd8e9" d="M34.574 114.363h36.148v-.529H34.574v.529z"/><path fill="#cdd7eb" d="M34.574 115.068h36.148v-.705H34.574v.705z"/><path fill="#d0dced" d="M34.574 115.598h36.148v-.53H34.574v.53z"/><path fill="#d2dded" d="M34.574 116.127h36.148v-.529H34.574v.529z"/><path fill="#d4deee" d="M34.574 116.656h36.148v-.529H34.574v.529z"/><path fill="#d6dff1" d="M34.574 117.186h36.148v-.53H34.574v.53z"/><path fill="#d7e0ef" d="M34.574 117.891h36.148v-.705H34.574v.705z"/><path fill="#dbe2ed" d="M34.574 118.42h36.148v-.529H34.574v.529z"/><path fill="#dee3ed" d="M34.574 118.949h36.148v-.529H34.574v.529z"/><path fill="#e0e6ef" d="M34.574 119.477h36.148v-.528H34.574v.528z"/><path fill="#e2e7ef" d="M34.574 120.184h36.148v-.707H34.574v.707zM34.574 120.711h36.148v-.527H34.574v.527z"/><path fill="#e5e8ef" d="M34.574 121.24h36.148v-.529H34.574v.529z"/><path fill="#e7ebf0" d="M34.574 121.77h36.148v-.53H34.574v.53z"/><path fill="#eaecf1" d="M34.574 122.475h36.148v-.705H34.574v.705z"/><path fill="#eceff2" d="M34.574 123.004h36.148v-.529H34.574v.529zM34.574 123.533h36.148v-.529H34.574v.529z"/><path fill="#f2f3f4" d="M34.574 124.062h36.148v-.529H34.574v.529zM34.574 124.592h36.148v-.53H34.574v.53z"/><path fill="#f4f4f7" d="M34.574 125.297h36.148v-.705H34.574v.705z"/><path fill="#f7f8f8" d="M34.574 125.826h36.148v-.529H34.574v.529z"/><path fill="#fbfdff" d="M34.574 126.354h36.148v-.528H34.574v.528z"/><path fill="#fff" d="M34.574 126.883h36.148v-.529H34.574v.529z"/><path fill="#da884e" d="M132.086 90.559h26.625v-.705h-26.625v.705z"/><path fill="#db8a51" d="M132.086 91.088h26.625v-.529h-26.625v.529z"/><path fill="#da8f56" d="M132.086 91.617h26.625v-.529h-26.625v.529z"/><path fill="#db925d" d="M132.086 92.146h26.625v-.529h-26.625v.529z"/><path fill="#db9461" d="M132.086 92.852h26.625v-.706h-26.625v.706z"/><path fill="#dc9865" d="M132.086 93.38h26.625v-.528h-26.625v.528z"/><path fill="#df9b68" d="M132.086 93.91h26.625v-.53h-26.625v.53z"/><path fill="#e39d6d" d="M132.086 94.438h26.625v-.528h-26.625v.528z"/><path fill="#e09f73" d="M132.086 95.144h26.625v-.706h-26.625v.706z"/><path fill="#e2a475" d="M132.086 95.673h26.625v-.529h-26.625v.529z"/><path fill="#e0a779" d="M132.086 96.201h26.625v-.528h-26.625v.528z"/><path fill="#e1a97b" d="M132.086 96.73h26.625v-.529h-26.625v.529z"/><path fill="#e1ab80" d="M132.086 97.26h26.625v-.53h-26.625v.53z"/><path fill="#e3af86" d="M132.086 97.965h26.625v-.705h-26.625v.705z"/><path fill="#e3b188" d="M132.086 98.494h26.625v-.529h-26.625v.529z"/><path fill="#e6b48d" d="M132.086 99.023h26.625v-.529h-26.625v.529z"/><path fill="#e7b892" d="M132.086 99.553h26.625v-.53h-26.625v.53z"/><path fill="#e9be96" d="M132.086 100.258h26.625v-.705h-26.625v.705z"/><path fill="#e7c09b" d="M132.086 100.787h26.625v-.529h-26.625v.529z"/><path fill="#e8c29e" d="M132.086 101.316h26.625v-.529h-26.625v.529z"/><path fill="#e8c4a2" d="M132.086 101.844h26.625v-.528h-26.625v.528z"/><path fill="#eac8a8" d="M132.086 102.549h26.625v-.705h-26.625v.705z"/><path fill="#ebccad" d="M132.086 103.078h26.625v-.529h-26.625v.529z"/><path fill="#ebceb0" d="M132.086 103.607h26.625v-.529h-26.625v.529z"/><path fill="#ecd0b4" d="M132.086 104.137h26.625v-.53h-26.625v.53z"/><path fill="#efd3b7" d="M132.086 104.666h26.625v-.529h-26.625v.529z"/><path fill="#f3d7bd" d="M132.086 105.371h26.625v-.705h-26.625v.705z"/><path fill="#f4d9c1" d="M132.086 105.9h26.625v-.529h-26.625v.529z"/><path fill="#f2dcc6" d="M132.086 106.43h26.625v-.53h-26.625v.53z"/><path fill="#f0dfcb" d="M132.086 106.957h26.625v-.527h-26.625v.527z"/><path fill="#f1e1ce" d="M132.086 107.664h26.625v-.707h-26.625v.707z"/><path fill="#f2e5d6" d="M132.086 108.193h26.625v-.529h-26.625v.529z"/><path fill="#f3e7da" d="M132.086 108.721h26.625v-.528h-26.625v.528z"/><path fill="#f3e9df" d="M132.086 109.25h26.625v-.529h-26.625v.529z"/><path fill="#f4eee3" d="M132.086 109.955h26.625v-.705h-26.625v.705z"/><path fill="#f4eee7" d="M132.086 110.484h26.625v-.705h-26.625v.705z"/><path fill="#f5f0ea" d="M132.086 111.014h26.625v-.53h-26.625v.53z"/><path fill="#f9f6f0" d="M132.086 111.543h26.625v-.529h-26.625v.529z"/><path fill="#f9f6f4" d="M132.086 112.072h26.625v-.529h-26.625v.529z"/><path fill="#fff" d="M132.086 112.777h26.625v-.705h-26.625v.705z"/><path d="M132.086 126.178c-3.527 7.936-8.289 11.461-15.871 11.461-6.172 0-12.166-3.525-14.811-8.816-1.764-3.703-2.469-6.877-2.469-13.576h42.494c0-7.76-.881-12.52-3.174-17.457-4.055-8.993-12.166-14.107-22.217-14.107-16.047 0-27.155 12.519-27.155 31.035 0 18.162 10.756 30.328 26.801 30.328 11.814 0 20.984-6.348 24.688-17.104l-8.286-1.764zm-32.621-17.809c.527-5.643 1.586-8.465 4.055-11.639 3.35-3.879 7.582-6.171 12.695-6.171 9.346 0 14.988 6.701 15.342 17.81H99.465zM183.574 137.287c-3.174.529-4.938.705-7.055.705-6.17 0-9.346-2.998-9.346-9.17v-59.07l-8.992.353v57.307c0 11.814 5.643 17.809 16.752 17.809 2.645 0 4.584-.176 8.641-.705v-7.229zM2.834 135.523c0-5.113 4.056-9.17 9.169-9.17s9.169 4.057 9.169 9.17-4.056 9.17-9.169 9.17-9.169-4.056-9.169-9.17zM75.13 145.045v-36.146c0-8.289-.706-12.697-1.939-15.518-3.174-6.524-9.522-10.58-17.104-10.58-7.935 0-12.695 2.998-18.691 12.343V84.388h-8.288v60.657h8.993V110.66c0-11.461 6.876-20.101 16.398-20.101 7.758 0 11.99 5.114 11.99 14.636v39.85h8.641z" fill="#0c0e0f"/><path fill="#0c0e0f" d="M115.863 83.682h65.77v6.877h-65.77v-6.877zM74.249 138.168h41.966v6.701H74.249v-6.701zM27.168 72.574V48.063h-4.585l-7.229 19.573-7.406-19.573H3.54v24.511h2.469V51.061l8.111 21.513h2.116l7.935-21.513v21.513h2.997zM33.164 72.574h2.821V54.412h-2.821v18.162zm0-21.513h2.998v-2.998h-2.998v2.998zM52.383 66.226c-.529 2.998-2.116 4.584-4.408 4.584-2.998 0-4.761-2.821-4.761-7.406 0-4.408 1.939-7.229 4.938-7.229 2.292 0 3.879 1.587 4.231 4.584l2.645-.529c-.705-4.056-3.174-6.348-6.876-6.348-4.761 0-7.935 3.879-7.935 9.522 0 5.819 2.998 9.522 7.758 9.522 1.94 0 3.527-.529 4.938-1.94 1.058-1.058 1.587-2.116 2.116-4.408l-2.646-.352zM61.729 72.574v-9.698c.176-3.703 2.821-6.524 6.172-6.172v-2.821h-1.058c-1.235 0-2.645.706-3.527 1.587-.529.882-.882 1.411-1.763 3.174v-4.231h-2.469v18.162h2.645v-.001zM77.422 53.882c-2.645 0-4.761 1.058-6.348 3.174-1.234 1.587-1.939 3.703-1.939 6.348s.529 4.761 1.763 6.524c1.411 2.116 3.351 2.998 6.172 2.998 4.938 0 8.288-3.879 8.288-9.346-.001-5.642-3.174-9.698-7.936-9.698zm-.176 2.293c1.411 0 2.821.881 3.703 1.939.882 1.235 1.411 2.998 1.411 5.29 0 4.584-1.939 7.406-5.114 7.406-3.174 0-5.114-2.821-5.114-7.406 0-2.116.529-4.055 1.234-5.114.883-1.234 2.469-2.115 3.88-2.115zM87.297 67.812c.353 1.587.881 2.469 1.94 3.174 1.41 1.411 3.526 1.94 6.171 1.94 4.408 0 7.406-2.116 7.406-5.466 0-2.998-1.764-4.761-5.467-5.29l-3.526-.706c-2.116-.353-2.998-1.234-2.998-2.468 0-1.763 1.587-2.821 4.056-2.821 2.116 0 3.703.881 4.585 2.998l2.645-.705c-1.059-2.998-3.527-4.585-7.23-4.585-4.232 0-6.877 2.116-6.877 5.29 0 2.645 1.763 4.585 4.937 5.113l3.879.706c1.939.353 2.998 1.411 2.998 2.821 0 1.763-1.764 2.998-4.232 2.998-1.763 0-3.35-.529-4.408-1.41-.529-.529-.882-1.059-1.234-2.116l-2.645.527zM113.924 53.882c-2.646 0-4.762 1.058-6.525 3.174-1.234 1.587-1.939 3.703-1.939 6.348s.705 4.761 1.764 6.524c1.586 2.116 3.525 2.998 6.172 2.998 4.938 0 8.287-3.879 8.287-9.346-.001-5.642-2.999-9.698-7.759-9.698zm-.354 2.293c1.588 0 2.998.881 3.879 1.939.883 1.235 1.234 2.998 1.234 5.29 0 4.584-1.939 7.406-5.113 7.406s-4.938-2.821-4.938-7.406c0-2.116.354-4.055 1.234-5.114.706-1.234 2.294-2.115 3.704-2.115zM133.672 54.412h-4.408c0-1.939 0-2.116.354-2.821.352-1.234 1.586-1.763 3.35-1.763.705 0 1.059 0 1.764.176v-2.292c-1.234-.176-1.939-.176-2.645-.176-2.293 0-4.232 1.058-4.938 2.821-.354 1.058-.354 1.763-.529 4.056h-3.174v2.292h3.174v15.87h2.645v-15.87h4.408v-2.293h-.001zM146.545 70.634c-.883.176-1.588.176-2.117.176-1.939 0-2.998-.881-2.998-2.821V56.704h4.057v-2.292h-4.057v-4.761l-2.645.176-.176 4.584h-3.174v2.292h3.174v10.933c0 3.526 1.764 5.466 5.289 5.466.705 0 1.412-.176 2.646-.176v-2.292h.001zM184.809 87.385v-3.35h1.056v-.353h-2.644v.353h1.058v3.35h.53zM189.922 87.385v-3.703h-.883l-1.057 2.998-1.058-2.998h-.705v3.703h.529v-3.174l1.234 3.174h.176l1.235-3.174v3.174h.529z"/></g>
\t<metadata>
\t\t<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:dc="http://purl.org/dc/elements/1.1/">
\t\t\t<rdf:Description about="https://iconscout.com/legal#licenses" dc:title="microsoft-net" dc:description="microsoft-net" dc:publisher="Iconscout" dc:date="2017-06-06" dc:format="image/svg+xml" dc:language="en">
\t\t\t\t<dc:creator>
\t\t\t\t\t<rdf:Bag>
\t\t\t\t\t\t<rdf:li>Icon Mafia</rdf:li>
\t\t\t\t\t</rdf:Bag>
\t\t\t\t</dc:creator>
\t\t\t</rdf:Description>
\t\t</rdf:RDF>
    </metadata></svg>
                                        <span class="item-title">.net</span>
                                    </a>
                                    <a class="dropdown-item" href="php.html">
                                        <i class="fab fa-php text-primary"></i>
                                        <span class="item-title">PHP</span>
                                    </a>
                                    <a class="dropdown-item" href="laravel.html">
                                        <i class="fab fa-laravel text-primary"></i>
                                        <span class="item-title">Laravel</span>
                                    </a>
                                    <a class="dropdown-item" href="java.html">
                                        <i class="fab fa-java text-primary"></i>
                                        <span class="item-title">Java</span>
                                    </a>
                                    <a class="dropdown-item" href="python.html">
                                        <i class="fab fa-python text-primary"></i>
                                        <span class="item-title">Python</span>
                                    </a>
                                </div>
                                <div class="col-lg-2">
                                    <p class="menu-sub-title">e-Commerce & CMS:</p>
                                    <a class="dropdown-item" href="wordpress.html">
                                        <i class="fab fa-wordpress text-primary"></i>
                                        <span class="item-title">Woocommerce</span>
                                    </a>
                                    <a class="dropdown-item" href="drupal.html">
                                        <i class="fab fa-drupal text-primary "></i>
                                        <span class="item-title">Drupal</span>
                                    </a>
                                    <a class="dropdown-item" href="magento.html">
                                        <i class="fab fa-magento text-primary "></i>
                                        <span class="item-title">Magento</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="learn.html">Learn</a>
                    </li>
<!--                    <li class="nav-item">-->
<!--                        <a class="nav-link" href="team.html">Team</a>-->
<!--                    </li>-->
<!--                    <li class="nav-item">-->
<!--                        <a class="nav-link" href="#">Customers</a>-->
<!--                    </li>-->
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
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