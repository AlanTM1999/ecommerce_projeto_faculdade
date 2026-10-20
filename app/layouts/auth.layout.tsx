import { Outlet } from "react-router";
import Container from "~/components/Container";

export default function AuthLayout() {
    
    return (
        <div className="grid grid-rows-[250px_1fr] lg:grid-rows-[1fr] lg:grid-cols-[1fr_750px] h-dvh max-h-dvh w-full">
            <img src="https://placehold.co/1050x250/1A1A1A/FFFFFF/png" className="lg:hidden bg-green-300 h-full object-cover" alt=""/>
            <img src="https://placehold.co/1050x1050/1A1A1A/FFFFFF/png" className="hidden lg:block h-full max-h-dvh w-full object-cover" alt=""/>
            <div className="py-6 flex mt-10 mb-5 lg:my-0 lg:justify-center lg:items-center w-full">
                <div className="w-full mx-auto">
                    <Container>
                        <Outlet/>
                    </Container>
                </div>
            </div>
        </div>
    );
}
