export const BodyLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <div className="absolute w-full mb-96">{children}</div>;
};
