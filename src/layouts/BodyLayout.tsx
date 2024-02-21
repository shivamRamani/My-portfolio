export const BodyLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <div className="absolute">{children}</div>;
};
