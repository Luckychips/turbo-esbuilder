import Header from '../../components/ui/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>{children}</main>
        </>
    );
}
