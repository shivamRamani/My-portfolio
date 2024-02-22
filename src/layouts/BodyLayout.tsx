export const BodyLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <div className="absolute w-full">{children}</div>;
};
