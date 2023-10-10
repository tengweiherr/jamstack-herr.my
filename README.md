# herr.my V2

[herr.my](https://herr.my)

## :trophy: Awards

1. **Site of the Year (Personal category, 2022)** <sub>_Issued by Malaysia Website Award (MWA) by Exabytes 2022_</sub>
2. **Site of the Month (Personal category, Feb 2022)** <sub>_Issued by Malaysia Website Award (MWA) by Exabytes 2022_</sub>


## :rocket: Project Background

Re-engineering [the first version of the website](https://github.com/tengweiherr/herr.my) into Jamstack fullstack webapp with Headless CMS for a few reasons:

1. connecting to a CMS for updating content with minimal effort
2. optimal performance
3. security enhancement
4. scalability in the future (adding more pages and content)
5. auto deployment

## :bricks: Infrastructure

### Jamstack (Headless CMS) with:

- NextJS
- Contentful API with GraphQL

#### Frontend:

- Bootstrap
- Styled Component
- Animation with [GSAP by GreenSock](https://greensock.com/gsap/)

#### Proxy

- Cloudflare

#### Cloud

- AWS S3 (storing assets)
- AWS Lambda (serverless function triggered by S3 object to make deployment on Vercel)

#### Hosting

- Vercel

#### CI/CD

- Github Actions
