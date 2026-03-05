import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "GlowCart. - Store Dashboard",
    description: "GlowCart. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
