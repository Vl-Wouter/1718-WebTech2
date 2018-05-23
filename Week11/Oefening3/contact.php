<main role="main" class="container">
      <h1 class="mt-5">Contact pagina</h1>
      <form method="POST">
        <div class="form-group">
          <label for="naam">Naam:</label>
          <input class="form-control" name="naam" id="naam" placeholder="Jan Janssen" type="text">
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input class="form-control" name="email" id="email" placeholder="jan.janssen@email.com" type="email">
        </div>
        <div class="form-group">
          <label for="bericht">Bericht</label>
          <textarea class="form-control" placeholder="Bericht..." name="bericht" rows="12"></textarea>
        </div>
        <div class="form-group">
          <input type="submit" name="submitted" class="btn btn-outline-success">
        </div>
      </form>
    </main>