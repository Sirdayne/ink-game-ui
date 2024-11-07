# User Interface
## Plinko-UI: React + TypeScript + Vite


### To run with Docker

run in terminal
```bash
docker build -f Dockerfile -t user-interface-dev .
docker run -p 5173:5173 user-interface-dev
```

### To deploy with Docker

run in terminal
```bash
docker build -f Dockerfile.prod -t user-interface-prod .
docker run -p 3000:3000 user-interface-prod
```

### To run Locally

run in terminal
```bash
npm i
npm run dev
```
