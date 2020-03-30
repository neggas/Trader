import AppPortfolio from './components/AppPortfolio'
import AppStock from './components/AppStock'
import Home from './components/Home'
export const routes = [
    { path: "/", component: Home, name: Home },
    { path: "/portfolio", component: AppPortfolio, name: AppPortfolio },
    { path: "/stocks", component: AppStock, name: AppStock }
]