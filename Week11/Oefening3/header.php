<header>
      <!-- Fixed navbar -->
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">Split IT</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link <?php if($url == 'main.php' || empty($url)) echo 'active';; ?>" href="?url=main.php">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link <?php if($url == 'contact.php') echo 'active'; ?>" href="?url=contact.php">contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>