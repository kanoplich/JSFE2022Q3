const BODY = document.querySelector("body");

BODY.innerHTML = `  <div class="container">
                      <h1>Gem Puzzle</h1>
                        <div class="menu__container">
                          <div class="puzzle__buttons">
                            <button class="start">Shuffle and start</button>
                            <button class="save">Save</button>
                            <button class="result">Result</button>
                          </div>
                          <form class="form">
                            <label for="text">Move</label>
                            <input type="text" name="move" id="move" size="1">
                            <label for="time">Time</label>
                            <input type="time" name="time" id="time">
                            <label for="size">Other size</label>
                            <select name="size" id="size">
                              <option value="3">3x3</option>
                              <option value="4">4x4</option>
                              <option value="5">5x5</option>
                              <option value="6">6x6</option>
                              <option value="7">7x7</option>
                              <option value="8">8x8</option>
                            </select>
                          </form>
                        </div>
                        <div class="puzzle__wrapper">
                          <div class="puzzle">
                            <div class="puzzle__content">
                              <div class="puzzle__item">
                                <div class="item">1</div>
                                <div class="item">2</div>
                                <div class="item">3</div>
                                <div class="item">4</div>
                                <div class="item">5</div>
                                <div class="item">6</div>
                                <div class="item">7</div>
                                <div class="item">8</div>
                                <div class="item">9</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>`

