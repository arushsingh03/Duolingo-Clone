import { Footer } from "./footer";
import { Header } from "./header";
type prop = {
    children: React.ReactNode;
};
const MarketingLayout =   ({children}: prop ) => {
    return(
        <div className="min-h-screen flex flex-col">
            <header />
        <main className="flex-1 flex flex-col items-center justify-center">{children}
        </main>
        <footer />
        </div>
    );
};

export default MarketingLayout;