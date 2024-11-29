import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { HelmetProvider } from 'react-helmet-async';

import ThemeProvider from "@/providers/ThemeProvider"
import store from '@/store';
import routes from '@/routes'

const App: React.FC = () => {

    const imgUrl = new URL('/public/logo.png', import.meta.url).href

    return <Provider store={store}>
        <ThemeProvider>
            <HelmetProvider>
                <Helmet>
                    <meta charSet="UTF-8" />
                    <link rel="icon" type="image/svg+xml" href={imgUrl} />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Anime Watch</title>
                </Helmet>
            </HelmetProvider>
            <RouterProvider router={createBrowserRouter(routes, {
                // https://reactrouter.com/en/main/routers/create-browser-router#optsfuture
                future: {
                    v7_fetcherPersist: true,
                    v7_normalizeFormMethod: true,
                    v7_partialHydration: true,
                    v7_relativeSplatPath: true,
                    v7_skipActionErrorRevalidation: true,
                },
            })} />
        </ThemeProvider>
    </Provider>
}

export default App;