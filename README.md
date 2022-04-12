# activeui-starter

## How to use ? - ActiveUI app

### Download ActiveUI starter

### In the starter, install via yarn the desired plugins
- Install a specific plugin : `yarn add @activeui-starter/heatmap`
- Install all plugins : `yarn add @activeui-starter/lib`

### Add the installed plugins to your plugins.tsx file, then run the app !

## How to use ? - Development

### Local development:

1) Run `yarn` to install dependencies
2) Run `yarn start` to start development server
3) Reach `localhost:3000`

### Tests:

Run `yarn test`

### Deployement:

1) Bootstrap packages with `yarn lerna:boostrap`
2) Build packages with `yarn lerna:build`
3) Deploy on NPM with `yarn lerna:publish`
