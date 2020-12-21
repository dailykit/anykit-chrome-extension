# anykit-chrome-extension

test extension tool for anykit. injects anykit client script in the current webpage and initialize it.

### Getting Started

1. `git clone https://github.com/dailykit/anykit-chrome-extension`
   or `gh repo clone dailykit/anykit-chrome-extension`

2. run `npm i`
3. run `npm run build`
4. open google-chrome browser
5. type `chrome://extensions` in the search bar
6. turn on developer mode (toggle on top-right)
7. click on load unpacked option button under the blue navbar
8. navigate to the git cloned directory. The extension should be loaded and shown in your extensions area.

### HOW TO USE

navigate to any recipe website which supports json+ld or microdata and click on the extension. This will send a request to anykit server
to save the recipe and render a BMK (Buy as a MealKit) button.
