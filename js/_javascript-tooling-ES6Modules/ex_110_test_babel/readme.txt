Teste com o conversor de codigos babel, para navegadores antigos

# instalando dev dependencies do babel -> yarn add @babel/cli @babel/preset-env @babel/core -D

# convertendo codigo ES6 para versão mais antiga -> npx babel main.js -o bundle.js --presets=@babel/env

# criando script para automatizar a conversão -> "scripts": { "babelconvert": "babel ./src/main.js -o ./src/bundle.js --presets=@babel/env -w" }
# A flag -w ele irá ficar assistindo o codigo e sempre que salvar ele vai atualizar