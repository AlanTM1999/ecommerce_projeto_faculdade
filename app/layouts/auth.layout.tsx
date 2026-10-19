import { Outlet } from "react-router";
import Container from "~/components/Container";

export default function AuthLayout() {
    
    return (
        <div className="grid grid-rows-[250px_1fr] lg:grid-rows-[1fr] lg:grid-cols-[1fr_600px] h-dvh max-h-dvh">
            <img src="https://placehold.co/1050x250/1A1A1A/FFFFFF/png" className="lg:hidden bg-green-300 h-full object-cover" alt=""/>
            <img src="https://placehold.co/1050x1050/1A1A1A/FFFFFF/png" className="hidden lg:block h-full object-cover" alt=""/>
            <div className="py-6 flex flex-col justify-center">
                <Container>
                    <Outlet/>
                </Container>
            </div>
        </div>
    );
}
