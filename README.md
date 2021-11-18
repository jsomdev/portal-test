This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Before you run the development server

We want to run the nextjs project over https.
An easy solution to accomplish this, is to use a proxy

1. Install a local proxy package: npm install -g local-ssl-proxy
2. Once it's installed, run the following command: local-ssl-proxy --source 3000 --target {TARGET}
3. In your terminal you should see: Started proxy: https://localhost:3000 → http://localhost:{TARGET}
4. Navigate to https://localhost:3000. This will proxy to http://localhost:{TARGET}

### Running the development server

To start the development server execute the dev script:

1. Run the following command: npm run dev.
2. This will start the development server on specified port [default: 3002].
3. In your terminal you should see: ready - started server on 0.0.0.0:3002, url: http://localhost:3002
4. Once it's running, use your proxy to navigate to the server.

You can also run the command: npm run dev:proxy. This will pipe the proxy command and dev command.
