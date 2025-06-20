import GradientBackground from "@/components/GradientBackground";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col">
            <GradientBackground />
            <Navbar />
            {children}
        </div>
    );
}
