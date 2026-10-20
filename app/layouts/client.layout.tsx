import { Outlet } from 'react-router';
import ClientFooter from '~/components/client-component/Client.Footer';
import ClientHeader from '~/components/client-component/Client.Header';

export default function ClientLayout() {
    return (
        <div className="grid grid-rows-[65px_1fr_auto] grid-cols-1 min-h-dvh w-full">
            <ClientHeader/>
            <div className=''>
                <Outlet/>
            </div>
            <ClientFooter/>
        </div>
    );
}
