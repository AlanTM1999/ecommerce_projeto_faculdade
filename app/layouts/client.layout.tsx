import { Outlet } from 'react-router';
import ClientFooter from '~/components/client-component/Client.Footer';
import ClientHeader from '~/components/client-component/Client.Header';

export default function ClientLayout() {
    return (
        <div className="grid grid-rows-[auto_1fr_auto]">
            <ClientHeader/>
            <Outlet/>
            <ClientFooter/>
        </div>
    );
}
