import GradientBackground from "@/components/GradientBackground";

export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col">
            <GradientBackground/>
            {children}
        </div>
    );
}
