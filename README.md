# About

This is template that combine Jekyll and TailwindCSS with some Jekyll plugins to optimize site. Also use Netlify CMS to organize post on admin panel.


# TailwindCSS

Open your terminal, follow these step :

## Installation

1. Open project directory
```
cd <directory_path>
```

2. Install node_modules
```
yarn install
```

## Running

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

## Deployment

1. Copy compiled TailwindCSS and paste to assets directory
```
cp _site/tailwind.css assets/css/tailwind.css
```

2. Push to repository
```
git push origin main
```


# Netlify CMS

## Create GitHub OAuth App

1. Go to [Github Developer Settings](https://github.com/settings/developers)

2. On menu `OAuth Apps`, click button `New OAuth App`

3. Fill in the form
```
Application name :
<app_name> e.g. Blog

Homepage URL :
<site_url> e.g. https://hikammn.github.io/

Application description :
<app_description> e.g. Admin panel

Authorization callback URL :
https://api.netlify.com/auth/done

✅ Enable Device Flow
```

4. Once finished, leave the page in the background. You will need the **Client ID** and **Client Secret** on this page later.


## Create Netlify App

1. Go to [Netlify](https://app.netlify.com/account/sites), then login use your GitHub account

2. On menu `Sites`, click button `Add new site`, then click `Deploy manually`

3. __on progress__

## Set Config

1. Set configuration of your website on `/admin/config.yml`, you can change this to yours :
```
backend:
  name: github
  repo: <username>/<repository>   # e.g. hikammn/hikammn.github.io
  branch: <branch>                # e.g. main
  site_domain: <netlify_app_url>  # e.g. relaxed-blancmange-bf2a4b.netlify.app

site_url: <site_url>              # e.g. https://hikammn.com or https://hikammn.github.io
display_url: <site_url>           # e.g. https://hikammn.com or https://hikammn.github.io
logo_url: <image_url>             # e.g. https://hikammn.github.io/assets/img/favicon.png
```


# Source

- https://mzrn.sh/2022/04/09/starting-a-blank-jekyll-site-with-tailwind-css-in-2022/
- https://sujaykundu.com/blog/how-to-setup-netlify-cms-with-github-pages-hosted-jekyll-blog/