# About

This is template that combine Jekyll and TailwindCSS with some Jekyll plugins to optimize site.


# Installation

Open your terminal, follow these step :

1. Open project directory
```
cd <directory_path>
```

2. Install node_modules
```
yarn install
```


# Running

Open your terminal, follow these step :

1. Open project directory
```
cd <directory_path>
```

2. Run local server
```
bundle exec jekyll serve --livereload
```

3. Open browser with url `localhost:4000`
```
open -a "Google Chrome" "http://localhost:4000"
```


# Deployment

Open your terminal, follow these step :

1. Copy compiled TailwindCSS and paste to assets directory
```
cp _site/tailwind.css assets/css/tailwind.css
```

2. Push to repository
```
git push origin main
```


# Source

- https://mzrn.sh/2022/04/09/starting-a-blank-jekyll-site-with-tailwind-css-in-2022/
